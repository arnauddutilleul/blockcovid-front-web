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
  },
  image: {
    width: 100,
    height:100,
    padding: 10,
    backgroundColor: 'white',
  },
});
/* CEST LUI AUI FQUT UTILISER 
 {liste.map((qrcode) => (
               <Image style = { styles . image }  src ={qrcode.qr} />
           ))}

           <Text> {liste.map((qrcode) => (
               qrcode
           ))}</Text>
           */
// Create Document Component
const MyDocument = ({liste}) => {
    console.log(liste)
    var qrcode = liste[0]
    console.log(liste[0])
    return(
    <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
              
          {liste.map((qrcode) => (
            <Image style={styles.image}  src={"data:image/png;base64,"+qrcode} />
        ))}
          </View>
        </Page>
      </Document>
    )
};

export default MyDocument