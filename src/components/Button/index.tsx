import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

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
			<Text>{title}</Text>
		</Container>
	);
};

export default CustomButton;
