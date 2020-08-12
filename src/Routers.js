import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './Screen/LoginScreen';
import SignupScreen from './Screen/SignupScreen';
import Profile from './Screen/ProfileScreen';
import HomeScreen from './Screen/HomeScreen';
import FlashScreen from './Screen/FlashScreen';
import Importance from './Screen/ImportanceScreen'
import Completion from './Screen/CompletionScreen';

import DrawerProfile from './Components/DrawerProfile';
import { LogoTitle, LogoDrawer } from './Components/RoutersComponents';
import { useSelector, useDispatch } from 'react-redux';
import { handleCheckToken } from './Redux/Actions/AuthAction';
import Loading from './Screen/Loading';

export default function Routers() {

    const AuthState = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const checkToken = () => dispatch(handleCheckToken())


    useEffect(() => {
        setTimeout(() => {
            checkToken()
        }, 1000)
    } ,[])

    const AuthScreen = createStackNavigator();
    const TodoStack = createStackNavigator();
    const TodoDrawer = createDrawerNavigator();
    const RootStack = createStackNavigator()

    const TodoScreen = () => (
        <TodoStack.Navigator>
            <TodoStack.Screen name="Home" component={HomeScreen} options={{
                headerTitle: props => (<LogoTitle {...props} />),
                headerTitleAlign: "center",
                headerLeft: props => (<LogoDrawer {...props} />)
            }} />
        </TodoStack.Navigator>
    )
    const ImportanceTodoScreen = () => (
        <TodoStack.Navigator>
            <TodoStack.Screen name="Importance" component={Importance} options={{
                headerTitle: props => (<LogoTitle {...props} />),
                headerTitleAlign: "center",
                headerLeft: props => (<LogoDrawer {...props} />)
            }} />
        </TodoStack.Navigator>
    )
    const CompletionTodoScreen = () => (
        <TodoStack.Navigator>
            <TodoStack.Screen name="Completion" component={Completion} options={{
                headerTitle: props => (<LogoTitle {...props} />),
                headerTitleAlign: "center",
                headerLeft: props => (<LogoDrawer {...props} />)
            }} />
        </TodoStack.Navigator>
    )

    const RootDrawer = () => (
        <TodoDrawer.Navigator drawerContent={props => <DrawerProfile {...props} />} >
            <TodoDrawer.Screen name="Home" component={TodoScreen} />
            <TodoDrawer.Screen name="Completion" component={CompletionTodoScreen} />
            <TodoDrawer.Screen name="Importance" component={ImportanceTodoScreen} />
        </TodoDrawer.Navigator>
    )

    if (AuthState.isFlash) {
        return <FlashScreen />
    }
    return (
        <>
            <NavigationContainer>
                {AuthState.token === null ?
                    (<AuthScreen.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
                        <AuthScreen.Screen name="Login" component={LoginScreen} />
                        <AuthScreen.Screen name="Signup" component={SignupScreen} />
                    </AuthScreen.Navigator>) :

                    (<RootStack.Navigator >
                        <RootStack.Screen name="Home" component={RootDrawer} options={{ headerShown: false }} />
                        <RootStack.Screen name="Profile" component={Profile} />
                    </RootStack.Navigator>) }
            </NavigationContainer>
            {AuthState.isLoading && <Loading />}
        </>
    )
}
