import { styles } from "./home.style";
import { View, Image } from "react-native";
import icons from "../../constants/icons"
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox.jsx";
import React, { useState } from "react"

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
    </SafeAreaView>
    
}

export default Home;