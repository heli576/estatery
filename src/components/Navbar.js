import React, {useState} from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';

const Navbar = ({page, handlePage}) => {
const [anchorElNav, setAnchorElNav] = useState(null);
const pages = ['Buy', 'Sell', 'Rent'];

const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

return (
        <AppBar position="static" color = "transparent">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <OtherHousesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, mt: -1}} color = "secondary"/>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Estatery
              </Typography>
    
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="secondary"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <OtherHousesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, mt: -1 }} color = "secondary"/>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
               Estatery
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((p) => (
                  <Button
                    key={p}
                    onClick={()=>{
                        handlePage(p);
                        handleCloseNavMenu();
                    }}
                    sx={{ my: 2, display: 'block' }}
                    color = {page===p?'secondary':'inherit'}
                  >
                    {p}
                  </Button>
                ))}
              </Box>
    
              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, mr: 2, display: 'block' }}
                    color = "secondary"
                    variant = "outlined"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: 'block' }}
                    color = "secondary"
                    variant = "contained"
                  >
                    Signup
                  </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
);
}

export default Navbar;