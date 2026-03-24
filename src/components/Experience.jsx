import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import {
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Grid,
    Typography
} from '@mui/material';
import { motion } from 'framer-motion';

const Experiences = () => {
    const experiences = [
        {
            id: 1,
            type: 'work',
            company: 'ETRO Construction - Vancouver, BC',
            position: 'Software Developer',
            period: '10/2023 - Atual',
            description: 'Desenvolvo sistemas em Node.js, React.js e JavaScript/Google Apps Script para o departamento de RH, utilizando frameworks como MaterializeCSS e Material UI, e ferramentas de controle de versão (GitHub e Azure DevOps). Trabalho 100% remoto desenvolvendo SPAs com React.js, Web APIs e banco de dados Azure SQL.',
            technologies: ['Node.js', 'React.js', 'JavaScript', 'Google Apps Script', 'MaterializeCSS', 'Material UI', 'Azure SQL', 'GitHub', 'Azure DevOps'],
            achievements: [
                'Desenvolvi sistemas completos para departamento de RH',
                'Experiência desenvolvendo SPAs com React.js',
                'Desenvolvi excelente comunicação em inglês',
                'Trabalho 100% remoto com setup completo para desenvolvimento',
                'Criei interfaces dinâmicas e otimizadas resolvendo desafios complexos de software'
            ]
        },
        {
            id: 2,
            type: 'work',
            company: 'Sheetgo - Joinville, SC',
            position: 'Software Developer',
            period: '02/2022 - 04/2023',
            description: 
                `Suporte para área de Customer Success, fazendo a ponte entre CS e Tech Team. 
                Desenvolvimento de sistema interno com JavaScript e Google Apps Script. 
                Trabalho com ferramentas de consulta de dados como MongoDB, BigQuery e Parse, utilizando metodologia Scrum.`,
            technologies: ['JavaScript', 'Google Apps Script', 'MongoDB', 'BigQuery', 'Parse', 'MaterializeCSS', 'jQuery', 'GitHub', 'Bitbucket', 'Jira'],
            achievements: [
                'Ponte eficiente entre Customer Success e Tech Team',
                'Desenvolvimento e manutenção de sistema interno',
                'Experiência com ferramentas de Big Data (MongoDB, BigQuery)',
                'Trabalhei com metodologia Scrum usando Jira',
                'Múltiplas ferramentas de versionamento (GitHub e Bitbucket)'
            ]
        },
        {
            id: 3,
            type: 'work',
            company: 'DBA Desenvolvimento - Joinville, SC',
            position: 'Analista de Dados / Desenvolvedor VBA',
            period: '11/2019 - 02/2022',
            description: 'Empresa própria. Responsável por desenvolvimento de automações nas áreas administrativas e de controladoria da empresa. Análise de dados, melhoria de processos, criação de relatórios para alta gestão e treinamentos de Excel e VBA. Desenvolvimento de automações que economizaram mais de 100 horas mensais.',
            technologies: ['VBA', 'Excel', 'MySQL', 'Outlook Automation', 'ETL', 'XML', 'Power BI'],
            achievements: [
                'Mais de 100 horas mensais economizadas com automações',
                'Automação de recebimento e resposta de e-mails com VBA',
                'Projetos de extração de dados do Portal da Transparência (Joinville)',
                'Sistema para controle financeiro com automação web',
                'Diversos suplementos para Excel criados em VBA',
                'Análise de arquivos XML com tratamento ETL',
                'Treinamentos de Excel e VBA para equipes'
            ]
        },
        {
            id: 4,
            type: 'work',
            company: 'Lean Solutions - São Paulo, SP',
            position: 'Instrutor de VBA para Negócios',
            period: '01/2018 - 12/2018',
            description: 'Instrutor de cursos de VBA Avançado em universidades renomadas como UFPR e UFSC, ministrando treinamentos especializados para profissionais e acadêmicos em automação e desenvolvimento VBA.',
            technologies: ['VBA', 'Excel', 'Educação', 'Treinamento'],
            achievements: [
                'VBA Avançado na UFPR em 01/06/2018',
                'VBA Avançado na UFPR em 28/07/2018',
                'VBA Avançado na UFSC em 18/11/2018',
                'Formação de profissionais em automação VBA'
            ]
        }
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'work':
                return <WorkIcon sx={{ fontSize: 30, color: '#8b5cf6' }} />;
            case 'education':
                return <SchoolIcon sx={{ fontSize: 30, color: '#06b6d4' }} />;
            default:
                return <WorkIcon sx={{ fontSize: 30, color: '#8b5cf6' }} />;
        }
    };

    const getCardColor = (type) => {
        switch (type) {
            case 'work':
                return '#8b5cf6';
            case 'education':
                return '#06b6d4';
            default:
                return '#8b5cf6';
        }
    };

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
                        Experiência Profissional
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
                        Minha trajetória profissional em desenvolvimento de software e automação
                    </Typography>
                </motion.div>

                <Grid container spacing={3}>
                    {/* Experience List */}
                    <Grid item xs={12}>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        mb: 3,
                                        backgroundColor: 'rgba(139, 92, 246, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: `1px solid ${getCardColor(exp.type)}40`,
                                        borderRadius: 2,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: `0 8px 24px ${getCardColor(exp.type)}20`,
                                            borderColor: `${getCardColor(exp.type)}80`
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                                            <Box
                                                sx={{
                                                    p: 1.5,
                                                    borderRadius: '10px',
                                                    backgroundColor: `${getCardColor(exp.type)}15`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    minWidth: 'fit-content'
                                                }}
                                            >
                                                {getIcon(exp.type)}
                                            </Box>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        color: getCardColor(exp.type),
                                                        fontWeight: 600,
                                                        mb: 0.5,
                                                        fontSize: '1.1rem'
                                                    }}
                                                >
                                                    {exp.type === 'work' ? exp.position : exp.course}
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: '#e2e8f0', mb: 0.5, fontSize: '0.95rem' }}
                                                >
                                                    {exp.type === 'work' ? exp.company : exp.institution}
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: getCardColor(exp.type),
                                                        mb: 2,
                                                        fontWeight: 600,
                                                        fontSize: '0.85rem'
                                                    }}
                                                >
                                                    {exp.period}
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: '#cbd5e1',
                                                        mb: 2.5,
                                                        lineHeight: 1.6,
                                                        fontSize: '0.9rem'
                                                    }}
                                                >
                                                    {exp.description}
                                                </Typography>

                                                {exp.technologies && (
                                                    <>
                                                        <Typography
                                                            variant="caption"
                                                            sx={{ color: '#8b5cf6', mb: 1, display: 'block', fontSize: '0.8rem', fontWeight: 600 }}
                                                        >
                                                            Tecnologias:
                                                        </Typography>
                                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
                                                            {exp.technologies.map((tech) => (
                                                                <Chip
                                                                    key={tech}
                                                                    label={tech}
                                                                    size="small"
                                                                    sx={{
                                                                        backgroundColor: `${getCardColor(exp.type)}15`,
                                                                        color: '#e2e8f0',
                                                                        border: `1px solid ${getCardColor(exp.type)}30`,
                                                                        fontWeight: 500,
                                                                        fontSize: '0.75rem',
                                                                        height: 24
                                                                    }}
                                                                />
                                                            ))}
                                                        </Box>
                                                    </>
                                                )}

                                                {exp.achievements && (
                                                    <>
                                                        <Divider sx={{ my: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{ color: '#cccccc', mb: 2 }}
                                                        >
                                                            Principais Conquistas:
                                                        </Typography>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                                            {exp.achievements.map((achievement, i) => (
                                                                <Box
                                                                    key={i}
                                                                    sx={{
                                                                        display: 'flex',
                                                                        p: 1.5,
                                                                        pointerEvents: 'none',
                                                                        backgroundColor: `${getCardColor(exp.type)}10`,
                                                                        borderLeft: `3px solid ${getCardColor(exp.type)}`,
                                                                        borderRadius: '0 8px 8px 0',
                                                                        '&:hover': {
                                                                            backgroundColor: `${getCardColor(exp.type)}20`,
                                                                            transform: 'translateX(5px)',
                                                                            transition: 'all 0.3s ease'
                                                                        }
                                                                    }}
                                                                >
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: '#ffffff',
                                                                            lineHeight: 1.5,
                                                                            flex: 1
                                                                        }}
                                                                    >
                                                                        {achievement}
                                                                    </Typography>
                                                                </Box>
                                                            ))}
                                                        </Box>
                                                    </>
                                                )}

                                                {exp.projects && (
                                                    <>
                                                        <Divider sx={{ my: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{ color: '#cccccc', mb: 2 }}
                                                        >
                                                            Projetos Principais:
                                                        </Typography>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                                            {exp.projects.map((project, i) => (
                                                                <Box
                                                                    key={i}
                                                                    sx={{
                                                                        display: 'flex',
                                                                        alignItems: 'flex-start',
                                                                        p: 1.5,
                                                                        backgroundColor: `${getCardColor(exp.type)}10`,
                                                                        borderLeft: `3px solid ${getCardColor(exp.type)}`,
                                                                        borderRadius: '0 8px 8px 0',
                                                                        '&:hover': {
                                                                            backgroundColor: `${getCardColor(exp.type)}20`,
                                                                            transform: 'translateX(5px)',
                                                                            transition: 'all 0.3s ease'
                                                                        }
                                                                    }}
                                                                >
                                                                    <Box
                                                                        sx={{
                                                                            width: 8,
                                                                            height: 8,
                                                                            borderRadius: '50%',
                                                                            backgroundColor: getCardColor(exp.type),
                                                                            mr: 2,
                                                                            mt: 0.5,
                                                                            flexShrink: 0
                                                                        }}
                                                                    />
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: '#ffffff',
                                                                            lineHeight: 1.5,
                                                                            flex: 1
                                                                        }}
                                                                    >
                                                                        {project}
                                                                    </Typography>
                                                                </Box>
                                                            ))}
                                                        </Box>
                                                    </>
                                                )}
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Experiences;
