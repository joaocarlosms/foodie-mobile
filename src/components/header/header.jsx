import { Image, View, Text } from 'react-native';
import logo from '../../assets/logo.png';
import { styles } from './header.style';

const Header = (props) => (
  <View style={styles.header}>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.title}>{props.text}</Text>
  </View>
);

export default Header;
