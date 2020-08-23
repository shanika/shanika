import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";
import Resume from "./components/resume";
import ToolBar from "./components/tool-bar/toolBar";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container className="Page" maxWidth="md">
                <ToolBar />
                <Resume />
            </Container>
        </ThemeProvider>
    );
}

export default App;
