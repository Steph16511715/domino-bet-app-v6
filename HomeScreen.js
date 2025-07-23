import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import i18n from '../i18n/translations';

const logo = require('../assets/logo.png'); // Logo 3D ou a

export default function HomeScreen({ navigation }) {
  const [lang, setLang] = useState('fr');
  const betTabs = [20, 50, 100, 200];

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 180, height: 120, marginBottom: 15, borderRadius: 18 }} />
      <Text style={styles.title}>{i18n.t('chooseGame')}</Text>
      <Button title={i18n.t('fasafas')} onPress={() => navigation.navigate('Game', { mode: 'fasafas', lang })} />
      <Button title={i18n.t('chyen')} onPress={() => navigation.navigate('Game', { mode: 'chyen', lang })} />
      <Button title={i18n.t('asosye')} onPress={() => navigation.navigate('Game', { mode: 'asosye', lang })} />
      <Text style={styles.subtitle}>{i18n.t('chooseBet')}</Text>
      {betTabs.map(tab => (
        <Button key={tab} title={`${i18n.t('tab')} $${tab}`} onPress={() => navigation.navigate('Game', { tab, lang })} />
      ))}
      <Text style={styles.subtitle}>{i18n.t('chooseLang')}</Text>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        {["fr", "en", "ht", "es", "pt"].map(code => (
          <TouchableOpacity key={code} onPress={() => { setLang(code); i18n.locale = code; }}>
            <Text style={{ color: lang === code ? "#ffd700" : "#fff", fontWeight: lang === code ? "bold" : "normal", margin: 6 }}>
              {code.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#fff', marginTop: 18, marginBottom: 8 },
});
