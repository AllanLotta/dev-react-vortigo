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
	font-size: ${RFValue(18)}px;
`;
