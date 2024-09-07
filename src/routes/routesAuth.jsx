import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/home/home";
import FavoritesScreen from "../screens/favorites/favorites";
import OrdersScreen from "../screens/orders/orders";
import ProfileScreen from "../screens/profile/profile";
import icons from "../constants/icons";
import { Image } from "react-native";

const Tab = createBottomTabNavigator(); 

const routesAuth = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
                
                <Tab.Screen name="home" component={HomeScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        return(
                            <Image 
                                source={icons.abaHome} 
                                style={{ 
                                    width: 25, 
                                    height: 25,
                                    opacity: focused ? 1 : 0.3 }} />
                        )
                    }
                }}/>

                <Tab.Screen name="favoritos" component={FavoritesScreen} options={{
                    title: "Favoritos",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    tabBarIcon: ({focused}) => {
                        return(
                            <Image 
                                source={icons.abaFavorito} 
                                style={{ 
                                    width: 25, 
                                    height: 25, 
                                    opacity: focused ? 1 : 0.3}} />
                        )
                    }
                }}/>

                <Tab.Screen name="pedidos" component={OrdersScreen} options={{
                    title: "Pedidos",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    tabBarIcon: ({focused}) => {
                        return(
                            <Image 
                                source={icons.abaPedidos} 
                                style={{ 
                                    width: 25, 
                                    height: 25, 
                                    opacity: focused ? 1 : 0.3}} />
                        )
                    },
                }}/>

                <Tab.Screen name="perfil" component={ProfileScreen} options={{
                    title: "Meu Perfil",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    tabBarIcon: ({focused}) => {
                        return(
                            <Image 
                                source={icons.abaPerfil} 
                                style={{ 
                                    width: 25, 
                                    height: 25, 
                                    opacity: focused ? 1 : 0.3}} />
                        )
                    }
                }}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default routesAuth;