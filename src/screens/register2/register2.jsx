import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './register2.style';
import Header from '../../components/header/header';
import TextBox from '../../components/textbox/textbox';
import { COLORS, FONT_SIZE } from '../../constants/theme';

function Register2() {
  return (
    <View style={styles.container}>
      <Header text="Informe seu endereço" />

      <View style={styles.formGroup}>
        <View style={styles.formHorizontal}>
          <View style={styles.form70}> 
            <TextBox label="Endereço" />
          </View>

          <View style={styles.form30}>
            <TextBox label="Compl." />
          </View>
        </View>

        <View style={styles.form}>
          <TextBox label="Bairro" />
        </View>

        <View style={styles.formHorizontal}>
          <View style={styles.form70}> 
            <TextBox label="Cidade" />
          </View>

          <View style={styles.form30}>
            <TextBox label="UF" />
          </View>
        </View>

        <View style={styles.form}>
          <TextBox label="CEP" />
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
