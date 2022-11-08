import React,{useState} from "react";
import { Grid, Divider, Paper, FormControl, InputLabel, Select, MenuItem, Input, Button } from '@mui/material';

const Filter = () => {
    const [filters, setFilters] = useState({
        location: "Los Angeles",
        when: new Date(),
        price: "1000K-5000K",
        propertyType:"Single Family"
    });

    const {location, when, price, propertyType} = filters;

    const cities = ["Playa Del Rey", "Sylmar", "Sun Valley", "Los Angeles", "Canoga Park", "North Hollywood", "Sunland", "West Hills"];
    const houseType = ["Single Family","Multi Family","Townhouse", "Lot","Condo"];
    return (
    <Paper>
        <Grid container sx = {{padding: 3}}>
            <Grid item md>
            <FormControl variant = "standard" sx = {{width:"80%", textAlign:"left"}} color="secondary">
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                value={location}
                label="Location"
                onChange={(e)=>{
                    setFilters({...filters, location: e.target.value})
                }}
                >
                    {cities&&cities.map((c)=>(
                        <MenuItem value={c}>{c}</MenuItem>
                    ))}
                    </Select>
            </FormControl>
            </Grid>
            <Divider orientation="vertical" flexItem />

            <Grid item md>
            <FormControl variant = "standard" sx = {{width:"80%", textAlign:"left"}} color="secondary">
                <InputLabel id="demo-simple-select-label">When</InputLabel>
               <Input value ={when} type = "date" onChange={(e)=> setFilters({...filters, when: e.target.value})}/>
            </FormControl>
            </Grid>
            <Divider orientation="vertical" flexItem />

            <Grid item md>
            <FormControl variant = "standard" sx = {{width:"80%", textAlign:"left"}} color="secondary">
                <InputLabel id="demo-simple-select-label">Price</InputLabel>
                <Select
                value={price}
                label="Location"
                onChange={(e)=>{
                    setFilters({...filters, price: e.target.value})
                }}
                >
                <MenuItem value="0-1000K">0-1000K</MenuItem>
                <MenuItem value="1000K-5000K">1000K-5000K</MenuItem>
                <MenuItem value="5000K-10000K">5000K-10000K</MenuItem>
                <MenuItem value="10000K-50000K">10000K-50000K</MenuItem>
                <MenuItem value="Above 50000K">Above 50000K</MenuItem>
      
                    </Select>
            </FormControl>
            </Grid>
            <Divider orientation="vertical" flexItem />

            <Grid item md>
            <FormControl variant = "standard" sx = {{width:"80%", textAlign:"left"}} color="secondary">
                <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
                <Select
                value={propertyType}
                label="Property Type"
                onChange={(e)=>{
                    setFilters({...filters, propertyType: e.target.value})
                }}
                >
                    {houseType&&houseType.map((c)=>(
                        <MenuItem value={c}>{c}</MenuItem>
                    ))}
                    </Select>
            </FormControl>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item md>
                <Button variant="contained" color = "secondary" >Search</Button>
            </Grid>
            </Grid>
            </Paper>
    );
}

export default Filter;