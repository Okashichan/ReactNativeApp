import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Footer(): React.JSX.Element {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Климчук Богдан Анатолійоч, ІПЗк-21-1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 'auto',
    backgroundColor: 'rgba(255, 128, 192, .20)',
    padding: 2,
  },
  footerText: {
    textAlign: 'center',
    color: 'black',
    fontStyle: 'italic',
  },
});

export default Footer;
