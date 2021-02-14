import { Pokemon, PokemonType } from '@/interfaces/index.js';
import React, { ReactComponentElement, ReactNode, useState } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DB } from '@/db';
import Search from '@/components/Search';
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
	const { pokemons, setSelectedPokemonType } = useApp();

	const renderTypeItem = (item: PokemonType) => {
		return (
			<CardType key={item.name} onPress={() => setSelectedPokemonType(item)}>
				<CardTypeImage source={{ uri: item.thumbnailImage }} />
				<CardTypeName>{item.name}</CardTypeName>
			</CardType>
		);
	};

	const renderPokemonItem = (item: Pokemon) => {
		return (
			<CardItem key={Math.random().toString(36).substring(7)}>
				<CardItemAvatar source={{ uri: item.thumbnailImage }} />
				<CardItemName>{item.name}</CardItemName>
			</CardItem>
		);
	};

	return (
		<Container>
			<CustomHeader title="Pokemon Finder" activeSearch />
			<TypeListContainer>
				<TypeList
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={item => item.name}
					data={DB.types}
					renderItem={({ item }) => renderTypeItem(item)}
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
					data={pokemons}
					keyExtractor={item => Math.random().toString(36).substring(7)}
					renderItem={({ item }) => renderPokemonItem(item)}
				/>
			</PokemonListContainer>
			<Content />
		</Container>
	);
};

export default Home;
