import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './register.style';
import Header from '../../components/header/header';
import TextBox from '../../components/textbox/textbox';
import { COLORS, FONT_SIZE } from '../../constants/theme';

function Register(props) {
  return (
    <View style={styles.container}>
      <Header text="Criar sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox label="Nome Completo" />
        </View>

        <View style={styles.form}>
          <TextBox label="E-mail" />
        </View>

        <View style={styles.form}>
          <TextBox label="Escolha uma senha" isPassword={true} />
        </View>

        <View style={styles.form}>
          <TextBox label="Confirme sua senha" isPassword={true} />
        </View>

        <View style={styles1.form}>
          <TouchableOpacity onPress={() => {props.navigation.navigate("register2")}}
            style={[styles1.btn, { backgroundColor: COLORS.red }]}>
            <Text style={styles1.btnText}>Proximo passo</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}

const styles1 = StyleSheet.create({
  btn: {
    width: '100%',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: FONT_SIZE.medium,
  },
});

export default Register;
