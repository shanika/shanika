import React, { useState, useEffect } from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";
import Resume from "./components/resume";
import ToolBar from "./components/tool-bar/toolBar";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import PDFVersion from "./components/pdf";
import Loading from "./components/loading";
import * as PropTypes from "prop-types";

function OnlineCV(props) {
    return <ThemeProvider theme={theme}>
        <Container className="Page" maxWidth="md">
            <ToolBar data={props.data}/>
            <Resume data={props.data}/>
        </Container>
    </ThemeProvider>;
}

OnlineCV.propTypes = {data: PropTypes.any};

function App() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/data")
            .then(response => response.json())
            .then((data) => {
                setData(data)
            }).catch((error) => {
            console.error(error)
        })
    }, []);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/cv" />
                </Route>
                <Route exact path="/cv">
                    { data? <OnlineCV data={data} /> : <Loading /> }
                </Route>
                <Route path="/pdf">
                    { data? <PDFVersion data={data} /> : <Loading /> }
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
