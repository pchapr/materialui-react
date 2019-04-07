import React, { Component, Fragment } from "react";
import { Grid, Paper, FormLabel } from "material-ui";

class ChartComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Grid item sm={12}>
          <Paper style={this.props.style.paperTop}>
            <FormLabel>Top Component</FormLabel>
          </Paper>
        </Grid>
      </Fragment>
    );
  }
}

export default ChartComponent;
