import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class Skills extends PureComponent {
    render() {
        const { primarySkills, secondarySkills } = this.props;
        return (
            <Grid item>
                <Typography variant="h4" gutterBottom>
                    Skills
                </Typography>
                <Grid direction="row" container>
                    <Grid sm={6} item>
                        {
                            primarySkills && primarySkills.map(skill =>
                                <Typography>
                                    { skill }
                                </Typography>
                            )
                        }
                    </Grid>
                    <Grid sm={6} item>
                        {
                            secondarySkills && secondarySkills.map(skill =>
                                <Typography>
                                    { skill }
                                </Typography>
                            )
                        }
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

Skills.propTypes = {
    primarySkills : PropTypes.array.isRequired,
    secondarySkills : PropTypes.array.isRequired
};

export default Skills;
