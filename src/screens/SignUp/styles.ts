import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '@/config/theme';
import { height, width } from '@/utils/sizes';

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
`;

export const Content = styled.View`
	flex: 1;
	width: ${width * 0.9}px;
`;

export const GoBackButton = styled.TouchableOpacity`
	position: absolute;
`;

export const Title = styled.Text`
	font-size: ${RFValue(26)}px;
	color: ${colors.LightText};
	margin-top: ${height * 0.1}px;
`;

export const Description = styled.Text`
	font-size: ${RFValue(20)}px;
	color: ${colors.LightText};
	margin-top: ${height * 0.15}px;
`;

export const InputContainer = styled.View`
	margin-top: ${height * 0.1}px;
`;

export const NextButton = styled.TouchableOpacity`
	position: absolute;
	align-self: center;
	bottom: 50px;
`;
export const NextButtonImage = styled.Image``;

export const Card = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	padding: 20px;
`;

export const CardAvatar = styled.Image`
	width: 60px;
	height: 60px;
`;

export const CardName = styled.Text`
	flex: 0.5;
	font-size: ${RFValue(22)}px;
	font-weight: 500;
	margin-left: 10px;
	text-transform: capitalize;
`;

export const CardRadio = styled.Image`
	position: absolute;
	right: 20px;
`;

export const ConfirmButtonContainer = styled.View`
	padding-top: 20px;
	padding-bottom: 50px;
	align-items: center;
`;
