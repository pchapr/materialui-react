import React from "react";
import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui/Tabs";

var Footer = props => {
  return (
    <Paper square>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="Benchmark & Proxy coverage" />
        <Tab label="Vendor/Benhmark & Marks" />
        <Tab label="Marks Prices vs Proxy" />
      </Tabs>
    </Paper>
  );
};

export default Footer;
