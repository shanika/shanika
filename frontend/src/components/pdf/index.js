import React from 'react';
import {PDFViewer} from "@react-pdf/renderer";
import PdfDocument from "./pdfDocument";

function PDFVersion({data}) {
    return (
        <PDFViewer style={{width: "100%", height: window.innerHeight, backgroundColor: "#ffffff"}}>
            <PdfDocument data={data}/>
        </PDFViewer>
    );
}

export default PDFVersion;
