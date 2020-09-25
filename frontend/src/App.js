import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";
import Resume from "./components/resume";
import ToolBar from "./components/tool-bar/toolBar";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import PDFVersion from "./components/pdf";

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/cv" />
                </Route>
                <Route exact path="/cv">
                    <ThemeProvider theme={theme}>
                        <Container className="Page" maxWidth="md">
                            <ToolBar />
                            <Resume />
                        </Container>
                    </ThemeProvider>
                </Route>
                <Route path="/pdf">
                    <PDFVersion />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
