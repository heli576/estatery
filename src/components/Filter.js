import React,{useState} from "react";
import { Grid, Divider, Paper, FormControl, InputLabel, Select, MenuItem, Input, Button } from '@mui/material';
import moment from "moment";

const Filter = ({filters, handleChange}) => {
    const {location, when, price, propertyType} = filters;

    const cities = ["Sun Valley", "Los Angeles", "North Hollywood", "West Hills"];
    const houseType = ["Single Family","Multi Family","Townhouse"];

    return (
    <Paper>
        <Grid container sx = {{padding: 3}}>
            {/* location filter */}
            <Grid item  md xs={12}>
            <FormControl variant = "standard" sx = {{width:"80%", textAlign:"left"}} color="secondary">
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                value={location}
                label="Location"
                onChange={(e)=>{
                   handleChange({location: e.target.value});
                }}
                >
                    {cities&&cities.map((c)=>(
                        <MenuItem value={c}>{c}</MenuItem>
                    ))}
                    </Select>
            </FormControl>
            </Grid>
            <Divider orientation="vertical" flexItem />

            {/* date filter */}
            <Grid item md xs={12}>
            <FormControl variant = "standard" sx = {{width:"80%", textAlign:"left"}} color="secondary">
                <InputLabel id="demo-simple-select-label">When</InputLabel>
               <Input value ={when} type = "date" onChange={(e)=> {
                let val = e.target.value;
                if(val=="") val = moment().format('L');
                handleChange({when:val})}
               }/>
            </FormControl>
            </Grid>
            <Divider orientation="vertical" flexItem />
            
            {/* price filter */}
            <Grid item md xs={12}>
            <FormControl variant = "standard" sx = {{width:"80%", textAlign:"left"}} color="secondary">
                <InputLabel id="demo-simple-select-label">Price</InputLabel>
                <Select
                value={price}
                label="Location"
                onChange={(e)=>{
                    handleChange({price: e.target.value});
                }}
                >
                <MenuItem value="0-500K">0-500K</MenuItem>
                <MenuItem value="1000-5000K">1000-5000K</MenuItem>
                <MenuItem value="5000-7000K">5000-7000K</MenuItem>
                <MenuItem value="Above 7000K">Above 7000K</MenuItem>
      
                    </Select>
            </FormControl>
            </Grid>
            <Divider orientation="vertical" flexItem />

            {/* property type filter */}
            <Grid item md xs={12}>
            <FormControl variant = "standard" sx = {{width:"80%", textAlign:"left"}} color="secondary">
                <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
                <Select
                value={propertyType}
                label="Property Type"
                onChange={(e)=>{
                    handleChange({propertyType:e.target.value})
                }}
                >
                    {houseType&&houseType.map((c)=>(
                        <MenuItem value={c}>{c}</MenuItem>
                    ))}
                    </Select>
            </FormControl>
            </Grid>
            </Grid>
            </Paper>
    );
}

export default Filter;