import { Text } from "react-native";
import { TextInput } from "react-native";
import { styles } from "./textbox.style";

const TextBox = (props) => {
    return <>
        {
           props.label && <Text style={styles.label}>{props.label}</Text>
        }
        <TextInput style={styles.input} 
            placeholder={props.placeholder}
            secureTextEntry={props.isPassword}
            onChangeText={(text) => props.onChangeText(text)}
            value={props.value}
        />
    </>
}

export default TextBox;