import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ForgotPasswordScreen3({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>忘記密碼</Text>
      <TextInput 
        placeholder="新密碼" 
        style={styles.input} 
        value={newPassword} 
        onChangeText={setNewPassword} 
        secureTextEntry 
      />
      <TextInput 
        placeholder="確認密碼" 
        style={styles.input} 
        value={confirmPassword} 
        onChangeText={setConfirmPassword} 
        secureTextEntry 
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
          // 在此處處理更改密碼的邏輯
          navigation.goBack();
        }}>
        <Text style={styles.buttonText}>完成</Text>
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
