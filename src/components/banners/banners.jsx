import { View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
//import styles from "./categorias.style.js";
import { COLORS, FONT_SIZE } from "../../constants/theme"
import { banners } from "../../constants/dados.js";

const Categorias = () => {
    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    banners.map((banner, index) => {
                        return (
                            <View key={index} style={styles.banner}>
                                <TouchableOpacity>
                                    <Image style={styles.icon} source={banner.icone}/>
                                </TouchableOpacity>
                            </View>    
                        );
                            
                    })
                }
            </ScrollView>
        </View>
    );
}

export const styles = {
    icon: {
        width: 220,
        height: 120
    },

    banner: {
        paddingRight: 10,
        marginTop: 15,
        marginBottom: 15,
    },
    
    descricao: {
        fontSize: FONT_SIZE.xsm,
        color: COLORS.dark_gray,
        textAlign: "center"
    }

}

export default Categorias;