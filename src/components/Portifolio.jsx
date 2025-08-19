import LaunchIcon from '@mui/icons-material/Launch';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Container,
    Grid,
    IconButton,
    Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ParticlesBackground from './utilities/ParticlesBackground';

const Portifolio = () => {
    const [filtroAtivo, setFiltroAtivo] = useState('todos');

    const projetos = [
        {
            id: 1,
            titulo: 'Sistema de RH - ETRO Construction',
            descricao: 'Sistema completo para departamento de RH desenvolvido em Node.js, React.js e Google Apps Script, com integração ao Azure SQL Database.',
            imagem: '/api/placeholder/400/250',
            tecnologias: ['Node.js', 'React.js', 'Google Apps Script', 'Azure SQL', 'Material UI'],
            categoria: 'web',
            github: '#',
            demo: '#',
            status: 'Em Desenvolvimento'
        },
        {
            id: 2,
            titulo: 'Sistema Interno - Sheetgo',
            descricao: 'Desenvolvimento de sistema interno com JavaScript e Google Apps Script, integrando dados de MongoDB, BigQuery e Parse.',
            imagem: '/api/placeholder/400/250',
            tecnologias: ['JavaScript', 'Google Apps Script', 'MongoDB', 'BigQuery', 'MaterializeCSS'],
            categoria: 'web',
            github: '#',
            demo: '#',
            status: 'Concluído'
        },
        {
            id: 3,
            titulo: 'Automações VBA - DBA Desenvolvimento',
            descricao: 'Mais de 100 horas mensais economizadas com automações em Excel VBA, incluindo automação de e-mails e relatórios.',
            imagem: '/api/placeholder/400/250',
            tecnologias: ['VBA', 'Excel', 'Outlook Automation', 'MySQL', 'Power BI'],
            categoria: 'automacao',
            github: '#',
            demo: '#',
            status: 'Concluído'
        },
        {
            id: 4,
            titulo: 'Portal da Transparência - Extração de Dados',
            descricao: 'Projeto para extração automatizada de dados do Portal da Transparência de Joinville usando técnicas de web scraping.',
            imagem: '/api/placeholder/400/250',
            tecnologias: ['Python', 'VBA', 'ETL', 'MySQL', 'Web Scraping'],
            categoria: 'automacao',
            github: '#',
            demo: '#',
            status: 'Concluído'
        },
        {
            id: 5,
            titulo: 'Sistema de Controle Financeiro',
            descricao: 'Sistema web para controle financeiro com automação integrada, desenvolvido para análise de custos e gestão financeira.',
            imagem: '/api/placeholder/400/250',
            tecnologias: ['VBA', 'MySQL', 'Excel', 'Automação Web'],
            categoria: 'financeiro',
            github: '#',
            demo: '#',
            status: 'Concluído'
        },
        {
            id: 6,
            titulo: 'Cursos de VBA Avançado',
            descricao: 'Ministrei cursos de VBA Avançado na UFPR e UFSC, treinando profissionais e acadêmicos em automação e desenvolvimento.',
            imagem: '/api/placeholder/400/250',
            tecnologias: ['VBA', 'Excel', 'Educação', 'Treinamento'],
            categoria: 'educacao',
            github: '#',
            demo: '#',
            status: 'Concluído'
        }
    ];

    const categorias = [
        { id: 'todos', nome: 'Todos' },
        { id: 'web', nome: 'Web Apps' },
        { id: 'automacao', nome: 'Automação' },
        { id: 'financeiro', nome: 'Financeiro' },
        { id: 'educacao', nome: 'Educação' }
    ];

    const projetosFiltrados = filtroAtivo === 'todos'
        ? projetos
        : projetos.filter(projeto => projeto.categoria === filtroAtivo);

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
                            mb: 4,
                            fontWeight: 'bold'
                        }}
                    >
                        Meu Portfólio
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            color: '#ffffff',
                            textAlign: 'center',
                            mb: 6,
                            opacity: 0.8
                        }}
                    >
                        Projetos desenvolvidos ao longo da minha carreira profissional
                    </Typography>

                    {/* Filtros */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, flexWrap: 'wrap', gap: 1 }}>
                        {categorias.map((categoria) => (
                            <Button
                                key={categoria.id}
                                variant={filtroAtivo === categoria.id ? "contained" : "outlined"}
                                onClick={() => setFiltroAtivo(categoria.id)}
                                sx={{
                                    color: filtroAtivo === categoria.id ? '#000000' : '#ffffff',
                                    borderColor: '#00ff88',
                                    backgroundColor: filtroAtivo === categoria.id ? '#00ff88' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: filtroAtivo === categoria.id ? '#00cc6a' : 'rgba(0, 255, 136, 0.1)',
                                        borderColor: '#00ff88'
                                    }
                                }}
                            >
                                {categoria.nome}
                            </Button>
                        ))}
                    </Box>

                    {/* Grid de Projetos */}
                    <Grid container spacing={4} sx={{ flexGrow: 1, justifyContent: 'center' }}>
                        {projetosFiltrados.map((projeto, index) => (
                            <Grid item xs={12} md={6} lg={4} key={projeto.id} sx={{ width: '80%' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card
                                        sx={{
                                            height: '100%',
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: '#ffffff',
                                            transition: 'transform 0.3s ease-in-out',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                border: '1px solid #00ff88'
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h6" component="h3" sx={{ color: '#ffffff' }}>
                                                {projeto.titulo}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    mb: 2,
                                                    lineHeight: 1.6
                                                }}
                                            >
                                                {projeto.descricao}
                                            </Typography>

                                            <Box sx={{ mb: 2 }}>
                                                <Chip
                                                    label={projeto.status}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: '#00ff88',
                                                        color: '#000000',
                                                        fontWeight: 'bold'
                                                    }}
                                                />
                                            </Box>

                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {projeto.tecnologias.map((tech, index) => (
                                                    <Chip
                                                        key={index}
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            color: '#ffffff',
                                                            fontSize: '0.75rem'
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </CardContent>

                                        <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                                            <IconButton
                                                href={projeto.demo}
                                                target="_blank"
                                                sx={{ color: '#00ff88' }}
                                            >
                                                <LaunchIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Portifolio;