import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { api } from './api';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  section: {
    // margin: 10,
    // padding: 10,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom:20,
  }
});

// Create Document Component
export default () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Mohon maaf, kami sedang melakukan pembaharuan pada sistem Edumatis.</Text>
      </View>
    </Page>
  </Document> 
  
);