import { PokemonType } from '@/interfaces/index.js';
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DB } from '@/db';

import {
	Container,
	Content,
	Header,
	HeaderTitle,
	HeaderSearchButton,
	CardType,
	CardTypeImage,
	CardTypeName,
	List,
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
	return (
		<Container>
			<Header>
				<HeaderTitle>Pokemon Finder</HeaderTitle>
				<HeaderSearchButton>
					<Icon name="search" size={25} color="white" />
				</HeaderSearchButton>
			</Header>
			<List
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={item => item.name}
				data={DB.types}
				renderItem={({ item }) => renderTypeItem(item)}
			/>

			<Content />
		</Container>
	);
};

export default Home;
