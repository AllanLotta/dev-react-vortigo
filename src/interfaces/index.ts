export interface PokemonType {
	thumbnailImage: string;
	name: string;
}

export interface Pokemon {
	abilities: string[];
	detailPageURL: string;
	weight: number;
	weakness: string[];
	number: string;
	height: number;
	collectibles_slug: string;
	featured: string;
	slug: string;
	name: string;
	thumbnailAltText: string;
	thumbnailImage: string;
	id: number;
	type: string[];
}

export interface DataBase {
	pokemons: Pokemon[];
	types: PokemonType[];
}
