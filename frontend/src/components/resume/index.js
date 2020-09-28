import React from 'react';
import Grid from "@material-ui/core/Grid";
import Header from "../header";
import Contacts from "../contacts";
import AboutMe from "../aboutme";
import WorkExperience from "../experience";
import Experience from "../experience/experience";
import Projects from "../projects";
import Project from "../projects/project";
import Skills from "../skills/skills";
import Education from "../education";
import Certification from "../certifications";
import Paper from "@material-ui/core/Paper";

function Resume({ data }) {
    return (
        <Paper elevation={1} square>
            <Grid
                className="content"
                direction="column"
                container>

                <Header firstName={data.firstName} lastName={data.lastName}/>
                <Contacts location={data.contactDetails.location} email={data.contactDetails.email}
                          phoneNumber={data.contactDetails.phone}/>
                <AboutMe role={data.about.role} description={data.about.description}/>
                <WorkExperience>
                    {
                        data.experience.map(({company, url, location, period, role, description, techs}) =>
                            <Experience company={company} url={url} location={location} period={period} role={role}
                                        techs={techs}>
                                {
                                    description.map(para => <p>{para}</p>)
                                }
                            </Experience>
                        )
                    }
                </WorkExperience>
                <Projects>
                    {
                        data.projects.map(({company, url, location, period, role, description, techs}) =>
                            <Project company={company} url={url} location={location} period={period} role={role}
                                     techs={techs}>
                                {
                                    description.map(para => <p>{para}</p>)
                                }
                            </Project>
                        )
                    }
                </Projects>
                <Skills primarySkills={data.primarySkills} secondarySkills={data.secondarySkills}/>
                <Grid direction="row" container>
                    <Grid sm={6} item>
                        <Education qualifications={data.qualifications}/>
                    </Grid>
                    <Grid sm={6} item>
                        <Certification certification={data.certifications}/>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

Resume.propTypes = {};

export default Resume;
