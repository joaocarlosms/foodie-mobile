import { View, Image, Text } from "react-native";
import { styles } from "./restaurante.style.js";
import { TouchableOpacity } from "react-native";

const Restaurante = (props) => {
    return(
        <View style={styles.restaurante}>
            <Image style={styles.logotipo} source={props.logotipo}/>
            <View style={styles.texts}>
               <Text style={styles.nome}>{props.nome}</Text>
               <Text style={styles.endereco}>{props.endereco}</Text> 
            </View>
            <TouchableOpacity>
                <Image style={styles.favorito} source={props.icon}/>
            </TouchableOpacity>
        </View>
    );
}

export default Restaurante;