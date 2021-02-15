import colors from '@/config/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	background-color: ${colors.Light};
	border-radius: 4px;
	padding: 20px;
	align-items: center;
`;

export const Input = styled.TextInput`
	width: 80%;
	font-size: ${RFValue(18)}px;
	text-align: center;
`;
