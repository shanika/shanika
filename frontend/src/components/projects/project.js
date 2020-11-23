import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import './index.css'
import Link from "@material-ui/core/Link";

class Project extends PureComponent {
    render() {
        const {
            company,
            url,
            location,
            period,
            role,
            techs,
            children
        } = this.props;
        return (
            <Grid className="ProjectBlock" container>
                <Grid sm={6} xs={12} item>
                    <Typography variant="body1">
                        <b><Link target="_blank" href={url}>{company}</Link></b>
                    </Typography>
                    <p>
                        <Typography variant="body1">
                            {location}
                        </Typography>
                        {
                            period &&
                            <Typography variant="body1">
                                {period}
                            </Typography>
                        }
                    </p>
                </Grid>
                <Grid sm={6} xs={12} item>
                    <Typography variant="body1">
                        <b>{role}</b>
                    </Typography>
                    <Typography variant="body1">
                        {children}
                    </Typography>
                    <Grid spacing={1} direction="row" container>
                        { techs && techs.map( tech => <Grid item><Chip className="TechChips" variant="outlined" color="primary" size="small" label={ tech } /></Grid> )}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

Project.propTypes = {
    company: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    techs: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired
};

export default Project;
