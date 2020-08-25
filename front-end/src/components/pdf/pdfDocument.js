import React, {PureComponent} from 'react';

import data from "../../data/cvdata.json";
import styled from '@react-pdf/styled-components';
import {Page, Text, View, Document, StyleSheet, Font, Link} from '@react-pdf/renderer';
import TechTags from "./TechTags";

Font.register({ family: 'Montserrat', src: '/Montserrat-Regular.ttf' });
Font.register({ family: 'Montserrat-bold', src: '/Montserrat-Bold.ttf' });
Font.registerHyphenationCallback(word => (
    [word]
));

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Montserrat',
        padding: 42,
        paddingTop: 30
    },
    cvLink: {
        fontSize: 10,
        marginBottom: 15
    },
    title: {
        flexDirection: 'row',
        justifyItems: 'flex-start',
        textTransform: 'uppercase'
    },
    contact: {
        marginTop: 4,
        color: '#585858'
    },
    about: {
        marginTop: 10,
        color: '#575757'
    },
    subTitle : {
        marginTop: 14,
    },
    expContainer : {
        marginTop: 10,
        flexDirection: 'row'
    },
    skills : {
        flexDirection: 'column'
    }
});

const Bold = styled.Text`
  font-family: Montserrat-bold;
`;

const H1 = styled.Text`
  font-size: 22
`;

const H2 = styled.Text`
  font-size: 11;
`;

const H3 = styled.Text`
  font-size: 10;
`;

const H4 = styled.Text`
  font-size: 10;
  color: #3d79f2;
`;

const Body = styled.Text`
  font-size: 9;
  color: #575757;
  marginTop: 6;
`;

const HALF = styled.View`
  flex-grow: 1
  flex-direction: column
  width: 50%
`

// Create Document Component
class PdfDocument extends PureComponent {
    render() {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.cvLink}>
                        <Text><Text style={{ color: '#505050'}}>Resume</Text> online version <Link src="https://shanika-wijerathna.web.app">shanika.dev/cv</Link></Text>
                    </View>
                    <View style={styles.title}>
                        <H1><Bold>{ data.firstName }</Bold> { data.lastName }</H1>
                    </View>
                    <View style={styles.contact}>
                        <H3>{ data.contactDetails.location } | { data.contactDetails.email } | { data.contactDetails.phone }</H3>
                    </View>
                    <View style={styles.about}>
                        <H2><Bold>{ data.about.role }</Bold> { data.about.description }</H2>
                    </View>
                    <View style={styles.subTitle}>
                        <H4><Bold>EXPERIENCE</Bold></H4>
                    </View>
                    {
                        data.experience.map( ({company, location, period, role, description, techs}) =>
                            <View wrap={false} style={styles.expContainer}>
                                <HALF>
                                    <Body><Bold>{ company }</Bold></Body>
                                    <Body>{ location }</Body>
                                    <Body style={{ marginTop: 2}}>{ period }</Body>
                                </HALF>
                                <HALF>
                                    <Body><Bold>{ role }</Bold></Body>
                                    {
                                        description.map(desc => <Body>{ desc }</Body>)
                                    }
                                    <TechTags techs={techs} />
                                </HALF>
                            </View>
                        )
                    }
                    <View wrap={false}>
                    <View style={styles.subTitle}>
                        <H4><Bold>PROJECTS</Bold></H4>
                    </View>
                    {
                        data.projects.map( ({company, location, period, role, description, techs}) =>
                            <View wrap={false} style={styles.expContainer}>
                                <HALF>
                                    <Body><Bold>{ company }</Bold></Body>
                                    <Body>{ location }</Body>
                                    { period && <Body>{ period }</Body> }
                                </HALF>
                                <HALF>
                                    <Body><Bold>{ role }</Bold></Body>
                                    {
                                        description.map(desc => <Body wrap={true}>{ desc }</Body>)
                                    }
                                    <TechTags techs={techs} />
                                </HALF>
                            </View>
                        )
                    }
                    </View>
                    <View wrap={false}>
                        <View style={styles.subTitle}>
                            <H4><Bold>SKILLS</Bold></H4>
                        </View>
                        <View style={styles.skills}>
                            { data.skills.map(skill => <Body>{ skill }</Body>)}
                        </View>
                    </View>
                    <View wrap={false} style={styles.expContainer}>
                        <HALF style={{ paddingRight: 10}}>
                            <View style={styles.subTitle}>
                                <H4><Bold>EDUCATION</Bold></H4>
                            </View>
                            {
                                data.qualifications.map( ({ name, institute, period}) =>
                                    <View>
                                        <Body><Bold>{ name }</Bold></Body>
                                        <Body>{ institute }</Body>
                                        <Body style={{ marginTop: 2}}>{ period }</Body>
                                    </View>
                                )
                            }

                        </HALF>
                        <HALF>
                            <View style={styles.subTitle}>
                                <H4><Bold>CERTIFICATIONS</Bold></H4>
                            </View>
                            {
                                data.certifications.map( ({ name, institute, code, date}) =>
                                    <View>
                                        <Body><Bold>{ name }</Bold> {code}</Body>
                                        <Body>{ institute }</Body>
                                        <Body style={{ marginTop: 2}}>{ date }</Body>
                                    </View>
                                )
                            }
                        </HALF>
                    </View>
                    <View style={styles.subTitle}>
                        <H4><Bold>REFEREES</Bold></H4>
                    </View>
                    <Body>Available upon request</Body>
                </Page>
            </Document>
        );
    }
}

PdfDocument.propTypes = {};

export default PdfDocument;
