import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import backgroundImage from '../../assets/bg.png';
import nextImage from '../../assets/next.png';
import {
	Container,
	Content,
	GoBackButton,
	Title,
	Description,
	NextButton,
	NextButtonImage,
} from './styles';

type Step = 'FillName' | 'FillPokemonType';
const SignUp: React.FC = () => {
	const [currentStep, setCurrentStep] = useState<Step>('FillName');
	const StepData = {
		FillName: {
			title: 'Lets meet each other first?',
			description: 'First we need to know your name',
			action: () => setCurrentStep('FillPokemonType'),
		},
		FillPokemonType: {
			title: 'Hello, {Your name}!',
			description: '...now tell us which is your favorite Pokémon type',
			action: () => null,
		},
	};
	return (
		<ImageBackground
			source={backgroundImage}
			resizeMode="cover"
			style={{ flex: 1 }}
		>
			<Container>
				<Content>
					{currentStep === 'FillPokemonType' && (
						<GoBackButton onPress={() => setCurrentStep('FillName')}>
							<Icon name="chevron-back" size={40} color="white" />
						</GoBackButton>
					)}

					<Title>{StepData[currentStep].title}</Title>
					<Description>{StepData[currentStep].description}</Description>
					<NextButton onPress={() => StepData[currentStep].action()}>
						<NextButtonImage source={nextImage} />
					</NextButton>
				</Content>
			</Container>
		</ImageBackground>
	);
};

export default SignUp;
