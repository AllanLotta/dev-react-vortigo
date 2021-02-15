import React from 'react';
import { Container, NormalTitle, StrongTitle } from './styles';

type FontWeight = 'normal' | 'strong';

interface ButtonProps {
	title: string;
	action: () => void;
	fontWeight?: FontWeight;
	color?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
	title,
	action,
	fontWeight = 'normal',
}) => {
	const Title = fontWeight === 'normal' ? NormalTitle : StrongTitle;
	return (
		<Container onPress={() => action()}>
			<Title>{title}</Title>
		</Container>
	);
};

export default CustomButton;
