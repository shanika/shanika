import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class WorkExperience extends PureComponent {
    render() {
        const { children } = this.props;
        return (
            <Grid item>
                <Typography variant="h4" gutterBottom>
                    Experience
                </Typography>
                { children }
            </Grid>
        );
    }
}

WorkExperience.propTypes = {
    children: PropTypes.node.isRequired
};

export default WorkExperience;
