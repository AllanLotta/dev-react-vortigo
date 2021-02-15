import { Pokemon, PokemonType } from '@/interfaces/index.js';
import React from 'react';
import { DB } from '@/db';
import CustomHeader from '@/components/Header';
import { useApp } from '@/hooks';
import arrowImage from '../../assets/arrow.png';

import {
	Container,
	Content,
	CardType,
	CardTypeImage,
	CardTypeName,
	TypeList,
	PokemonList,
	ListHeader,
	ListHeaderTitle,
	OrderByNameButton,
	OrderByNameText,
	Arrow,
	CardItem,
	CardItemAvatar,
	CardItemName,
	PokemonListContainer,
	TypeListContainer,
} from './styles';

const Home: React.FC = () => {
	const {
		pokemons,
		setSelectedPokemonType,
		searchQuery,
		searchResult,
		setSearchQuery,
	} = useApp();

	const handlePressType = (type: PokemonType) => {
		setSelectedPokemonType(type);
		setSearchQuery('');
	};

	const renderTypeItem = (result: { item: PokemonType }) => {
		return (
			<CardType
				key={result.item.name}
				onPress={() => handlePressType(result.item)}
			>
				<CardTypeImage source={{ uri: result.item.thumbnailImage }} />
				<CardTypeName>{result.item.name}</CardTypeName>
			</CardType>
		);
	};

	const renderPokemonItem = (result: { item: Pokemon }) => {
		return (
			<CardItem key={Math.random().toString(36).substring(7)}>
				<CardItemAvatar source={{ uri: result.item.thumbnailImage }} />
				<CardItemName>{result.item.name}</CardItemName>
			</CardItem>
		);
	};

	const getPokemonData = () => {
		if (searchQuery.length === 0) return pokemons;
		return searchResult;
	};

	const keyExtractor = item => {
		return item.name;
	};

	return (
		<Container>
			<CustomHeader title="Pokemon Finder" activeSearch />
			<Content>
				<TypeListContainer>
					<TypeList
						horizontal
						showsHorizontalScrollIndicator={false}
						keyExtractor={keyExtractor}
						data={DB.types}
						renderItem={renderTypeItem}
					/>
				</TypeListContainer>
				<PokemonListContainer>
					<ListHeader>
						<ListHeaderTitle>Pokémon</ListHeaderTitle>
						<OrderByNameButton>
							<OrderByNameText>Name</OrderByNameText>
							<Arrow source={arrowImage} />
						</OrderByNameButton>
					</ListHeader>
					<PokemonList
						showsVerticalScrollIndicator={false}
						data={getPokemonData()}
						initialNumToRender={10}
						keyExtractor={() => Math.random().toString(36).substring(7)} // exists pokemons with the same ID and Name
						renderItem={renderPokemonItem}
					/>
				</PokemonListContainer>
			</Content>
		</Container>
	);
};

export default Home;
