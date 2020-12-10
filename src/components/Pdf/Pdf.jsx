import React from 'react';
import { Page, View, Document, StyleSheet,Image } from '@react-pdf/renderer';

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

const MyDocument = ({liste}) => {
    return(
    <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
              
          {liste.map((qrcode,index) => (
            <Image key={index} style={styles.image}  src={"data:image/png;base64,"+qrcode} />
        ))}
          </View>
        </Page>
      </Document>
    )
};

export default MyDocument