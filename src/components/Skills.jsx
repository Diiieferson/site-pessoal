import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    LinearProgress,
    Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import ParticlesBackground from './utilities/ParticlesBackground';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            color: '#61dafb',
            skills: [
                { name: 'JavaScript', level: 90, icon: '🟨' },
                { name: 'React.js', level: 85, icon: '⚛️' },
                { name: 'MaterializeCSS', level: 80, icon: '🎨' },
                { name: 'Material UI', level: 85, icon: '🎨' },
                { name: 'jQuery', level: 75, icon: '📚' },
                { name: 'HTML/CSS', level: 88, icon: '🌐' }
            ]
        },
        {
            title: 'Backend',
            color: '#68a063',
            skills: [
                { name: 'Node.js', level: 85, icon: '🟢' },
                { name: 'Google Apps Script', level: 90, icon: '📊' },
                { name: 'Python', level: 70, icon: '🐍' },
                { name: 'VBA', level: 95, icon: '📈' },
                { name: 'Web APIs', level: 85, icon: '🔗' }
            ]
        },
        {
            title: 'Database',
            color: '#f29111',
            skills: [
                { name: 'MongoDB', level: 80, icon: '🍃' },
                { name: 'BigQuery', level: 75, icon: '📊' },
                { name: 'MySQL', level: 80, icon: '🐬' },
                { name: 'Azure SQL', level: 75, icon: '☁️' },
                { name: 'Parse', level: 70, icon: '⚡' }
            ]
        },
        {
            title: 'DevOps & Ferramentas',
            color: '#0078d4',
            skills: [
                { name: 'GitHub', level: 85, icon: '📝' },
                { name: 'Azure DevOps', level: 80, icon: '☁️' },
                { name: 'Bitbucket', level: 75, icon: '🔧' },
                { name: 'Jira', level: 80, icon: '📋' },
                { name: 'Scrum', level: 85, icon: '⚙️' }
            ]
        },
        {
            title: 'Análise & Automação',
            color: '#e535ab',
            skills: [
                { name: 'Excel Avançado', level: 95, icon: '📊' },
                { name: 'Power BI', level: 80, icon: '📈' },
                { name: 'ETL', level: 85, icon: '🔄' },
                { name: 'Automação de Processos', level: 90, icon: '🤖' },
            ]
        }
    ];

    return (
        <Box sx={{ minHeight: '100vh', pt: 4, pb: 6 }}>
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
                        Minhas Skills
                    </Typography>
                </motion.div>

                <Grid spacing={2} container>
                    {skillCategories.map((category, categoryIndex) => (
                        <Grid item xs={12} md={6} lg={4} key={category.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: `2px solid ${category.color}`,
                                        borderRadius: 2,
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            transition: 'transform 0.3s ease',
                                            boxShadow: `0 10px 30px ${category.color}40`
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: category.color,
                                                fontWeight: 'bold',
                                                mb: 3,
                                                textAlign: 'center'
                                            }}
                                        >
                                            {category.title}
                                        </Typography>

                                        {category.skills.sort((a, b) => b.level - a.level).map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: categoryIndex * 0.2 + skillIndex * 0.1
                                                }}
                                            >
                                                <Box sx={{ mb: 2 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                        <Typography sx={{ fontSize: '1.2rem', mr: 1 }}>
                                                            {skill.icon}
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{ color: '#ffffff', flexGrow: 1 }}
                                                        >
                                                            {skill.name}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{ color: category.color, fontWeight: 'bold', ml: 2 }}
                                                        >
                                                            {skill.level}%
                                                        </Typography>
                                                    </Box>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={skill.level}
                                                        sx={{
                                                            height: 8,
                                                            borderRadius: 4,
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            '& .MuiLinearProgress-bar': {
                                                                backgroundColor: category.color,
                                                                borderRadius: 4
                                                            }
                                                        }}
                                                    />
                                                </Box>
                                            </motion.div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>


            </Container>
        </Box>
    );
};

export default Skills;
