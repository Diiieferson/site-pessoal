import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Grid,
    Paper,
    Typography
} from '@mui/material';
import { motion } from 'framer-motion';

const Certifications = () => {
    const certifications = [
        {
            name: 'Formação Full Stack',
            issuer: 'Gama Academy',
            year: '2021',
            credential: 'Javascript, Typescript, React, GraphQL, Node.js'
        },
        {
            name: 'Certificação Microsoft Expert Excel',
            issuer: 'Microsoft',
            year: '2020',
            credential: 'Excel Expert'
        },
        {
            name: 'VBA Avançado',
            issuer: 'Elaborata',
            year: '2019',
            credential: 'VBA Advanced'
        },
        {
            name: 'Git e GitHub for Beginners',
            issuer: 'Udemy',
            year: '2020',
            credential: 'Git-GitHub-2020'
        },
        {
            name: 'Python 3 in the Web with Django',
            issuer: 'Udemy',
            year: '2020',
            credential: 'Python-Django-2020'
        },
        {
            name: 'Introdução a Bancos de Dados com MySQL',
            issuer: 'Udemy',
            year: '2019',
            credential: 'MySQL-2019'
        }
    ];

    return (
        <Box sx={{ minHeight: '100vh', py: 8, px: 2, backgroundColor: '#0f172a' }}>
            <Container maxWidth="lg">
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
                        Certificações
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
                        Minhas certificações e cursos de desenvolvimento profissional
                    </Typography>
                </motion.div>

                <Box
                    sx={{
                        display: 'grid',
                        gap: 3,
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, minmax(0, 1fr))',
                            md: 'repeat(3, minmax(0, 1fr))'
                        }
                    }}
                >
                    {certifications.map((cert, index) => (
                        <Box key={cert.name} sx={{ display: 'flex', minWidth: 0 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                                style={{ width: '100%', display: 'flex' }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        minHeight: { xs: 340, md: 380 },
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: '2px solid #00ff88',
                                        borderRadius: 2,
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            transition: 'transform 0.3s ease',
                                            boxShadow: '0 20px 40px rgba(0, 255, 136, 0.3)',
                                            borderColor: '#00ff88'
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 2
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    p: 2,
                                                    borderRadius: '50%',
                                                    backgroundColor: 'rgba(0, 255, 136, 0.2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <EmojiEventsIcon sx={{ fontSize: 30, color: '#00ff88' }} />
                                            </Box>
                                        </Box>

                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: '#ffffff',
                                                fontWeight: 'bold',
                                                mb: 2,
                                                textAlign: 'center',
                                                lineHeight: 1.3,
                                                minHeight: 72,
                                                display: '-webkit-box',
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            {cert.name}
                                        </Typography>

                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: '#00ff88',
                                                mb: 2,
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                minHeight: 32
                                            }}
                                        >
                                            {cert.issuer}
                                        </Typography>

                                        <Box sx={{ mt: 'auto', minHeight: 88, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                mb: 2
                                            }}>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: '#cccccc',
                                                        fontWeight: 'bold',
                                                        fontSize: '1.1rem'
                                                    }}
                                                >
                                                    {cert.year}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <Chip
                                                    label={cert.credential}
                                                    sx={{
                                                        backgroundColor: 'rgba(0, 255, 136, 0.2)',
                                                        color: '#ffffff',
                                                        fontSize: '0.8rem',
                                                        fontWeight: 'bold',
                                                        border: '1px solid #00ff88',
                                                        maxWidth: '100%',
                                                        width: '100%'
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Box>
                    ))}
                </Box>

                {/* Statistics Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Paper
                        sx={{
                            mt: 6,
                            p: 4,
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(0, 255, 136, 0.3)',
                            borderRadius: 2,
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                color: '#00ff88',
                                fontWeight: 'bold',
                                mb: 2
                            }}
                        >
                            Resumo das Certificações
                        </Typography>

                        <Grid container spacing={4} justifyContent="center">
                            <Grid item xs={12} sm={4}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: '#ffffff',
                                        fontWeight: 'bold',
                                        mb: 1
                                    }}
                                >
                                    {certifications.length}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: '#cccccc' }}
                                >
                                    Certificações Obtidas
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: '#ffffff',
                                        fontWeight: 'bold',
                                        mb: 1
                                    }}
                                >
                                    5+
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: '#cccccc' }}
                                >
                                    Anos de Estudo
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: '#ffffff',
                                        fontWeight: 'bold',
                                        mb: 1
                                    }}
                                >
                                    100%
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: '#cccccc' }}
                                >
                                    Aplicadas no Trabalho
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Certifications;
