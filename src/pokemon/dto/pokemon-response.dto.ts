import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO (Data Transfer Object) para representar a resposta de um Pokémon.
 * Contém informações como nome, tipos e habilidades.
 */
export class PokemonResponseDto {
  @ApiProperty({
    example: 'pikachu',
    description: 'Nome do Pokémon',
  })
  name: string;

  @ApiProperty({
    example: ['electric'],
    description: 'Tipos do Pokémon',
  })
  types: string[];

  @ApiProperty({
    example: ['static', 'lightning-rod'],
    description: 'Habilidades do Pokémon',
  })
  abilities: string[];
}