import Input from '@/components/Input';
import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { FlatList, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomModal from '@/components/Modal';
import CustomButton from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import { PokemonType } from '@/interfaces';
import { DB } from '@/db';
import backgroundImage from '../../assets/bg.png';
import nextImage from '../../assets/next.png';
import radioOn from '../../assets/radio-on.png';
import radioOff from '../../assets/radio-off.png';

import {
	Container,
	Content,
	GoBackButton,
	Title,
	Description,
	InputContainer,
	NextButton,
	NextButtonImage,
	Card,
	CardAvatar,
	CardName,
	CardRadio,
	ConfirmButtonContainer,
} from './styles';

type Step = 'FillName' | 'FillPokemonType';

export interface FormaData {
	name: string;
}

const SignUp: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const navigation = useNavigation();
	const [currentStep, setCurrentStep] = useState<Step>('FillName');
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [selectedPokemonType, setSelectedPokemonType] = useState<PokemonType>(
		{} as PokemonType,
	);

	useEffect(() => {
		formRef.current?.setData({ type: selectedPokemonType.name });
	}, [selectedPokemonType]);

	useEffect(() => {
		formRef.current?.setData({ type: '', name: '' });
	}, [currentStep]);

	const StepData = {
		FillName: {
			title: 'Lets meet each other first?',
			description: 'First we need to know your name',
			showArrow: false,
			inputName: 'name',
			action: () => formRef.current?.submitForm(),
		},
		FillPokemonType: {
			title: 'Hello, {Your name}!',
			description: '...now tell us which is your favorite Pokémon type',
			showArrow: true,
			inputName: 'type',
			action: () => navigation.navigate('Home'),
		},
	};

	const handleNameSubmit = (formData: FormData) => {
		formRef.current?.setData({ name: '' });
		setCurrentStep('FillPokemonType');
	};

	const renderListItem = (item: PokemonType) => {
		const radioImage =
			item.name === selectedPokemonType.name ? radioOn : radioOff;
		return (
			<Card onPress={() => setSelectedPokemonType(item)}>
				<CardAvatar source={{ uri: item.thumbnailImage }} />
				<CardName>{item.name}</CardName>
				<CardRadio source={radioImage} />
			</Card>
		);
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
							<Input
								showArrow={StepData[currentStep].showArrow}
								action={() => setModalVisible(true)}
								name={StepData[currentStep].inputName}
							/>
						</Form>
					</InputContainer>
					<NextButton onPress={() => StepData[currentStep].action()}>
						<NextButtonImage source={nextImage} />
					</NextButton>
				</Content>
			</Container>
			<CustomModal
				visible={modalVisible}
				title="Select your favorite pokémon type"
				close={() => setModalVisible(false)}
			>
				<FlatList
					data={DB.types}
					renderItem={({ item }) => renderListItem(item)}
					keyExtractor={item => item.name}
				/>
				<ConfirmButtonContainer>
					<CustomButton title="Confirm" action={() => setModalVisible(false)} />
				</ConfirmButtonContainer>
			</CustomModal>
		</ImageBackground>
	);
};

export default SignUp;
