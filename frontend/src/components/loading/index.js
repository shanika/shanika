import React, {PureComponent} from 'react';
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

class Loading extends PureComponent {
    render() {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item xs={3}>
                    <CircularProgress />
                </Grid>
                <Grid style={{ marginTop: 20, color: "#4c4c4c"}} item xs={3}>
                    This may take up to 5 seconds to start the server
                </Grid>

            </Grid>
        );
    }
}

Loading.propTypes = {};

export default Loading;
