import React, { Fragment } from "react";
import { Grid, Paper, FormLabel } from "material-ui";
import ChartComponent from "./ChartComponent";
import TableDataComponent from "./TableDataComponent";

const style = {
  paperTop: { padding: 20, margin: 10, marginTop: 20 },
  paperBottom: { padding: 20, margin: 10, marginBottom: 20 }
};

export default props => (
  <Fragment>
    <Grid container spacing={16}>
      <ChartComponent style={style} />
      <TableDataComponent style={style} />
    </Grid>
  </Fragment>
);
