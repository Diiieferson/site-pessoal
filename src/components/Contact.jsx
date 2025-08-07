import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    IconButton,
    Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ParticlesBackground from './utilities/ParticlesBackground';

const Contact = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você implementaria o envio do formulário
        console.log('Formulário enviado:', formData);
        setOpenSnackbar(true);
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const contactInfo = [
        {
            icon: <EmailIcon />,
            titulo: 'Email',
            valor: 'diiieferson@gmail.com',
            link: 'mailto:diiieferson@gmail.com',
            color: '#e74c3c'
        },
        {
            icon: <PhoneIcon />,
            titulo: 'Telefone',
            valor: '(47) 9 8913-1560',
            link: 'tel:+5547989131560',
            color: '#2ecc71'
        },
        {
            icon: <LocationOnIcon />,
            titulo: 'Localização',
            valor: 'Joinville, SC - Brasil (Remoto)',
            link: null,
            color: '#3498db'
        }
    ];

    const redesSociais = [
        {
            icon: <LinkedInIcon />,
            nome: 'LinkedIn',
            url: 'https://www.linkedin.com/in/diiieferson/',
            color: '#0077b5'
        },
        {
            icon: <GitHubIcon />,
            nome: 'GitHub',
            url: 'https://github.com/diiieferson',
            color: '#333333'
        },
        {
            icon: <EmailIcon />,
            nome: 'Email',
            url: 'mailto:diiieferson@gmail.com',
            color: '#e74c3c'
        }
    ];

    return (
        <Box sx={{ minHeight: '100vh', pt: 4, pb: 6 }}>
            <ParticlesBackground />
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{
                            color: '#ffffff',
                            textAlign: 'center',
                            mb: 2,
                            fontWeight: 'bold'
                        }}
                    >
                        Entre em Contact
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#cccccc',
                            textAlign: 'center',
                            mb: 6,
                            maxWidth: '600px',
                            mx: 'auto'
                        }}
                    >
                        Vamos conversar sobre como posso contribuir para seu próximo projeto
                    </Typography>

                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                sx={{ width: '100%', maxWidth: '500px' }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ color: '#00ff88', mb: 4, fontWeight: 'bold', textAlign: 'center' }}
                                >
                                    Informações de Contact
                                </Typography>

                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.titulo}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    >
                                        <Card
                                            sx={{
                                                mb: 3,
                                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(10px)',
                                                border: `1px solid ${info.color}`,
                                                borderRadius: 2,
                                                cursor: info.link ? 'pointer' : 'default',
                                                '&:hover': info.link ? {
                                                    transform: 'translateX(10px)',
                                                    transition: 'transform 0.3s ease',
                                                    boxShadow: `0 5px 20px ${info.color}40`
                                                } : {}
                                            }}
                                            onClick={() => info.link && window.open(info.link)}
                                        >
                                            <CardContent sx={{ p: 3 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'left', gap: 2 }}>
                                                    <Box
                                                        sx={{
                                                            p: 2,
                                                            borderRadius: '50%',
                                                            backgroundColor: `${info.color}20`,
                                                            color: info.color,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                    >
                                                        {info.icon}
                                                    </Box>
                                                    <Box sx={{ textAlign: 'left' }} >
                                                        <Typography
                                                            variant="h6"
                                                            sx={{ color: '#ffffff', fontWeight: 'bold', mb: 1 }}
                                                        >
                                                            {info.titulo}
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{ color: '#cccccc' }}
                                                        >
                                                            {info.valor}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}

                                {/* Redes Sociais */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{ color: '#00ff88', mb: 3, fontWeight: 'bold' }}
                                    >
                                        Conecte-se Comigo
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                                        {redesSociais.map((rede, index) => (
                                            <motion.div
                                                key={rede.nome}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                                            >
                                                <IconButton
                                                    href={rede.url}
                                                    target="_blank"
                                                    sx={{
                                                        p: 2,
                                                        backgroundColor: `${rede.color}20`,
                                                        color: rede.color,
                                                        border: `2px solid ${rede.color}`,
                                                        '&:hover': {
                                                            backgroundColor: `${rede.color}40`,
                                                            transform: 'translateY(-5px)',
                                                            boxShadow: `0 10px 20px ${rede.color}40`
                                                        }
                                                    }}
                                                >
                                                    {rede.icon}
                                                </IconButton>
                                            </motion.div>
                                        ))}
                                    </Box>
                                </motion.div>
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box >
    );
};

export default Contact;
