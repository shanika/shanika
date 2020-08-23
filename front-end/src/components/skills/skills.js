import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class Skills extends PureComponent {
    render() {
        const { skills } = this.props;
        return (
            <Grid item>
                <Typography variant="h4" gutterBottom>
                    Skills
                </Typography>
                {
                    skills && skills.map(skill =>
                            <Typography>
                                { skill }
                            </Typography>
                    )
                }
            </Grid>
        );
    }
}

Skills.propTypes = {
    skills : PropTypes.array.isRequired
};

export default Skills;
