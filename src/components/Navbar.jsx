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

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const menuItems = [
        { text: 'Início', id: 'home' },
        { text: 'Sobre', id: 'about' },
        { text: 'Habilidades', id: 'skills' },
        { text: 'Experiência', id: 'experience' },
        { text: 'Portfólio', id: 'portifolio' },
        { text: 'Certificações', id: 'certifications' },
        { text: 'Contato', id: 'contact' }
    ];

    const handleNavigate = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', bgcolor: '#0f172a' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                <Typography variant="h6" sx={{ color: '#8b5cf6' }}>
                    Dieferson
                </Typography>
                <IconButton onClick={handleDrawerToggle} sx={{ color: '#e2e8f0' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <Button
                            onClick={() => handleNavigate(item.id)}
                            fullWidth
                            sx={{
                                color: '#e2e8f0',
                                py: 1.5,
                                fontSize: '0.9rem',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: 0,
                                '&:hover': {
                                    color: '#8b5cf6',
                                    backgroundColor: 'rgba(139, 92, 246, 0.05)'
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
                    backgroundColor: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(139, 92, 246, 0.1)',
                    zIndex: 1200
                }}
            >
                <Toolbar sx={{ py: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Button
                            onClick={() => handleNavigate('home')}
                            sx={{
                                flexGrow: 0,
                                color: '#8b5cf6',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '1.1rem'
                            }}
                        >
                            Dieferson
                        </Button>
                    </motion.div>

                    <Box sx={{ flexGrow: 1 }} />

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ color: '#e2e8f0' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.06 }}
                                >
                                    <Button
                                        onClick={() => handleNavigate(item.id)}
                                        sx={{
                                            color: '#cbd5e1',
                                            px: 1.5,
                                            fontSize: '0.85rem',
                                            position: 'relative',
                                            transition: 'color 0.3s ease',
                                            '&:hover': {
                                                color: '#8b5cf6',
                                                backgroundColor: 'rgba(139, 92, 246, 0.05)'
                                            },
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 8,
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                width: '0%',
                                                height: '2px',
                                                backgroundColor: '#8b5cf6',
                                                transition: 'width 0.3s ease',
                                            },
                                            '&:hover::after': {
                                                width: '80%'
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
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
