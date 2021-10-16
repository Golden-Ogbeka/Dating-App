import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Login from './pages/Login';
import { Provider as PaperProvider } from 'react-native-paper';
import Messages from './pages/Messages';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<PaperProvider>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<StatusBar style='auto' />
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name='Login'
							component={Login}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='Messages'
							component={Messages}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</KeyboardAvoidingView>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
