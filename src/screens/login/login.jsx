import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './login.style';
import Header from '../../components/header/header';
import TextBox from '../../components/textbox/textbox';
import { COLORS, FONT_SIZE } from '../../constants/theme';

function Login() {
  return (
    <View style={styles.container}>
      <Header text="Acesse sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox label="E-mail" />
        </View>

        <View style={styles.form}>
          <TextBox label="Senha" isPassword={true} />
        </View>

        <View style={styles1.form}>
          <TouchableOpacity
            style={[styles1.btn, { backgroundColor: COLORS.red }]}>
            <Text style={styles1.btnText}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity >
          <Text style={styles.footerText}>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  btn: {
    width: '100%',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: FONT_SIZE.medium,
  },
});

export default Login;
