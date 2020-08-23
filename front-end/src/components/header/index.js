import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";

class Header extends PureComponent {
    render() {
        const { firstName, lastName } = this.props;
        return (
            <Typography variant="h1" gutterBottom>
                <b>{ firstName }</b> { lastName }
            </Typography>
        );
    }
}

Header.propTypes = {
    firstName : PropTypes.string.isRequired,
    lastName : PropTypes.string.isRequired
};

export default Header;
