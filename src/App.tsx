import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from '@/routes';

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<SafeAreaView style={{ flex: 1 }}>
				<AppRoutes />
			</SafeAreaView>
		</NavigationContainer>
	);
};

export default App;
