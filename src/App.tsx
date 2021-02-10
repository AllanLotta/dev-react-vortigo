import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from '@/routes';

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<AppRoutes />
		</NavigationContainer>
	);
};

export default App;
