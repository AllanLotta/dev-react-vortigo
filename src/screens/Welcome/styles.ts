import { height } from '@/utils/sizes';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
`;

export const Logo = styled.Image`
	margin-top: 30px;
`;
export const Finder = styled.Image``;
export const Pikachu = styled.Image`
	position: absolute;
	bottom: 0;
	right: 0;
`;
export const ButtonContainer = styled.View`
	margin-top: ${height * 0.3}px;
`;
