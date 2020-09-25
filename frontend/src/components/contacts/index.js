import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";

class Contacts extends PureComponent {
    render() {
        const { location, email, phoneNumber } = this.props;
        return (
            <Typography variant="h3" gutterBottom>
                { location } | { email } | { phoneNumber }
            </Typography>
        );
    }
}

Contacts.propTypes = {
    location : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    phoneNumber : PropTypes.string.isRequired
};

export default Contacts;
