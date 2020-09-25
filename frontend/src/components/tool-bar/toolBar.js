import React, {PureComponent} from 'react';
import data from "../../data/cvdata.json";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from '@material-ui/icons/GitHub';
import PictureAsPdfRoundedIcon from '@material-ui/icons/PictureAsPdfRounded';
import './index.css'
import Button from "@material-ui/core/Button";
import {PDFDownloadLink} from "@react-pdf/renderer";
import PdfDocument from "../pdf/pdfDocument";

class ToolBar extends PureComponent {

    render() {
        return (
            <Grid spacing={2} className="ToolBarContainer" direction="row" justify="flex-end" container>
                <Grid item>
                    <Button size="small" className="ToolButton" variant="outlined" startIcon={<PictureAsPdfRoundedIcon />}>
                        <PDFDownloadLink document={<PdfDocument />} fileName={`${data.firstName}_${data.lastName}_Resume.pdf`}>
                            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download')}
                        </PDFDownloadLink>
                    </Button>
                </Grid>
                <Grid item>
                    <Button size="small" className="ToolButton" variant="outlined" startIcon={<GitHubIcon />} target="_blank" href="https://github.com/shanika/shanika">Source Code</Button>
                </Grid>
            </Grid>
        );
    }
}

export default ToolBar;
