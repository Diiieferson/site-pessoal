import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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

const Contact = () => {

    const contactInfo = [
        {
            icon: <EmailIcon />,
            title: 'Email',
            value: 'diiieferson@gmail.com',
            link: 'mailto:diiieferson@gmail.com',
            color: '#e74c3c'
        },
        {
            icon: <WhatsAppIcon />,
            title: 'Telefone',
            value: '(47) 9 8913-1560',
            link: 'https://wa.me/47989131560',
            color: '#2ecc71'
        },
        {
            icon: <LocationOnIcon />,
            title: 'Localização',
            value: 'Joinville, SC - Brasil (Remoto)',
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
        <Box sx={{ minHeight: '100vh', py: 8, px: 2, backgroundColor: '#0f172a' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        sx={{
                            color: '#e2e8f0',
                            textAlign: 'center',
                            mb: 2,
                            fontWeight: 600,
                            fontSize: { xs: '1.8rem', md: '2.2rem' }
                        }}
                    >
                        Entre em Contato
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#cbd5e1',
                            textAlign: 'center',
                            mb: 8,
                            maxWidth: '600px',
                            mx: 'auto',
                            fontSize: '0.95rem'
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
                                sx={{ width: '100%', maxWidth: '700px' }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ color: '#00ff88', mb: 4, fontWeight: 'bold', textAlign: 'center' }}
                                >
                                    Informações de Contato
                                </Typography>

                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    >
                                        <Card
                                            sx={{
                                                mb: 3,
                                                width: '100%',
                                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(10px)',
                                                border: `1px solid ${info.color}`,
                                                borderRadius: 2,
                                                cursor: info.link ? 'pointer' : 'default',
                                                '&:hover': {
                                                    transform: 'translateX(10px)',
                                                    transition: 'transform 0.3s ease',
                                                    boxShadow: `0 5px 20px ${info.color}40`
                                                }
                                            }}
                                            onClick={() => info.link && window.open(info.link)}
                                        >
                                            <CardContent sx={{ p: 3, minHeight: 80, display: 'flex', alignItems: 'center' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

                                                    {info.icon}

                                                    <Box sx={{ textAlign: 'left' }} >
                                                        <Typography
                                                            variant="h6"
                                                            sx={{ color: '#ffffff', fontWeight: 'bold', mb: 1 }}
                                                        >
                                                            {info.title}
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{ color: '#cccccc' }}
                                                        >
                                                            {info.value}
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
