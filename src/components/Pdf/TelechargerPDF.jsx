import { PDFDownloadLink } from '@react-pdf/renderer'
import React from 'react'
import MyDocument from './Pdf'

const TelechargerPDF = ({liste}) => {

    if(liste.length >0){
        return(
            
                <div className="mt-2 ml-1">
            <PDFDownloadLink document={<MyDocument liste={liste}/>} fileName={liste.length+"_qrcodes_"+localStorage.getItem("type")+"_"+new Date().getTime().toString()} >
             Télécharger PDF
                </PDFDownloadLink>
                </div>
        ) 
    }
    else{
        return(
        <div></div>
        )
    }
}
export default TelechargerPDF