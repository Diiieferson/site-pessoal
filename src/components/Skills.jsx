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

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            color: '#06b6d4',
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
            color: '#8b5cf6',
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
            color: '#06b6d4',
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
            color: '#8b5cf6',
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
            color: '#06b6d4',
            skills: [
                { name: 'Excel Avançado', level: 95, icon: '📊' },
                { name: 'Power BI', level: 80, icon: '📈' },
                { name: 'ETL', level: 85, icon: '🔄' },
                { name: 'Automação de Processos', level: 90, icon: '🤖' },
            ]
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
                            mb: 8,
                            fontWeight: 600,
                            fontSize: { xs: '1.8rem', md: '2.2rem' }
                        }}
                    >
                        Minhas Skills
                    </Typography>
                </motion.div>

                <Grid spacing={3} container>
                    {skillCategories.map((category, categoryIndex) => (
                        <Grid item xs={12} md={6} lg={4} key={category.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        backgroundColor: 'rgba(139, 92, 246, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: `1px solid ${category.color}40`,
                                        borderRadius: 2,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: `0 8px 24px ${category.color}25`,
                                            borderColor: `${category.color}80`
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: category.color,
                                                fontWeight: 600,
                                                mb: 3,
                                                textAlign: 'center',
                                                fontSize: '1.1rem'
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
                                                    delay: categoryIndex * 0.15 + skillIndex * 0.08
                                                }}
                                            >
                                                <Box sx={{ mb: 2.5 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.8 }}>
                                                        <Typography sx={{ fontSize: '1rem', mr: 1 }}>
                                                            {skill.icon}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{ color: '#e2e8f0', flexGrow: 1, fontSize: '0.9rem' }}
                                                        >
                                                            {skill.name}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{ color: category.color, fontWeight: 600, ml: 2, fontSize: '0.85rem' }}
                                                        >
                                                            {skill.level}%
                                                        </Typography>
                                                    </Box>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={skill.level}
                                                        sx={{
                                                            height: 6,
                                                            borderRadius: 3,
                                                            backgroundColor: 'rgba(139, 92, 246, 0.1)',
                                                            '& .MuiLinearProgress-bar': {
                                                                backgroundColor: category.color,
                                                                borderRadius: 3
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
