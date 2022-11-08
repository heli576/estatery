import React from "react";
import Grid from '@mui/material/Grid';
import Header from "./Header";
import Filter from "./Filter";
import CardGrid from "./CardGrid";

const ContainerGrid = ({filters, handleChange}) => {
return(<Grid container spacing={2}>
  <Grid item xs={1}>
  </Grid>
  <Grid item xs={10} mt = {4}>
    <Header page = {filters.homeStatus}/>
    <Filter filters = {filters} handleChange = {handleChange}/>
    <CardGrid filters = {filters}/>
  </Grid>
  <Grid item xs={1}>
  </Grid>
</Grid>);
}

export default ContainerGrid;