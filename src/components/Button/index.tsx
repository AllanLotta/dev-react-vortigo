import React from 'react';
import { Container, NormalTitle, StrongTitle } from './styles';

type FontWeight = 'normal' | 'strong';

interface ButtonProps {
	title: string;
	action: () => void;
	fontWeight?: FontWeight;
	disabled?: boolean;
	color?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
	title,
	action,
	fontWeight = 'normal',
	disabled = false,
}) => {
	const Title = fontWeight === 'normal' ? NormalTitle : StrongTitle;
	return (
		<Container onPress={() => action()}>
			<Title>{title}</Title>
		</Container>
	);
};

export default CustomButton;
