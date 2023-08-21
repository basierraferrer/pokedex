
interface PokemonAbility {
  "name": string,
  "url": string
}

interface PokemonAbilities {
  "is_hidden": boolean,
  "slot": number,
  "ability": PokemonAbility
}

interface PokemonForm {
  "name": string,
  "url": string
}

interface PokemonGameIndice {
  "game_index": number,
  "version": {
    "name": string,
    "url": string
  }
}

interface PokemonHeldItem {
  "item": {
    "name": string,
    "url": string
  },
  "version_details": [
    {
      "rarity": number,
      "version": {
        "name": string,
        "url": string
      }
    }
  ]
}

interface PokemonMove {
  "move": {
    "name": string,
    "url": string
  },
  "version_group_details": [
    {
      "level_learned_at": number,
      "version_group": {
        "name": string,
        "url": string
      },
      "move_learn_method": {
        "name": string,
        "url": string
      }
    }
  ]
}

interface PokemonSprites {
  "back_default": string | null,
  "back_female": string | null,
  "back_shiny": string | null,
  "back_shiny_female": string | null,
  "front_default": string | null,
  "front_female": string | null,
  "front_shiny": string | null,
  "front_shiny_female": string | null,
  "other": {
    "dream_world": {
      "front_default": string | null,
      "front_female": string | null
    },
    "home": {
      "front_default": string | null,
      "front_female": string | null,
      "front_shiny": string | null,
      "front_shiny_female": string | null
    },
    "official-artwork": {
      "front_default": string | null
    }
  },
  "versions": {
    "generation-i": {
      "red-blue": {
        "back_default": string | null,
        "back_gray": string | null,
        "front_default": string | null,
        "front_gray": string | null
      },
      "yellow": {
        "back_default": string | null,
        "back_gray": string | null,
        "front_default": string | null,
        "front_gray": string | null
      }
    },
    "generation-ii": {
      "crystal": {
        "back_default": string | null,
        "back_shiny": string | null,
        "front_default": string | null,
        "front_shiny": string | null
      },
      "gold": {
        "back_default": string | null,
        "back_shiny": string | null,
        "front_default": string | null,
        "front_shiny": string | null
      },
      "silver": {
        "back_default": string | null,
        "back_shiny": string | null,
        "front_default": string | null,
        "front_shiny": string | null
      }
    },
    "generation-iii": {
      "emerald": {
        "front_default": string | null,
        "front_shiny": string | null
      },
      "firered-leafgreen": {
        "back_default": string | null,
        "back_shiny": string | null,
        "front_default": string | null,
        "front_shiny": string | null
      },
      "ruby-sapphire": {
        "back_default": string | null,
        "back_shiny": string | null,
        "front_default": string | null,
        "front_shiny": string | null
      }
    },
    "generation-iv": {
      "diamond-pearl": {
        "back_default": string | null,
        "back_female": string | null,
        "back_shiny": string | null,
        "back_shiny_female": string | null,
        "front_default": string | null,
        "front_female": string | null,
        "front_shiny": string | null,
        "front_shiny_female": string | null
      },
      "heartgold-soulsilver": {
        "back_default": string | null,
        "back_female": string | null,
        "back_shiny": string | null,
        "back_shiny_female": string | null,
        "front_default": string | null,
        "front_female": string | null,
        "front_shiny": string | null,
        "front_shiny_female": string | null
      },
      "platinum": {
        "back_default": string | null,
        "back_female": string | null,
        "back_shiny": string | null,
        "back_shiny_female": string | null,
        "front_default": string | null,
        "front_female": string | null,
        "front_shiny": string | null,
        "front_shiny_female": string | null
      }
    },
    "generation-v": {
      "black-white": {
        "animated": {
          "back_default": string | null,
          "back_female": string | null,
          "back_shiny": string | null,
          "back_shiny_female": string | null,
          "front_default": string | null,
          "front_female": string | null,
          "front_shiny": string | null,
          "front_shiny_female": string | null
        },
        "back_default": string | null,
        "back_female": string | null,
        "back_shiny": string | null,
        "back_shiny_female": string | null,
        "front_default": string | null,
        "front_female": string | null,
        "front_shiny": string | null,
        "front_shiny_female": string | null
      }
    },
    "generation-vi": {
      "omegaruby-alphasapphire": {
        "front_default": string | null,
        "front_female": string | null,
        "front_shiny": string | null,
        "front_shiny_female": string | null
      },
      "x-y": {
        "front_default": string | null,
        "front_female": string | null,
        "front_shiny": string | null,
        "front_shiny_female": string | null
      }
    },
    "generation-vii": {
      "icons": {
        "front_default": string | null,
        "front_female": string | null
      },
      "ultra-sun-ultra-moon": {
        "front_default": string | null,
        "front_female": string | null,
        "front_shiny": string | null,
        "front_shiny_female": string | null
      }
    },
    "generation-viii": {
      "icons": {
        "front_default": string | null,
        "front_female": string | null
      }
    }
  }
}

export interface PokemonStat {
  "base_stat": number,
  "effort": number,
  "stat": {
    "name": string,
    "url": string
  }
}

export interface PokemonType {
  "slot": number,
  "type": {
    "name": string,
    "url": string
  }
}

interface PokemonPastType {
  "generation": {
    "name": string,
    "url": string
  },
  "types": PokemonType[]
}

export interface Pokemon {
  "id": number,
  "name": string,
  "base_experience": number,
  "height": number,
  "is_default": boolean,
  "order": number,
  "weight": number,
  "abilities": PokemonAbilities[],
  "forms": PokemonForm[],
  "game_indices": PokemonGameIndice[],
  "held_items": PokemonHeldItem[],
  "location_area_encounters": string,
  "moves": PokemonMove[],
  "species": {
    "name": string,
    "url": string
  },
  "sprites": PokemonSprites,
  "stats": PokemonStat[],
  "types": PokemonType[],
  "past_types": PokrmonPastType[]
}