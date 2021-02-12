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

export const Header = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${colors.Primary};
	padding: 20px;
	padding-top: ${getStatusBarHeight() + 20}px;
`;

export const HeaderTitle = styled.Text`
	font-size: ${RFValue(22)}px;
	color: ${colors.LightText};
`;

export const HeaderSearchButton = styled.TouchableOpacity`
	position: absolute;
	right: 20px;
	bottom: 20px;
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

export const List = styled.FlatList`
	flex-grow: 0;
`;

export const CardItem = styled.TouchableOpacity``;

export const CardItemAvatar = styled.Image``;

export const CardItemName = styled.Text``;
