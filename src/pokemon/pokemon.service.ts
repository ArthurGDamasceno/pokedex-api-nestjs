import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

/**
 * Serviço responsável por buscar dados de Pokémon na PokéAPI.
 */
@Injectable()
export class PokemonService {
  private readonly pokeApiUrl: string;

  constructor(private configService: ConfigService) {
    // Garante que a URL da PokéAPI está definida nas variáveis de ambiente
    this.pokeApiUrl = this.configService.getOrThrow<string>('POKEAPI_URL');
  }

  /**
   * Busca os dados de um Pokémon na PokéAPI.
   *
   * @param name - O nome do Pokémon a ser buscado.
   * @returns Um objeto contendo o nome, tipos e habilidades do Pokémon.
   * @throws NotFoundException se o Pokémon não for encontrado.
   * @throws Error se ocorrer um erro ao buscar os dados.
   */
  async getPokemon(
    name: string,
  ): Promise<{ name: string; types: string[]; abilities: string[] }> {
    try {
      const response = await axios.get(`${this.pokeApiUrl}/pokemon/${name}`);
      const pokemonData = response.data;
  
      return this.transformPokemonData(pokemonData);
    } catch (error) {
      throw this.handlePokemonError(error); // Lança a exceção diretamente
    }
  }

  /**
   * Transforma os dados brutos da PokéAPI em um formato simplificado.
   *
   * @param pokemonData - Os dados brutos do Pokémon retornados pela PokéAPI.
   * @returns Um objeto contendo o nome, tipos e habilidades do Pokémon.
   */
  private transformPokemonData(pokemonData: any): {
    name: string;
    types: string[];
    abilities: string[];
  } {
    return {
      name: pokemonData.name,
      types: pokemonData.types.map((type: any) => type.type.name),
      abilities: pokemonData.abilities.map(
        (ability: any) => ability.ability.name,
      ),
    };
  }

  /**
   * Trata erros ocorridos durante a busca do Pokémon.
   *
   * @param error - O erro capturado durante a requisição.
   * @throws NotFoundException se o Pokémon não for encontrado.
   * @throws Error se ocorrer um erro genérico.
   */
  private handlePokemonError(error: any): never {
    if (error.response?.status === 404) {
      throw new NotFoundException('Pokémon não encontrado');
    }
    throw new Error('Erro ao buscar dados do Pokémon');
  }
}
