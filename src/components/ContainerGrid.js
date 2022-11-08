import React from "react";
import Grid from '@mui/material/Grid';
import Header from "./Header";
import Filter from "./Filter";

const ContainerGrid = ({page}) => {
return(<Grid container spacing={2}>
  <Grid item xs={1}>
  </Grid>
  <Grid item xs={10} mt = {4}>
    <Header page = {page}/>
    <Filter/>
  </Grid>
  <Grid item xs={1}>
  </Grid>
</Grid>);
}

export default ContainerGrid;