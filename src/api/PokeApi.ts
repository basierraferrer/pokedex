import Config from "react-native-config";
import { Pokemon } from "./types/api";

interface ResultPokeAPI {
  count: number,
  next: string | null,
  previus: string | null,
  results: {
    name: string,
    url: string
  }[]
}

export async function getPokemonsApi(nextUrl: string | null) {
  try {
    const url = nextUrl ? nextUrl : `${Config.API_URL}/pokemon?limit=20&offset=0`;
    const response = await fetch(url);
    const result = await response.json() as ResultPokeAPI;
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailByUrlApi(url: string) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(id: number) {
  try {
    const url = `${Config.API_URL}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result as Pokemon;
  } catch (error) {
    throw error;
  }
}