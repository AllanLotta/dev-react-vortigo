import React from 'react';
import { Container, NormalTitle, StrongTitle } from './styles';

type FontWeight = 'normal' | 'strong';

interface ButtonProps {
	title: string;
	action: () => void;
	fontWeight?: FontWeight;
	disabled?: boolean;
	color?: string;
	style?: object;
}

const CustomButton: React.FC<ButtonProps> = ({
	title,
	action,
	fontWeight = 'normal',
	disabled = false,
	style = {},
}) => {
	return (
		<Container style={style} onPress={() => action()}>
			{fontWeight === 'normal' ? (
				<NormalTitle>{title}</NormalTitle>
			) : (
				<StrongTitle>{title}</StrongTitle>
			)}
		</Container>
	);
};

export default CustomButton;
