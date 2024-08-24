import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './login.style';
import Header from '../../components/header/header';
import TextBox from '../../components/textbox/textbox';
import { COLORS, FONT_SIZE } from '../../constants/theme';

function Login(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function makeLogin() {
    console.log(email);
    console.log(senha);
  }

  return (
    <View style={styles.container}>
      <Header text="Acesse sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox 
            label="E-mail" 
            onChangeText={(text) => setEmail(text)} 
            value={email} 
          />
        </View>

        <View style={styles.form}>
          <TextBox 
            label="Senha" 
            isPassword={true} 
            onChangeText={(text) => setSenha(text)} 
            value={senha} 
          />
        </View>

        <View style={styles1.form}>
          <TouchableOpacity onPress={makeLogin}
            style={[styles1.btn, { backgroundColor: COLORS.red }]}>
            <Text style={styles1.btnText}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("register")}>
          <Text style={styles.footerText}>Criar minha conta</Text>
        </TouchableOpacity>
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

export default Login;
