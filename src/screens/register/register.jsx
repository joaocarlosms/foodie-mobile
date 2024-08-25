import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './register.style';
import Header from '../../components/header/header';
import TextBox from '../../components/textbox/textbox';
import { COLORS, FONT_SIZE } from '../../constants/theme';

function Register(props) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");

  return (
    <View style={styles.container}>
      <Header text="Criar sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox label="Nome Completo" 
          onChangeText={(text => setNome(text))}
          value={nome}
          />
        </View>

        <View style={styles.form}>
          <TextBox label="E-mail" 
          onChangeText={(text => setEmail(text))}
          value={email}
          />
        </View>

        <View style={styles.form}>
          <TextBox label="Escolha uma senha" isPassword={true} 
          onChangeText={(text => setSenha1(text))}
          value={senha1}
          />
        </View>

        <View style={styles.form}>
          <TextBox label="Confirme sua senha" isPassword={true} 
          onChangeText={(text => setSenha2(text))}
          value={senha2}
          />
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
