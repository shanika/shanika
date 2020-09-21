import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";
import './index.css'

class AboutMe extends PureComponent {
    render() {
        const { role, description } = this.props;
        return (
            <Typography variant="h2" className="About-Me" gutterBottom>
                <b>{ role }</b> { description[0] }
                <p> { description[1] } </p>
            </Typography>
        );
    }
}

AboutMe.propTypes = {
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default AboutMe;
