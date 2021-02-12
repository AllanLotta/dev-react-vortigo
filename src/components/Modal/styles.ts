import styled from 'styled-components/native';
import colors from '@/config/theme';
import { height, width } from '@/utils/sizes';
import { RFValue } from 'react-native-responsive-fontsize';

export const Modal = styled.Modal``;

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: rgba(1, 1, 1, 0.5);
`;

export const Content = styled.View`
	position: absolute;
	bottom: 0;
	height: ${height * 0.7}px;
	width: ${width}px;
	background-color: ${colors.Light};
`;

export const Header = styled.View`
	flex-direction: row;
	padding: 20px;
	border-bottom-width: 1px;
	border-bottom-color: #d7d7d7;
	align-items: center;
`;

export const Title = styled.Text`
	flex: 0.8;
	font-size: ${RFValue(18)}px;
	font-weight: 500;
`;

export const CloseContainer = styled.TouchableOpacity`
	flex: 0.2;
	align-items: center;
	justify-content: center;
`;

export const CloseImage = styled.Image``;
