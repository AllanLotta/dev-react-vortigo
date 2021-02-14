import colors from '@/config/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${colors.Primary};
	padding: 4px;
	padding-top: ${getStatusBarHeight() + 20}px;
`;

export const HeaderTitle = styled.Text`
	font-size: ${RFValue(22)}px;
	color: ${colors.LightText};
	padding: 20px;
`;

export const HeaderSearchButton = styled.TouchableOpacity`
	position: absolute;
	right: 20px;
	bottom: 24px;
`;
