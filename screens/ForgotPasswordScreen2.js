import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ForgotPasswordScreen2({ navigation }) {
  const [verificationCode, setVerificationCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>忘記密碼</Text>
      <TextInput 
        placeholder="驗證碼" 
        style={styles.input} 
        value={verificationCode} 
        onChangeText={setVerificationCode} 
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('ForgotPassword3')}>
        <Text style={styles.buttonText}>送出</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancelText}>取消</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8d7da' },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20 },
  button: { backgroundColor: 'pink', padding: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  cancelText: { color: 'blue', textDecorationLine: 'underline', textAlign: 'center', marginTop: 10 },
});
