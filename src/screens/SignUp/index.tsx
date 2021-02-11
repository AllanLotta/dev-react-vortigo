import Input from '@/components/Input';
import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
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
	InputContainer,
	NextButton,
	NextButtonImage,
} from './styles';

type Step = 'FillName' | 'FillPokemonType';
export interface FormaData {
	name: string;
}
const SignUp: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const [currentStep, setCurrentStep] = useState<Step>('FillName');
	const handleNameSubmit = (formData: FormData) => {
		formRef.current?.setData({ name: '' });
		setCurrentStep('FillPokemonType');
	};
	const StepData = {
		FillName: {
			title: 'Lets meet each other first?',
			description: 'First we need to know your name',
			showArrow: false,
			action: () => formRef.current?.submitForm(),
		},
		FillPokemonType: {
			title: 'Hello, {Your name}!',
			description: '...now tell us which is your favorite Pokémon type',
			showArrow: true,
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
					<InputContainer>
						<Form ref={formRef} onSubmit={data => handleNameSubmit(data)}>
							<Input showArrow={StepData[currentStep].showArrow} name="name" />
						</Form>
					</InputContainer>
					<NextButton onPress={() => StepData[currentStep].action()}>
						<NextButtonImage source={nextImage} />
					</NextButton>
				</Content>
			</Container>
		</ImageBackground>
	);
};

export default SignUp;
