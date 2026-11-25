import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ActionButton } from '../../shared/ActionButton';

export default function App() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.title}>
        Personal Apps Starter
      </Text>
      <ActionButton label="Test the app" onPress={() => setConfirmed(true)} />
      {confirmed && <Text accessibilityRole="alert">Touch input works.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 },
  title: { fontSize: 28, fontWeight: '600', textAlign: 'center' },
});
