import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { UserAuth } from '../AuthContext';
import { Divider } from '@mui/material';
const pages = ['Home', 'About', 'News'];
function NavBar() {
    const { user, logOut } = UserAuth();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div style={{ position: "static" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        TIKI
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>Home</Link>
                        </Box>
                        <Box sx={{ mx: 5, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link to={'/about'} style={{ textDecoration: "none", color: "black" }}>About</Link>
                        </Box>
                    </Box>



                    <Box sx={{ flexGrow: 0 }}>
                        {user?.displayName ? (
                            <div>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={user.email} src={user.photoURL} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center" ><Link to='/dashboard' style={{ textDecoration: "none" }}>Dashboard</Link></Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <Typography textAlign="center" onClick={handleSignOut}>Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <Link to='/login' style={{ textDecoration: "none" }} >
                                <Button
                                    sx={{ fontWeight: "bold", my: 2, color: 'black', display: 'block' }}
                                >
                                    Sign in
                                </Button>
                            </Link>
                        )}
                    </Box>
                </Toolbar>
                <Divider></Divider>
            </Container>
        </div>
    );
}
export default NavBar;
