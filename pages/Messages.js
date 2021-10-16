import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
	Avatar,
	Badge,
	BottomNavigation,
	Button,
	IconButton,
	TextInput,
} from 'react-native-paper';

const PeopleRoute = () => <></>;

const FavouritesRoute = () => <></>;

const MessagesRoute = () => <></>;

const AccountRoute = () => <></>;

export default function Messages(props) {
	const [index, setIndex] = React.useState(2);
	const [routes] = React.useState([
		{ key: 'people', icon: 'account-multiple-outline' },
		{ key: 'favourites', icon: 'heart-outline' },
		{ key: 'messages', icon: 'message-outline' },
		{
			key: 'account',
			icon: 'account-circle-outline',
			onTabPress: () => props.navigation.navigate('Login'),
		},
	]);

	const renderScene = BottomNavigation.SceneMap({
		people: PeopleRoute,
		favourites: FavouritesRoute,
		messages: MessagesRoute,
		account: AccountRoute,
	});
	return (
		<ScrollView
			style={{
				flex: 1,
				paddingTop: 55,
			}}
		>
			<View
				style={{
					paddingLeft: 42,
					paddingRight: 42,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontSize: 34,
						fontWeight: 'bold',
					}}
				>
					Chats
				</Text>
				<IconButton
					icon='account-arrow-right'
					color='black'
					size={25}
					onPress={() => console.log('Pressed')}
				/>
			</View>
			<View
				style={{
					paddingTop: 17,
					paddingLeft: 26,
					paddingRight: 28,
				}}
			>
				<TextInput
					label='Search'
					value='Search'
					type='flat'
					style={{
						paddingHorizontal: 10,
					}}
				/>
			</View>

			<View
				style={{
					paddingTop: 42,
					paddingHorizontal: 26,
				}}
			>
				<Text
					style={{
						fontSize: 18,
						fontWeight: 'bold',
					}}
				>
					Messages
				</Text>
				<MessageComponent
					avatar={require('../assets/background.jpg')}
					name='Deola'
					message='Sticker 😍'
					time='23 mins'
				/>
				<View
					style={{
						borderBottomColor: '#E8E6EA',
						borderBottomWidth: 1,
						paddingVertical: 12,
						marginLeft: 92,
					}}
				/>
				<MessageComponent
					avatar={require('../assets/background.jpg')}
					name='Abigail'
					message='Typing..'
					time='27 mins'
					unread={true}
					unreadCount='2'
				/>
				<View
					style={{
						borderBottomColor: '#E8E6EA',
						borderBottomWidth: 1,
						paddingVertical: 12,
						marginLeft: 92,
					}}
				/>
				<MessageComponent
					avatar={require('../assets/background.jpg')}
					name='Chidimma'
					message='Ok, see you then.'
					time='33 mins'
				/>
				<View
					style={{
						borderBottomColor: '#E8E6EA',
						borderBottomWidth: 1,
						paddingVertical: 12,
						marginLeft: 92,
					}}
				/>
				<MessageComponent
					avatar={require('../assets/background.jpg')}
					name='Vivian'
					message='Hey! What’s up, long time..'
					time='50 mins'
					unread={true}
					unreadCount='1'
					recipient={true}
				/>
				<View
					style={{
						borderBottomColor: '#E8E6EA',
						borderBottomWidth: 1,
						paddingVertical: 12,
						marginLeft: 92,
					}}
				/>
				<MessageComponent
					avatar={require('../assets/background.jpg')}
					name='Funmi'
					message='Hello how are you?'
					time='55 mins'
					recipient={true}
				/>
				<View
					style={{
						borderBottomColor: '#E8E6EA',
						borderBottomWidth: 1,
						paddingVertical: 12,
						marginLeft: 92,
					}}
				/>
				<MessageComponent
					avatar={require('../assets/background.jpg')}
					name='Grace'
					message='Great I will write later..'
					time='1 hour'
					recipient={true}
				/>
				<View
					style={{
						borderBottomColor: '#E8E6EA',
						borderBottomWidth: 1,
						paddingVertical: 12,
						marginLeft: 92,
					}}
				/>
			</View>
			<BottomNavigation
				shifting={false}
				barStyle={{
					backgroundColor: '#F3F3F3',
				}}
				navigationState={{ index, routes }}
				onIndexChange={setIndex}
				renderScene={renderScene}
				onTabPress={() => props.navigation.navigate('Login')}
			/>
		</ScrollView>
	);
}

const MessageComponent = (props) => {
	return (
		<View
			style={{
				paddingHorizontal: 2,
				paddingTop: 14,
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Avatar.Image size={48} source={props.avatar} />
					<View style={{ flexDirection: 'column', paddingLeft: 14 }}>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									fontWeight: 'bold',
									fontSize: 14,
								}}
							>
								{props.name}
							</Text>
							{props.unread && (
								<Badge
									size={15}
									style={{
										marginLeft: 15,
									}}
								>
									{props.unreadCount}
								</Badge>
							)}
						</View>
						{props.recipient ? (
							<View
								style={{
									flexDirection: 'row',
								}}
							>
								<Text
									style={{
										fontWeight: 'normal',
										fontSize: 12,
									}}
								>
									You:{' '}
								</Text>
								<Text
									style={{
										fontWeight: 'bold',
										fontSize: 12,
									}}
								>
									{props.message}
								</Text>
							</View>
						) : (
							<>
								<Text
									style={{
										fontWeight: 'normal',
										fontSize: 12,
									}}
								>
									{props.message}
								</Text>
							</>
						)}
					</View>
				</View>
				<Text
					style={{
						fontWeight: 'normal',
						fontSize: 12,
					}}
				>
					{props.time}
				</Text>
			</View>
		</View>
	);
};
