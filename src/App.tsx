import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// @COLORS
import { colors } from '@colors';

// @SHARED
// _routes
// import Routes from '@shared/routes';


const App: React.FC = () => {
	return (
		<NavigationContainer>
				<SafeAreaView style={{ flex: 1, backgroundColor: colors.back2 }}>
					<Text>PokeApp</Text>
				</SafeAreaView>
		</NavigationContainer>
	);
};

export default App;
