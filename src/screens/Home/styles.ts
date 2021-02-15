import colors from '@/config/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
	flex: 1;
`;

export const Content = styled.SafeAreaView`
	flex: 1;
`;

export const CardType = styled.TouchableOpacity`
	align-items: center;
	padding: 20px;
`;

export const CardTypeImage = styled.Image`
	width: 50px;
	height: 50px;
`;

export const CardTypeName = styled.Text`
	font-size: ${RFValue(22)}px;
	text-transform: capitalize;
`;

export const TypeListContainer = styled.View``;

export const TypeList = styled.FlatList`
	flex-grow: 0;
`;

export const PokemonListContainer = styled.View`
	flex: 1;
`;

export const ListHeader = styled.View`
	flex-direction: row;
	justify-content: space-between;
	border-bottom-width: 1px;
	border-bottom-color: #d7d7d7;
	padding: 20px 20px 10px 20px;
`;

export const ListHeaderTitle = styled.Text`
	font-size: ${RFValue(18)}px;
	color: ${colors.Subtitle};
`;

export const OrderByNameButton = styled.TouchableOpacity`
	flex-direction: row;
`;

export const OrderByNameText = styled.Text`
	font-size: ${RFValue(18)}px;
	color: ${colors.Subtitle};
`;

export const Arrow = styled.Image`
	margin-left: 10px;
`;

export const PokemonList = styled.FlatList`
	padding-bottom: 50px;
`;

export const CardItem = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	border-bottom-width: 1px;
	border-bottom-color: #d7d7d7;
	padding: 20px;
`;

export const CardItemAvatar = styled.Image`
	width: 50px;
	height: 50px;
`;

export const CardItemName = styled.Text`
	margin-left: 10px;
	font-size: ${RFValue(16)}px;
`;
