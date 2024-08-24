import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login/login";
import Register from "../screens/register/register";
import Register2 from "../screens/register2/register2";

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen 
                name="login" 
                component={Login} 
                options={{headerShown: false}} />


                <Stack.Screen 
                name="register" 
                component={Register} 
                options={{
                    headerShadowVisible: false,
                    title: ""
                }} />

                <Stack.Screen 
                name="register2" 
                component={Register2} 
                options={{
                    headerShownVisible: false,
                    title: ""
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;