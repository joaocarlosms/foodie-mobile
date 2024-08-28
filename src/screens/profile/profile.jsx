import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./profile.style";
import icons from "../../constants/icons.js";

const Profile = () => {
    return(
        <View>
            <TouchableOpacity style={[styles.item, styles.borderTop]}>
                <View style={styles.containerIcon}>
                    <Image source={icons.endereco} style={styles.iconEndereco} />
                </View>

                <View style={styles.texts}>
                    <Text style={styles.title}>Endereço</Text>
                    <Text style={styles.subtitle}>Meu endereço de entrega</Text>
                </View>

                <View style={styles.containerIcon}>
                    <Image source={icons.expandir} style={styles.iconExpandir} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <View style={styles.containerIcon}>
                    <Image source={icons.dados} style={styles.iconEndereco} />
                </View>

                <View style={styles.texts}>
                    <Text style={styles.title}>Meus Dados</Text>
                    <Text style={styles.subtitle}>Meu endereço de entrega</Text>
                </View>

                <View style={styles.containerIcon}>
                    <Image source={icons.expandir} style={styles.iconExpandir} />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.item}>
                <View style={styles.containerIcon}>
                    <Image source={icons.logout} style={styles.iconEndereco} />
                </View>

                <View style={styles.texts}>
                    <Text style={styles.title}>Desconectar</Text>
                    <Text style={styles.subtitle}>Meu endereço de entrega</Text>
                </View>

                <View style={styles.containerIcon}>
                    <Image source={icons.expandir} style={styles.iconExpandir} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Profile;