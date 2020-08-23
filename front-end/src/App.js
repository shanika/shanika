import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "./components/header";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";
import Contacts from "./components/contacts";
import AboutMe from "./components/aboutme";
import WorkExperience from "./components/experience";
import Project from "./components/experience/project";
import data from './data/cvdata.json';
import Skills from "./components/skills/skills";
import Education from "./components/education";
import Certification from "./components/certifications";
import Projects from "./components/projects";
import Experience from "./components/projects/experience";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container className="Page" maxWidth="md">
                <Paper elevation={1} square>
                    <Grid
                        className="content"
                        direction="column"
                        container>

                        <Header firstName={ data.firstName } lastName={ data.lastName } />
                        <Contacts location={ data.contactDetails.location } email={ data.contactDetails.email } phoneNumber={ data.contactDetails.phone } />
                        <AboutMe role={ data.about.role } description={ data.about.description } />
                        <WorkExperience>
                            {
                                data.experience.map( ({company, location, period, role, description, techs }) =>
                                        <Experience company={company} location={location} period={period} role={role} techs={techs}>
                                            {
                                                description.map( para => <p>{ para }</p>)
                                            }
                                        </Experience>
                                )
                            }
                        </WorkExperience>
                        <Projects>
                            {
                                data.projects.map( ({company, location, period, role, description, techs }) =>
                                    <Project company={company} location={location} period={period} role={role} techs={techs}>
                                        {
                                            description.map( para => <p>{ para }</p>)
                                        }
                                    </Project>
                                )
                            }
                        </Projects>
                        <Skills skills={ data.skills }/>
                        <Grid direction="row" container>
                            <Grid sm={6} item>
                                <Education qualifications={ data.qualifications } />
                            </Grid>
                            <Grid sm={6} item>
                                <Certification certification={data.certifications} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

export default App;
