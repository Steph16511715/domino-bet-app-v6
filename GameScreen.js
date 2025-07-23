import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import i18n from '../i18n/translations';

export default function GameScreen({ route }) {
  const { mode, tab, lang } = route.params || {};

  let description = '';
  if (mode === 'fasafas') {
    description = '2 joueurs, chak pase si pa ka jwe, ale nan pil. Moun ki ranpòte pati a genyen pari a.';
  } else if (mode === 'chyen') {
    description = '2-4 joueurs, chak moun kont tout lòt moun. Moun ki ranpòte pati a genyen pari a.';
  } else if (mode === 'asosye') {
    description = '4 joueurs, 2 asosye, 2 ennmi. Premye ekip ki genyen 4 pati afile ranpòte pari a.';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('gameTitle')}</Text>
      {mode && <Text style={styles.stil}>{i18n.t(mode)}</Text>}
      {tab && <Text style={styles.tab}>{i18n.t('tab')} ${tab}</Text>}
      <Text style={styles.desc}>{description}</Text>
      {/* Ajoute lojik domino, miz, komisyon, nivo, peman, blokaj, konvèsasyon, elatriye... */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333' },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  stil: { color: '#ffd700', fontSize: 20, marginBottom: 8 },
  tab: { color: '#fff', fontSize: 18, marginBottom: 8 },
  desc: { color: '#fff', fontSize: 16, marginTop: 10, textAlign: 'center', paddingHorizontal: 18 },
});
