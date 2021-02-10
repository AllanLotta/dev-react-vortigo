import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// _screens
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
	return (
		<StackRoutes.Navigator headerMode="none">
			<StackRoutes.Screen name="Welcome" component={Welcome} />
			<StackRoutes.Screen name="SignUp" component={SignUp} />
			<StackRoutes.Screen name="Home" component={Home} />
		</StackRoutes.Navigator>
	);
};

export default AppRoutes;
