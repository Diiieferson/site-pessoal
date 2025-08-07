import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const menuItems = [
        { text: 'Início', path: '/' },
        { text: 'Sobre', path: '/about' },
        { text: 'Habilidades', path: '/skills' },
        // { text: 'Portfólio', path: '/portifolio' },
        { text: 'Experiência', path: '/experience' },
        { text: 'Certificações', path: '/certifications' },
        { text: 'Contato', path: '/contact' }
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const isActive = (path) => location.pathname === path;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', bgcolor: '#0a0a0a' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                <Typography variant="h6" sx={{ color: '#00ff88' }}>
                    Dieferson
                </Typography>
                <IconButton onClick={handleDrawerToggle} sx={{ color: '#ffffff' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <Button
                            component={Link}
                            to={item.path}
                            fullWidth
                            sx={{
                                color: isActive(item.path) ? '#00ff88' : '#ffffff',
                                py: 2,
                                borderBottom: isActive(item.path) ? '2px solid #00ff88' : 'none',
                                borderRadius: 0,
                                '&:hover': {
                                    color: '#00ff88',
                                    backgroundColor: 'rgba(0, 255, 136, 0.1)'
                                }
                            }}
                        >
                            {item.text}
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'rgba(10, 10, 10, 0.95)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
            >
                <Toolbar>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            sx={{
                                flexGrow: 1,
                                color: '#00ff88',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '1.5rem'
                            }}
                        >
                            Dieferson
                        </Typography>
                    </motion.div>

                    <Box sx={{ flexGrow: 1 }} />

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ color: '#ffffff' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Button
                                        component={Link}
                                        to={item.path}
                                        sx={{
                                            color: isActive(item.path) ? '#00ff88' : '#ffffff',
                                            mx: 1,
                                            position: 'relative',
                                            '&:hover': {
                                                color: '#00ff88',
                                                backgroundColor: 'rgba(0, 255, 136, 0.1)'
                                            },
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                width: isActive(item.path) ? '100%' : '0%',
                                                height: '2px',
                                                backgroundColor: '#00ff88',
                                                transition: 'width 0.3s ease'
                                            },
                                            '&:hover::after': {
                                                width: '100%'
                                            }
                                        }}
                                    >
                                        {item.text}
                                    </Button>
                                </motion.div>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 280,
                        backgroundColor: '#0a0a0a',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    },
                }}
            >
                {drawer}
            </Drawer>

            {/* Spacer for fixed navbar */}
            <Toolbar />
        </>
    );
};

export default Navbar;
