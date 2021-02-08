import React from 'react';

import styled from '@react-pdf/styled-components';
import {Document, Font, Link, Page, StyleSheet, View} from '@react-pdf/renderer';
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
        paddingTop: 45
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
        marginTop: 20,
        color: '#575757'
    },
    about2: {
        marginTop: 8,
    },
    subTitle : {
        marginTop: 24,
    },
    expContainer : {
        marginTop: 10,
        flexDirection: 'row'
    },
    eduBlock : {
        marginTop: 10,
    },
    noLinkDeco : {
        color: '#575757',
        textDecoration: 'inherit'
    },
    skills : {
        flexDirection: 'column'
    },
    skillsContainer : {
        marginTop: 10,
        flexDirection: 'row'
    },
    lastUpdated: {
        marginTop: 45
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
  font-size: 10;
  color: #575757;
  marginTop: 6;
`;

const HALF = styled.View`
  flex-grow: 1
  flex-direction: column
  width: 50%
`

function PdfDocument({ data }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.title}>
                    <H1><Bold>{data.firstName}</Bold> {data.lastName}</H1>
                </View>
                <View style={styles.contact}>
                    <H3>{data.contactDetails.location} | {data.contactDetails.email} | {data.contactDetails.phone}</H3>
                </View>
                <View style={styles.about}>
                    <H2><Bold>{data.about.role}</Bold>, {data.about.description[0]}</H2>
                    <H2 style={styles.about2}>{data.about.description[1]}</H2>
                </View>
                <View style={styles.subTitle}>
                    <H4><Bold>EXPERIENCE</Bold></H4>
                </View>
                {
                    data.experience.map(({company, url, location, period, role, description, techs}) =>
                        <View wrap={false} style={styles.expContainer}>
                            <HALF>
                                <Body><Bold><Link src={url} style={styles.noLinkDeco}>{company}</Link></Bold></Body>
                                <Body>{location}</Body>
                                <Body style={{marginTop: 2}}>{period}</Body>
                            </HALF>
                            <HALF>
                                <Body><Bold>{role}</Bold></Body>
                                {
                                    description.map(desc => <Body>{desc}</Body>)
                                }
                                <TechTags techs={techs}/>
                            </HALF>
                        </View>
                    )
                }
                <View wrap={false}>
                    <View style={styles.subTitle}>
                        <H4><Bold>PROJECTS</Bold></H4>
                    </View>
                    {
                        data.projects.map(({company, url, location, period, role, description, techs}) =>
                            <View wrap={false} style={styles.expContainer}>
                                <HALF>
                                    <Body><Bold><Link src={url} style={styles.noLinkDeco}>{company}</Link></Bold></Body>
                                    <Body>{location}</Body>
                                    {period && <Body>{period}</Body>}
                                </HALF>
                                <HALF>
                                    <Body><Bold>{role}</Bold></Body>
                                    {
                                        description.map(desc => <Body wrap={true}>{desc}</Body>)
                                    }
                                    <TechTags techs={techs}/>
                                </HALF>
                            </View>
                        )
                    }
                </View>
                <View wrap={false}>
                    <View style={styles.subTitle}>
                        <H4><Bold>SKILLS</Bold></H4>
                    </View>
                    <View style={styles.skillsContainer}>
                        <HALF>
                            <View style={styles.skills}>
                                {data.primarySkills.map(skill => <Body>{skill}</Body>)}
                            </View>
                        </HALF>
                        <HALF>
                            <View style={styles.skills}>
                                {data.secondarySkills.map(skill => <Body>{skill}</Body>)}
                            </View>
                        </HALF>
                    </View>

                </View>
                <View wrap={false} style={styles.expContainer}>
                    <HALF style={{paddingRight: 10}}>
                        <View style={styles.subTitle}>
                            <H4><Bold>EDUCATION</Bold></H4>
                        </View>
                        {
                            data.qualifications.map(({name, institute, period}) =>
                                <View style={styles.eduBlock}>
                                    <Body><Bold>{name}</Bold></Body>
                                    <Body>{institute}</Body>
                                    <Body style={{marginTop: 2}}>{period}</Body>
                                </View>
                            )
                        }

                    </HALF>
                    <HALF>
                        <View style={styles.subTitle}>
                            <H4><Bold>CERTIFICATIONS</Bold></H4>
                        </View>
                        {
                            data.certifications.map(({name, institute, code, date}) =>
                                <View style={styles.eduBlock}>
                                    <Body><Bold>{name}</Bold> {code}</Body>
                                    <Body>{institute}</Body>
                                    <Body style={{marginTop: 2}}>{date}</Body>
                                </View>
                            )
                        }
                    </HALF>
                </View>
                <Body style={styles.lastUpdated}><Bold>Last updated</Bold>: 9th Feb 2021</Body>
                <Body><Bold>Up-to-date Web Version</Bold>: <Link
                    src="https://shanika.dev/cv">shanika.dev/cv</Link></Body>
            </Page>
        </Document>
    );
}

PdfDocument.propTypes = {};

export default PdfDocument;
