import colors from '@/config/theme';
import { width } from '@/utils/sizes';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	border-bottom-width: 3px;
	border-bottom-color: ${colors.LightText};
`;

export const ArrowContainer = styled.TouchableOpacity`
	position: absolute;
	width: ${width * 0.9}px;
	align-self: flex-end;
	justify-content: flex-end;
	align-items: flex-end;
`;

export const TextInput = styled.TextInput`
	font-size: ${RFValue(22)}px;
	text-align: center;
	color: ${colors.LightText};
`;
