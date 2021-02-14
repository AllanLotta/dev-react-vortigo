import { Pokemon, PokemonType } from '@/interfaces/index.js';
import React, { ReactComponentElement, ReactNode, useState } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DB } from '@/db';
import Search from '@/components/Search';
import CustomHeader from '@/components/Header';
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
	PokemonListContainer,
	TypeListContainer,
} from './styles';

const Home: React.FC = () => {
	const [searchVisible, setSearchVisible] = useState<boolean>(false);

	const renderHeader = (): ReactNode => {
		const HeaderComponent = (
			<View style={{ padding: 20 }}>
				<HeaderTitle>Pokemon Finder</HeaderTitle>
				<HeaderSearchButton onPress={() => setSearchVisible(true)}>
					<Icon name="search" size={25} color="white" />
				</HeaderSearchButton>
			</View>
		);
		const SearchComponent = <Search close={() => setSearchVisible(false)} />;
		if (searchVisible) return SearchComponent;
		return HeaderComponent;
	};

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
					data={DB.pokemons}
					keyExtractor={item => Math.random().toString(36).substring(7)}
					renderItem={({ item }) => renderPokemonItem(item)}
				/>
			</PokemonListContainer>
			<Content />
		</Container>
	);
};

export default Home;
