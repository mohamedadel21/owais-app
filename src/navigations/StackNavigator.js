import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Signin,Onboarding,OtpVerification,VerifyCode} from '../screens';

const Stack = createStackNavigator();

function Navigator() {

    return (
        <Stack.Navigator >
           
           <Stack.Screen name={'Onboarding'} component={Onboarding} options={{ headerShown: false }} />
           <Stack.Screen name={'Signin'} component={Signin} options={{ headerShown: false }} />
           <Stack.Screen name={'OtpVerification'} component={OtpVerification} options={{ headerShown: false }} />
           <Stack.Screen name={'VerifyCode'} component={VerifyCode} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
}

export default Navigator;