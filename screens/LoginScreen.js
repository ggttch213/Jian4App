import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>登入</Text>
      <TextInput placeholder="帳號" style={styles.input} />
      <TextInput placeholder="密碼" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>登入</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.forgotPassword} >註冊</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword1')}>
        <Text style={styles.forgotPassword}>忘記密碼?</Text>
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
  forgotPassword: { color: 'blue', textDecorationLine: 'underline' },
});
