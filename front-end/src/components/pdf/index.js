import React, {PureComponent} from 'react';
import {PDFViewer} from "@react-pdf/renderer";
import PdfDocument from "./pdfDocument";

class PDFVersion extends PureComponent {
    render() {
        return (
            <PDFViewer style={{ width: "100%", height: window.innerHeight, backgroundColor: "#ffffff"}} >
                <PdfDocument />
            </PDFViewer>
        );
    }
}

PDFVersion.propTypes = {};

export default PDFVersion;
