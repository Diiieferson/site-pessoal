import LaunchIcon from '@mui/icons-material/Launch';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Container,
    IconButton,
    Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
                        Meu Portfólio
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: '#cbd5e1',
                            textAlign: 'center',
                            mb: 8,
                            fontSize: '0.95rem'
                        }}
                    >
                        Projetos desenvolvidos ao longo da minha carreira profissional
                    </Typography>

                    {/* Filtros */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6, flexWrap: 'wrap', gap: 1 }}>
                        {categorias.map((categoria) => (
                            <Button
                                key={categoria.id}
                                variant={filtroAtivo === categoria.id ? "contained" : "outlined"}
                                onClick={() => setFiltroAtivo(categoria.id)}
                                sx={{
                                    color: filtroAtivo === categoria.id ? '#0f172a' : '#8b5cf6',
                                    borderColor: '#8b5cf6',
                                    backgroundColor: filtroAtivo === categoria.id ? '#8b5cf6' : 'transparent',
                                    fontSize: '0.85rem',
                                    py: 0.8,
                                    px: 2,
                                    '&:hover': {
                                        backgroundColor: filtroAtivo === categoria.id ? '#a78bfa' : 'rgba(139, 92, 246, 0.1)',
                                        borderColor: '#a78bfa'
                                    }
                                }}
                            >
                                {categoria.nome}
                            </Button>
                        ))}
                    </Box>

                    {/* Grid de Projetos */}
                    <Box
                        sx={{
                            display: 'grid',
                            gap: 3,
                            gridTemplateColumns: {
                                xs: '1fr',
                                md: 'repeat(2, minmax(0, 1fr))',
                                lg: 'repeat(3, minmax(0, 1fr))'
                            }
                        }}
                    >
                        {projetosFiltrados.map((projeto, index) => (
                            <Box key={projeto.id} sx={{ display: 'flex', minWidth: 0 }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    style={{ width: '100%', display: 'flex' }}
                                >
                                    <Card
                                        sx={{
                                            height: '100%',
                                            minHeight: { xs: 380, md: 430 },
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            backgroundColor: 'rgba(139, 92, 246, 0.05)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(139, 92, 246, 0.15)',
                                            color: '#e2e8f0',
                                            transition: 'all 0.3s ease-in-out',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                border: '1px solid rgba(139, 92, 246, 0.5)',
                                                boxShadow: '0 8px 24px rgba(139, 92, 246, 0.2)'
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                            <Typography gutterBottom variant="h6" component="h3" sx={{ color: '#ffffff', minHeight: 64 }}>
                                                {projeto.titulo}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    mb: 2,
                                                    lineHeight: 1.6,
                                                    minHeight: 104,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 4,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
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

                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, minHeight: 72, alignContent: 'flex-start', mt: 'auto' }}>
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

                                        <CardActions sx={{ justifyContent: 'space-between', p: 2, mt: 'auto' }}>
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
                            </Box>
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Portifolio;