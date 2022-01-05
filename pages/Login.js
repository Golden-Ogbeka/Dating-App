import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
// const image = { uri: 'https://reactjs.org/logo-og.png' };
import backgroundImage from '../assets/background.jpg';
import LogoImage from '../assets/logo.png';

export default function Login(props) {
	return (
		<ImageBackground source={backgroundImage} style={styles.background} resizeMode='cover'>
			<ScrollView style={styles.container}>
				<View
					style={{
						paddingTop: 91,
						alignItems: 'center',
					}}
				>
					<Image
						source={LogoImage}
						style={{
							width: 95,
							height: 95,
						}}
						resizeMode='contain'
					/>
					{/* <Text>Find love here</Text> */}
					<View>
						<Button
							mode='contained'
							style={{
								padding: 10,
								marginLeft: 20,
								marginRight: 20,
							}}
							onPress={() => props.navigation.navigate('Spaces')}
							color='#FFF'
							// dark
						>
							View Spaces
						</Button>
					</View>
				</View>
				<View
					style={{
						paddingTop: 161,
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						Log in
					</Text>
				</View>
				<View
					style={{
						paddingTop: 10,
						paddingLeft: 25,
						paddingRight: 25,
						// alignItems: 'center',
						// justifyContent: 'center',
						// flexGro: 1,
						width: '100%',
					}}
				>
					<TextInput
						label='Email'
						value=''
						style={{
							borderTopRightRadius: 17.23,
							borderTopLeftRadius: 17.23,
							borderRadius: 17.23,
							paddingLeft: 10,
							marginBottom: 21,
						}}
					/>
					<TextInput
						label='Password'
						value=''
						style={{
							borderTopRightRadius: 17.23,
							borderTopLeftRadius: 17.23,
							borderRadius: 17.23,
							paddingLeft: 10,
							paddingRight: 10,
						}}
						right={
							<TextInput.Icon
								name='eye'
								style={{
									paddingRight: 10,
								}}
							/>
						}
					/>
					<Text
						style={{
							color: 'white',
							alignSelf: 'flex-end',
							paddingTop: 10,
						}}
					>
						Forgot Password?
					</Text>
				</View>
				<View
					style={{
						paddingTop: 103,
					}}
				>
					<Button
						mode='contained'
						style={{
							backgroundColor: '#EB5757',
							padding: 10,
							marginLeft: 20,
							marginRight: 20,
						}}
						onPress={() => props.navigation.navigate('Messages')}
					>
						Log in
					</Button>
					<View
						style={{
							paddingTop: 7,
							paddingBottom: 128,
							display: 'flex',
							flexDirection: 'row',
							alignSelf: 'center',
						}}
					>
						<Text
							style={{
								color: 'white',
							}}
						>
							Don’t have an account?
						</Text>
						<Text
							style={{
								color: 'white',
								fontWeight: 'bold',
							}}
						>
							{' '}
							Sign Up
						</Text>
					</View>
				</View>
			</ScrollView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: 'red',
		width: '100%',
		height: '100%',
		flex: 1,
	},
	background: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
});
