import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './register2.style';
import Header from '../../components/header/header';
import TextBox from '../../components/textbox/textbox';
import { COLORS, FONT_SIZE } from '../../constants/theme';

function Register2() {

  const [endereco, setEndereco] = useState("");
  const [compl, setCompl] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [cep, setCep] = useState("");


  return (
    <View style={styles.container}>
      <Header text="Informe seu endereço" />

      <View style={styles.formGroup}>
        <View style={styles.formHorizontal}>
          <View style={styles.form70}> 
            <TextBox label="Endereço" 
            onChangeText={(text) => setEndereco(text)}
            value={endereco}
            />
          </View>

          <View style={styles.form30}>
            <TextBox label="Compl." 
            onChangeText={(text) => setCompl(text)}
            value={compl}
            />
          </View>
        </View>

        <View style={styles.form}>
          <TextBox label="Bairro" 
          onChangeText={(text) => setBairro(text)}
          value={bairro}
          />
        </View>

        <View style={styles.formHorizontal}>
          <View style={styles.form70}> 
            <TextBox label="Cidade" 
            onChangeText={(text) => setCidade(text)}
            value={cidade}
            />
          </View>

          <View style={styles.form30}>
            <TextBox label="UF" 
            onChangeText={(text) => setUf(text)}
            value={uf}
            />
          </View>
        </View>

        <View style={styles.form}>
          <TextBox label="CEP" 
          onChangeText={(text) => setCep(text)}
          value={cep}
          />
        </View>

        <View style={styles1.form}>
          <TouchableOpacity
            style={[styles1.btn, { backgroundColor: COLORS.red }]}>
            <Text style={styles1.btnText}>Criar minha conta</Text>
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

export default Register2;
