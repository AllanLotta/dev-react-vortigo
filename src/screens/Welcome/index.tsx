import React from 'react';
import { ImageBackground } from 'react-native';
import CustomButton from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import backgroundImage from '../../assets/bg.png';
import pokemonLogo from '../../assets/pokemon-logo.png';
import finderImage from '../../assets/finder.png';
import pikachuImage from '../../assets/pikachu.png';
import { ButtonContainer, Container, Logo, Finder, Pikachu } from './styles';

const Welcome: React.FC = () => {
	const navigation = useNavigation();
	return (
		<ImageBackground
			source={backgroundImage}
			resizeMode="cover"
			style={{ flex: 1 }}
		>
			<Container>
				<Logo source={pokemonLogo} />
				<Finder source={finderImage} />
				<ButtonContainer>
					<CustomButton
						title="Let's Go!"
						fontWeight="strong"
						action={() => navigation.navigate('SignUp')}
					/>
				</ButtonContainer>
				<Pikachu source={pikachuImage} />
			</Container>
		</ImageBackground>
	);
};

export default Welcome;
