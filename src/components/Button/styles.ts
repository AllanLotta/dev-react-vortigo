import colors from '@/config/theme';
import { width } from '@/utils/sizes';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	width: ${width * 0.8}px;
	padding: 15px;
	border-radius: 10px;
	background-color: ${colors.Secondary};
	justify-content: center;
	align-items: center;
`;

export const NormalTitle = styled.Text`
	color: ${colors.Subtitle};
	font-size: 16px;
	color: ${colors.LightText};
`;
export const StrongTitle = styled.Text`
	color: ${colors.Subtitle};
	font-size: 22px;
	color: ${colors.Light};
	font-weight: 500;
`;
