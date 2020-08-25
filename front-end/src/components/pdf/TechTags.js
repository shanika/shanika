import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from "@react-pdf/renderer";

class TechTags extends PureComponent {
    render() {
        const { techs } = this.props;
        return (
            <View style={{ flexDirection: "row", paddingTop: 8, flexWrap: 'wrap' }}>
                { techs.map( tech =>
                    <View
                        style={{
                            borderColor: '#3f51b5',
                            color: '#3f51b5',
                            borderWidth: 1,
                            borderRadius: 4,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingLeft: 4,
                            paddingRight: 4,
                            fontSize: 7,
                            marginRight: 5,
                            marginBottom: 5
                        }}
                    ><Text>{ tech }</Text></View>
                )}
            </View>
        );
    }
}

TechTags.propTypes = {
    techs: PropTypes.array.isRequired
};

export default TechTags;
