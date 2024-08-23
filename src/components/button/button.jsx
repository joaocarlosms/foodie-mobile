import { TouchableOpacity, Text } from "react-native";

function Button(props) {
    return <TouchableOpacity style={styles.btn}>
        <Text style={styles.texts}>{props.texts}</Text>
    </TouchableOpacity>
}