import { Image, Text } from "react-native";
import { View } from "react-native";
import { styles } from "./order.style.js";

const Order = (props) => {
    return(
        <View style={styles.order}>
            <Image style={styles.logotipo} source={props.logotipo} />
            <View style={styles.texts}>
                <Text style={styles.texts}>{props.nome}</Text>

                <View style={styles.containerDataPrice}>
                    <Text style={styles.value}>
                        {new Intl.NumberFormat(
                            "pt-br", 
                            {
                                style: "currency", 
                                currency: "BRL"
                            }).format(props.valor)}
                    </Text>
                    <Text style={styles.value}>10/10/2010</Text>
                </View>
                    
                <Text style={styles.status}>{props.status}</Text>
            </View>
        </View>
    );
}

export default Order;