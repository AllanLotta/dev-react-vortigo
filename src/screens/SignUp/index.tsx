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

	const Data: PokemonType[] = [
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/normal.png',
			name: 'normal',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/fighting.png',
			name: 'fighting',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/flying.png',
			name: 'flying',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/poison.png',
			name: 'poison',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/ground.png',
			name: 'ground',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/rock.png',
			name: 'rock',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/bug.png',
			name: 'bug',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/ghost.png',
			name: 'ghost',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/steel.png',
			name: 'steel',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/fire.png',
			name: 'fire',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/water.png',
			name: 'water',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/grass.png',
			name: 'grass',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/electric.png',
			name: 'electric',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/psychic.png',
			name: 'psychic',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/ice.png',
			name: 'ice',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/dragon.png',
			name: 'dragon',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/dark.png',
			name: 'dark',
		},
		{
			thumbnailImage:
				'https://vortigo.blob.core.windows.net/files/pokemon/assets/fairy.png',
			name: 'fairy',
		},
	];

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
					data={Data}
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
