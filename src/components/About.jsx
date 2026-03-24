import { Box, Chip, Container, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        'JavaScript', 'Node.js', 'React.js', 'Google Apps Script', 'VBA', 'Python',
        'MaterializeCSS', 'Material UI', 'jQuery', 'MongoDB', 'BigQuery', 'MySQL',
        'Azure SQL', 'GitHub', 'Azure DevOps', 'Bitbucket', 'Excel Avançado',
        'Power BI', 'Scrum', 'ETL', 'Automação de Processos'
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
                            mb: 8,
                            fontWeight: 600,
                            fontSize: { xs: '1.8rem', md: '2.2rem' }
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
                                <Typography 
                                    variant="h4" 
                                    sx={{ 
                                        color: '#8b5cf6', 
                                        fontWeight: 600,
                                        fontSize: '1.3rem',
                                        mb: 2
                                    }}
                                >
                                    Dieferson de Oliveira
                                </Typography>
                                <Divider sx={{ backgroundColor: 'rgba(139, 92, 246, 0.3)', mb: 2 }} />
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        color: '#cbd5e1',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Desenvolvedor Full Stack | Node.js e React.js
                                </Typography>
                            </Stack>
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
                                    backgroundColor: 'rgba(139, 92, 246, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(139, 92, 246, 0.15)',
                                    borderRadius: 2
                                }}
                            >
                                <Typography 
                                    variant="h5" 
                                    sx={{ 
                                        color: '#8b5cf6', 
                                        mb: 3, 
                                        fontWeight: 600,
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    Minha História
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#e2e8f0',
                                        lineHeight: 1.7,
                                        mb: 3,
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Nos últimos 3 anos, tenho focado esforços em desenvolver minhas habilidades
                                    na área de programação, trabalhando com linguagens como Node.js, React.js,
                                    Google Apps Script, utilizando frameworks como MaterialUI e MaterializeCSS e todo o ecossistema JavaScript.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#e2e8f0',
                                        lineHeight: 1.7,
                                        mb: 3,
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Anterior à área de tecnologia, tenho mais de 10 anos de experiência em
                                    ferramentas financeiras e analíticas, e mais de 5 anos em desenvolvimento VBA.
                                    Atualmente trabalho como Software Developer na ETRO Construction uma construtora Canadense,
                                    desenvolvendo sistemas em Node.js, React.js e JavaScript/Google Apps Script.
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        color: '#8b5cf6', 
                                        mb: 2, 
                                        fontWeight: 600,
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    Principais Tecnologias
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.6 + index * 0.08 }}
                                        >
                                            <Chip
                                                label={skill}
                                                sx={{
                                                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                                                    color: '#e2e8f0',
                                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                                    fontSize: '0.8rem',
                                                    height: 28,
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(139, 92, 246, 0.25)'
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
                    <Box sx={{ mt: 8, textAlign: 'center' }}>
                        <Paper
                            sx={{
                                p: 4,
                                backgroundColor: 'rgba(6, 182, 212, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(6, 182, 212, 0.15)',
                                borderRadius: 2
                            }}
                        >
                            <Typography 
                                variant="h5" 
                                sx={{ 
                                    color: '#06b6d4', 
                                    mb: 3, 
                                    fontWeight: 600,
                                    fontSize: '1.1rem'
                                }}
                            >
                                Objetivos Profissionais
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#cbd5e1',
                                    lineHeight: 1.7,
                                    fontSize: '0.9rem'
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
