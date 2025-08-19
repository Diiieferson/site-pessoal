import { Box, Chip, Container, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ParticlesBackground from './utilities/ParticlesBackground';

const About = () => {
    const skills = [
        'JavaScript', 'Node.js', 'React.js', 'Google Apps Script', 'VBA', 'Python',
        'MaterializeCSS', 'Material UI', 'jQuery', 'MongoDB', 'BigQuery', 'MySQL',
        'Azure SQL', 'GitHub', 'Azure DevOps', 'Bitbucket', 'Excel Avançado',
        'Power BI', 'Scrum', 'ETL', 'Automação de Processos'
    ];

    return (
        <Box sx={{ minHeight: '100vh', pt: 4 }}>
            <ParticlesBackground />
            <Container maxWidth="lg">
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
                            mb: 6,
                            fontWeight: 'bold'
                        }}
                    >
                        Sobre Mim
                    </Typography>
                </motion.div>

                <Grid container spacing={4} alignItems="center" justifyContent='center'>
                    <Grid item xs={12} md={4}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Stack justifyContent='center' textAlign='center'>
                                <Typography variant="h4" sx={{ color: '#00ff88', fontWeight: 'bold' }}>
                                    Dieferson de Oliveira
                                </Typography>
                                <Divider sx={{ color: '#00ff88' }} />
                                <Typography variant="h6" sx={{ color: '#cccccc', ml: 2 }}>
                                    Desenvolvedor Full Stack | Node.js e React.js
                                </Typography>
                            </Stack >
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Paper
                                sx={{
                                    p: 4,
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 2
                                }}
                            >
                                <Typography variant="h5" sx={{ color: '#00ff88', mb: 3, fontWeight: 'bold' }}>
                                    Minha História
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#ffffff',
                                        lineHeight: 1.8,
                                        mb: 3,
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    Nos últimos 3 anos, tenho focado esforços em desenvolver minhas habilidades
                                    na área de programação, trabalhando com linguagens como Node.js, React.js,
                                    Google Apps Script, utilizando frameworks como MaterialUI e MaterializeCSS e todo o ecossistema JavaScript.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#ffffff',
                                        lineHeight: 1.8,
                                        mb: 3,
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    Anterior à área de tecnologia, tenho mais de 10 anos de experiência em
                                    ferramentas financeiras e analíticas, e mais de 5 anos em desenvolvimento VBA.
                                    Atualmente trabalho como Software Developer na ETRO Construction uma construtora Canadense,
                                    desenvolvendo sistemas em Node.js, React.js e JavaScript/Google Apps Script.
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#00ff88', mb: 2, fontWeight: 'bold' }}>
                                    Principais Tecnologias
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                                        >
                                            <Chip
                                                label={skill}
                                                sx={{
                                                    backgroundColor: 'rgba(0, 255, 136, 0.2)',
                                                    color: '#ffffff',
                                                    border: '1px solid #00ff88',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(0, 255, 136, 0.3)'
                                                    }
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Box sx={{ mt: 6, textAlign: 'center' }}>
                        <Paper
                            sx={{
                                p: 4,
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: 2
                            }}
                        >
                            <Typography variant="h5" sx={{ color: '#00ff88', mb: 3, fontWeight: 'bold' }}>
                                Objetivos Profissionais
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#ffffff',
                                    lineHeight: 1.8,
                                    fontSize: '1.1rem'
                                }}
                            >
                                Busco oportunidades em empresas que valorizem inovação e desenvolvimento de soluções
                                escaláveis. Tenho interesse em expandir meus conhecimentos em arquiteturas de microsserviços
                                e tecnologias cloud-native, contribuindo para projetos que tenham impacto real na
                                experiência do usuário e eficiência dos processos. Meu objetivo é aprender e contribuir para a equipe
                                de forma significativa.
                            </Typography>
                        </Paper>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default About;
