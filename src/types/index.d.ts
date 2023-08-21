export interface IPokemonDetail {
  id: number,
  image: string,
  name: string,
  order: string,
  type: string
}

export interface ITypeColors {
  [key: string]: string
}

export type TStackParams = {
  Pokedex: undefined,
  Pokemon: {
    id: number,
    name: string
  }
} 