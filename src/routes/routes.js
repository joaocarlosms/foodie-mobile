import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login/login";
import Register from "../screens/register/register";
import Register2 from "../screens/register2/register2";
import Home from "../screens/home/home";
import Favorites from "../screens/favorites/favorites";
import Orders from "../screens/orders/orders";
import Profile from "../screens/profile/profile";

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
                    headerShadowVisible: false,
                    title: ""
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;