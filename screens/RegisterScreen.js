// RegisterScreen.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>註冊</Text>
      <TextInput placeholder="姓名" style={styles.input} />
      <TextInput placeholder="電話" style={styles.input} />
      <TextInput placeholder="帳號" style={styles.input} />
      <TextInput placeholder="密碼" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>註冊</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.forgotPassword} >登入</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20,backgroundColor: '#f8d7da', },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20 },
  button: { backgroundColor: 'pink', padding: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  loginLink: { color: 'blue', textDecorationLine: 'underline' },
});
