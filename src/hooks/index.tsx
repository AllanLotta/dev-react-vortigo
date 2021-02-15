import { DB } from '@/db';
import { Pokemon, PokemonType } from '@/interfaces';
import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	useCallback,
} from 'react';

interface AppContextData {
	userName: string;
	setUserName: (data: string) => void;
	selectedPokemonType: PokemonType;
	setSelectedPokemonType: (data: PokemonType) => void;
	pokemons: Pokemon[];
	setPokemons: (data: Pokemon[]) => void;
	searchQuery: string;
	setSearchQuery: (data: string) => void;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
	const [userName, setUserName] = useState<string>('');
	const [selectedPokemonType, setSelectedPokemonType] = useState<PokemonType>({
		name: 'normal',
	} as PokemonType);
	const [pokemons, setPokemons] = useState<Pokemon[]>([] as Pokemon[]);
	const [searchQuery, setSearchQuery] = useState<string>('');

	useEffect(() => {
		if (selectedPokemonType.name) {
			const pokemonsByType = DB.pokemons.filter(item =>
				item.type.includes(selectedPokemonType.name),
			);
			setPokemons(pokemonsByType);
		}
	}, [selectedPokemonType]);

	return (
		<AppContext.Provider
			value={{
				userName,
				setUserName,
				selectedPokemonType,
				setSelectedPokemonType,
				pokemons,
				setPokemons,
				searchQuery,
				setSearchQuery,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

function useApp(): AppContextData {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('useApp must be used within an AppProvider');
	}

	return context;
}

export { AppProvider, useApp };
