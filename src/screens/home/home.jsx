import { styles } from "./home.style";
import { View, Image, Text } from "react-native";
import icons from "../../constants/icons"
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox.jsx";
import React, { useState } from "react"
import Categorias from "../../components/categorys/categorias.jsx";
import Banners from "../../components/banners/banners.jsx";
import { restaurantes } from "../../constants/dados.js";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import { ScrollView } from "react-native";

const Home = () => {

    const [busca, setBusca] = useState("");

    return <SafeAreaView style={styles.container}>
        <View style={styles.headerBar}>
            <Image source={icons.logo} style={styles.logo} />
            <Image source={icons.cart} style={styles.cart} />
        </View>

        <View style={styles.busca}>
            <TextBox placeholder="O que vamos pedir hoje?" 
            onChangeText={(text) => setBusca(text)}
            value={busca}
            />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>    
            <Categorias />
            
            <Banners />

            {
                restaurantes.map((restaurante, index) => {
                    return (
                        <View key={index}>
                            <Restaurante 
                            logotipo={restaurante.logotipo}
                            nome={restaurante.nome}
                            endereco={restaurante.endereco} 
                            icon={icons.favoriteFull}/>
                        </View>
                    )
                })
            }
        </ScrollView>

    </SafeAreaView>
    
}

export default Home;