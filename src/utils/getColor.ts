import { POKEMON_TYPE_COLORS } from "./constants";

export const getColorByType = (type: string) => POKEMON_TYPE_COLORS[type.toLowerCase()];