export interface PokemonCompleto {
  abilities:{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  height: number;
  held_items: any[];
  id: number;
  name: string;
  moves:{
    move: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
  };
  stats:{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
    weight: number;
}