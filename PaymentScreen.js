import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const API_URL = 'https://api.dominobet.com'; // Chanje ak URL API ou

const methods = [
  { name: 'Zelle', info: 'zelle@domino.bet' },
  { name: 'Cashapp', info: '$dominobet' },
  { name: 'Paypal', info: 'paypal.me/dominobet' },
  { name: 'Natcash', info: '509-xxxx-xxxx' },
  { name: 'Moncash', info: '509-xxxx-xxxx' },
];

export default function PaymentScreen() {
  const [selected, setSelected] = useState(null);

  const pay = async () => {
    if (selected === null) {
      Alert.alert('Chwazi yon metòd!', 'Tanpri chwazi yon metòd peman.');
      return;
    }
    try {
      // API pou validate peman (egzanp: user_id, metòd, tranzaksyon_id)
      const response = await fetch(`${API_URL}/payment/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          method: methods[selected].name,
          info: methods[selected].info,
          // Ajoute user_id oswa token si ou gen li
        }),
      });
      const res = await response.json();
      if (res.success) {
        Alert.alert('Peman valide!', 'Peman ou an ap trete.');
      } else {
        Alert.alert('Erè peman', res.message || 'Peman pa valide.');
      }
    } catch (e) {
      Alert.alert('Erè rezo', 'Tcheke koneksyon ou.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chwazi Metòd Peman</Text>
      {methods.map((m, i) => (
        <TouchableOpacity key={m.name} style={[
          styles.method,
          selected === i && { backgroundColor: '#ffd700', borderColor: '#222' }
        ]} onPress={() => setSelected(i)}>
          <Text style={{ color: selected === i ? '#222' : '#fff', fontWeight: 'bold' }}>{m.name}</Text>
          <Text style={{ color: selected === i ? '#222' : '#fff', fontSize: 13 }}>{m.info}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.payBtn} onPress={pay}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Valide Peman</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  method: {
    borderWidth: 2, borderColor: '#fff', borderRadius: 10, padding: 16, marginVertical: 7, minWidth: 220,
    alignItems: 'center',
  },
  payBtn: {
    backgroundColor: '#e74c3c', borderRadius: 10, padding: 13, marginTop: 20,
    alignItems: 'center',
  },
});
