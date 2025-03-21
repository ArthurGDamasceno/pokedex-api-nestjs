import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonResponseDto } from './dto/pokemon-response.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get(':name')
  @ApiResponse({ status: 200, type: PokemonResponseDto })
  @ApiResponse({ status: 404, description: 'Pokémon não encontrado' })
  async getPokemon(@Param('name') name: string): Promise<PokemonResponseDto> {
    return this.pokemonService.getPokemon(name);
  }
}