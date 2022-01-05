import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	ImageBackground,
	Dimensions,
} from 'react-native';
import {
	Avatar,
	Badge,
	Button,
	Card,
	IconButton,
	Paragraph,
	Provider,
	Title,
} from 'react-native-paper';
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import backgroundImage from '../assets/background.jpg';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Spaces = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = focused ? 'home' : 'home-outline';
					} else if (route.name === 'Chat') {
						iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
					} else if (route.name === 'Add') {
						iconName = focused ? 'add-circle-outline' : 'add-circle';
					} else if (route.name === 'Favorites') {
						iconName = focused ? 'heart' : 'heart-outline';
					} else if (route.name === 'Discover') {
						iconName = focused ? 'compass' : 'compass-outline';
					}

					// You can return any component that you like here!
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: '#B4192F',
				tabBarInactiveTintColor: '#7B8BB2',
				tabBarStyle: {
					height: 82.5,
					paddingBottom: 25.5,
					paddingHorizontal: 15,
				},
			})}
		>
			<Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
			<Tab.Screen
				name='Chat'
				component={Home}
				options={{
					headerShown: false,
					tabBarBadge: true,
					tabBarBadgeStyle: { maxWidth: 7, maxHeight: 7, marginTop: 4, marginLeft: 2 },
				}}
			/>
			<Tab.Screen
				name='Add'
				component={Home}
				options={{
					headerShown: false,
					tabBarIconStyle: {
						border: '3px solid #FFF',
					},
					tabBarButton: () => (
						<IconButton
							size={60}
							icon={() => <Ionicons name='add-circle' size={70} color='#7B8BB2' />}
							style={{
								top: -35,
							}}
						/>
					),
				}}
			/>
			<Tab.Screen name='Favorites' component={Home} options={{ headerShown: false }} />
			<Tab.Screen name='Discover' component={Home} options={{ headerShown: false }} />
		</Tab.Navigator>
	);
};

export default Spaces;

const Home = () => {
	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
	});
	return (
		<ScrollView style={styles.container}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginTop: 30,
					paddingBottom: 16.73,
					backgroundColor: '#FFF',
					paddingTop: 30,
					paddingHorizontal: 30,
				}}
			>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Avatar.Image
						size={25.68}
						source={{ uri: 'https://picsum.photos/id/237/200/300' }}
					/>
					<Text
						style={{
							marginLeft: 26.69,
							fontSize: 18,
							fontWeight: 'bold',
							fontFamily: 'Poppins_400Regular',
						}}
					>
						Hi, Michael!
					</Text>
				</View>
				<View style={{ position: 'relative' }}>
					<Badge
						size={8}
						style={{
							position: 'absolute',
							left: 14,
							top: 14,
							zIndex: 1,
						}}
					></Badge>
					<IconButton icon='bell-outline' size={22} />
				</View>
			</View>
			<View
				style={{
					backgroundColor: '#F6F6F6',
					flex: 1,
					paddingHorizontal: 30,
				}}
			>
				<View
					style={{
						marginTop: 12,
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: 'row',
						alignItems: 'center',
						marginBottom: 21,
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
							fontFamily: 'Poppins_500Medium',
							color: '#0D253C',
						}}
					>
						Discover Spaces
					</Text>
					<Text
						style={{
							marginLeft: 26.69,
							fontSize: 14,
							fontWeight: '400',
							fontFamily: 'Poppins_400Regular',
							color: '#B4192F',
						}}
					>
						View All
					</Text>
				</View>
				<View
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexDirection: 'row',
						marginBottom: 13,
					}}
				>
					<View
						style={{
							borderRadius: 17,
							overflow: 'hidden',
							width: '49%',
							height: 200.55,
						}}
					>
						<ImageBackground
							source={backgroundImage}
							style={styles.cardImage}
							resizeMode='cover'
						>
							<View
								style={{
									paddingHorizontal: 7.45,
								}}
							>
								<View
									style={{
										borderRadius: 15,
										overflow: 'hidden',
										backgroundColor:
											'linear-gradient(282.63deg, rgba(255, 255, 255, 0.44) 24.04%, #FFFFFF 79.72%)',
										backdropFilter: 'blur(23px)',
										width: '100%',
										minHeight: 82.12,
										paddingTop: 11.95,
										paddingHorizontal: 5.79,
									}}
								>
									<Text
										style={{
											fontSize: 14,
											fontWeight: 'bold',
											fontFamily: 'Poppins_400Regular',
											color: '#111417',
										}}
									>
										Alfred's Kitchen
									</Text>
									<Text
										style={{
											fontSize: 11,
											fontWeight: 'normal',
											fontFamily: 'Poppins_400Regular',
											color: '#111417',
										}}
									>
										54.4k Favorites
									</Text>
									<Text
										style={{
											fontSize: 9,
											fontWeight: '300',
											fontFamily: 'Poppins_400Regular',
											color: '#111417',
											opacity: 0.5,
										}}
									>
										The place for official page for Alfred's Resturant.
									</Text>
								</View>
							</View>
						</ImageBackground>
					</View>
					<View
						style={{
							borderRadius: 17,
							overflow: 'hidden',
							width: '49%',
							height: 200.55,
						}}
					>
						<ImageBackground
							source={backgroundImage}
							style={styles.cardImage}
							resizeMode='cover'
						>
							<View
								style={{
									paddingHorizontal: 7.45,
								}}
							>
								<View
									style={{
										borderRadius: 15,
										overflow: 'hidden',
										backgroundColor:
											'linear-gradient(282.63deg, rgba(255, 255, 255, 0.44) 24.04%, #FFFFFF 79.72%)',
										backdropFilter: 'blur(23px)',
										width: '100%',
										minHeight: 82.12,
										paddingTop: 11.95,
										paddingHorizontal: 5.79,
									}}
								>
									<Text
										style={{
											fontSize: 14,
											fontWeight: 'bold',
											fontFamily: 'Poppins_400Regular',
											color: '#111417',
										}}
									>
										Pink's Kitchen
									</Text>
									<Text
										style={{
											fontSize: 11,
											fontWeight: 'normal',
											fontFamily: 'Poppins_400Regular',
											color: '#111417',
										}}
									>
										54.4k Favorites
									</Text>
									<Text
										style={{
											fontSize: 9,
											fontWeight: '300',
											fontFamily: 'Poppins_400Regular',
											color: '#111417',
											opacity: 0.5,
										}}
									>
										The place for official page for Pink's Kitchen.
									</Text>
								</View>
							</View>
						</ImageBackground>
					</View>
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: 9,
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
							fontFamily: 'Poppins_500Medium',
							color: '#0D253C',
						}}
					>
						Feeds
					</Text>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
						}}
					>
						<Button
							mode='outlined'
							color='#B4192F'
							style={{
								borderRadius: 19,
								borderColor: '#B4192F',
								marginRight: 10,
							}}
						>
							<Text
								style={{
									textTransform: 'none',
									fontSize: 12,
									fontWeight: '500',
									fontFamily: 'Poppins_400Regular',
								}}
							>
								For you
							</Text>
						</Button>
						<Button
							mode='contained'
							color='#B4192F'
							style={{
								borderRadius: 19,
							}}
						>
							<Text
								style={{
									textTransform: 'none',
									fontSize: 12,
									fontWeight: '500',
									fontFamily: 'Poppins_400Regular',
								}}
							>
								Explore
							</Text>
						</Button>
					</View>
				</View>
				<Card
					style={{
						marginBottom: 20,
					}}
				>
					<Card.Title
						title='John Doe · '
						subtitle='Head Chef at Leads Kitchen · Updated 20h ago'
						subtitleNumberOfLines={2}
						titleStyle={{
							fontSize: 13,
							fontWeight: 'bold',
							fontFamily: 'Poppins_500Medium',
							color: '#282829',
						}}
						subtitleStyle={{
							fontSize: 13,
							fontWeight: 'normal',
							fontFamily: 'Poppins_400Regular',
							color: '#636466',
							lineHeight: 18,
						}}
						right={() => (
							<View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
								<IconButton icon='account-plus' size={13.85} color='#3D50DF' />

								<Text
									style={{
										color: '#3D50DF',
										fontSize: 12,
										fontWeight: '500',
										fontFamily: 'Poppins_400Regular',
										// marginLeft: 5.58,
									}}
								>
									Favorite
								</Text>
							</View>
						)}
						rightStyle={{
							position: 'absolute',
							right: 12,
							top: 3,
						}}
						left={() => (
							<Avatar.Image size={44} source={{ uri: 'https://picsum.photos/id/292/200/300' }} />
						)}
					/>
					<Card.Content>
						<Title
							style={{
								color: '#000000',
								fontSize: 14,
								fontWeight: 'bold',
								fontFamily: 'Poppins_400Regular',
								lineHeight: 20,
								marginTop: 16,
								marginBottom: 10,
							}}
						>
							What are the advantages of eating fresh salad without cream
						</Title>
						<Paragraph
							style={{
								color: '#636466',
								fontSize: 12,
								fontWeight: 'normal',
								fontFamily: 'Poppins_400Regular',
								lineHeight: 17,
							}}
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
							Ipsum has been the industry's standard...
						</Paragraph>
					</Card.Content>
					<Card.Cover
						source={{ uri: 'https://picsum.photos/id/242/200/300' }}
						style={{
							marginHorizontal: 15,
							marginVertical: 11,
							resizeMode: 'cover',
						}}
					/>
				</Card>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		// backgroundColor: 'red',
		width: '100%',
		height: '100%',
		flex: 1,
		// marginTop: 30,
		// paddingHorizontal: 30,
		backgroundColor: '#F7F7F7',
	},
	cardImage: {
		width: '100%',
		height: 200.55,

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		paddingVertical: 7.9,
	},
});
