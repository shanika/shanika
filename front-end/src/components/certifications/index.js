import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import './index.css'

class Certification extends PureComponent {
    render() {
        const { certification } = this.props;
        return (
            <Grid item>
                <Typography variant="h4" gutterBottom>
                    Certifications
                </Typography>
                {
                    certification.map(({ name, institute, code, date}) =>
                        <Grid direction="column" className="CertificationBlock" container>
                            <Typography variant="body1">
                                <b>{ name }</b> <small>{ code }</small>
                            </Typography>
                            <Typography variant="body1">
                                { institute }
                            </Typography>
                            <Typography variant="body1">
                                { date }
                            </Typography>
                        </Grid>
                    )
                }
            </Grid>
        );
    }
}

Certification.propTypes = {
    certification : PropTypes.array.isRequired
};

export default Certification;
