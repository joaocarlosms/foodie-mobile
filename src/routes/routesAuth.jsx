import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/home/home";
import FavoritesScreen from "../screens/favorites/favorites";
import OrdersScreen from "../screens/orders/orders";
import ProfileScreen from "../screens/profile/profile";

const Tab = createBottomTabNavigator(); 

const routesAuth = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                
                <Tab.Screen name="home" component={HomeScreen} />
                <Tab.Screen name="favoritos" component={FavoritesScreen} />
                <Tab.Screen name="pedidos" component={OrdersScreen} />
                <Tab.Screen name="perfil" component={ProfileScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default routesAuth;