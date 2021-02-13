import { Pokemon, PokemonType } from '@/interfaces/index.js';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DB } from '@/db';
import arrowImage from '../../assets/arrow.png';

import {
	Container,
	Content,
	Header,
	HeaderTitle,
	HeaderSearchButton,
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
} from './styles';

const Home: React.FC = () => {
	const renderTypeItem = (item: PokemonType) => {
		return (
			<CardType key={item.name}>
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
			<Header>
				<HeaderTitle>Pokemon Finder</HeaderTitle>
				<HeaderSearchButton>
					<Icon name="search" size={25} color="white" />
				</HeaderSearchButton>
			</Header>
			<View>
				<TypeList
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={item => item.name}
					data={DB.types}
					renderItem={({ item }) => renderTypeItem(item)}
				/>
			</View>
			<View>
				<ListHeader>
					<ListHeaderTitle>Pokemons</ListHeaderTitle>
					<OrderByNameButton>
						<OrderByNameText>Nome</OrderByNameText>
						<Arrow source={arrowImage} />
					</OrderByNameButton>
				</ListHeader>
				<PokemonList
					showsVerticalScrollIndicator={false}
					data={DB.pokemons}
					keyExtractor={item => Math.random().toString(36).substring(7)}
					renderItem={({ item }) => renderPokemonItem(item)}
				/>
			</View>
			{/*  */}

			<Content />
		</Container>
	);
};

export default Home;
