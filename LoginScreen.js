import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const API_URL = 'https://api.dominobet.com'; // Chanje ak URL API ou

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);

  const sendCode = async () => {
    if (!phone.match(/^\+?\d{10,14}$/)) {
      Alert.alert('Telefòn pa bon', 'Tanpri antre yon nimewo telefòn valab.');
      return;
    }
    try {
      const response = await fetch(`${API_URL}/auth/send-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      const res = await response.json();
      if (res.success) {
        setStep(2);
      } else {
        Alert.alert('Erè', res.message || 'Pa ka voye kòd la.');
      }
    } catch (e) {
      Alert.alert('Erè rezo', 'Tcheke koneksyon ou.');
    }
  };

  const verifyCode = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/verify-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code }),
      });
      const res = await response.json();
      if (res.success) {
        // Sove token / id si res.token egziste
        navigation.replace('Home');
      } else {
        Alert.alert('Kòd pa bon', res.message || 'Tanpri verifye kòd ou a.');
      }
    } catch (e) {
      Alert.alert('Erè rezo', 'Tcheke koneksyon ou.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login / Otantifikasyon</Text>
      {step === 1 ? (
        <>
          <Text style={styles.label}>Telefòn:</Text>
          <TextInput
            style={styles.input}
            placeholder="+509xxxxxxxx"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
          <Button title="Voye kòd" onPress={sendCode} />
        </>
      ) : (
        <>
          <Text style={styles.label}>Antre kòd verifikasyon ou resevwa a:</Text>
          <TextInput
            style={styles.input}
            placeholder="1234"
            keyboardType="number-pad"
            value={code}
            onChangeText={setCode}
          />
          <Button title="Verifye" onPress={verifyCode} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 14 },
  label: { color: '#fff', fontSize: 16, marginBottom: 8 },
  input: { backgroundColor: '#fff', borderRadius: 7, width: 220, padding: 9, marginBottom: 14 },
});
