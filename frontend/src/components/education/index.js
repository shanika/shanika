import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import './index.css'

class Education extends PureComponent {
    render() {
        const { qualifications } = this.props;
        return (
            <Grid item>
                <Typography variant="h4" gutterBottom>
                    Education
                </Typography>
                {
                    qualifications.map(({ name, institute, period}) =>
                        <Grid direction="column" className="EducationBlock" container>
                            <Typography variant="body1">
                                <b>{ name }</b>
                            </Typography>
                            <Typography variant="body1">
                                { institute }
                            </Typography>
                            <Typography variant="body1">
                                { period }
                            </Typography>
                        </Grid>
                    )
                }
            </Grid>
        );
    }
}

Education.propTypes = {
    qualifications : PropTypes.array.isRequired
};

export default Education;
