import React from 'react';
import { Page, Text, View, Document, StyleSheet,Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
/* CEST LUI AUI FQUT UTILISER 
 {liste.map((qrcode) => (
               <Image style = { styles . image }  src ={qrcode.qr} />
           ))}
           */
// Create Document Component
const MyDocument = ({liste}) => {
    console.log(liste)
    return(
    <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
              <Text> {liste.map((qrcode) => (
               qrcode
           ))}</Text>
             
          </View>
        </Page>
      </Document>
    )
};

export default MyDocument