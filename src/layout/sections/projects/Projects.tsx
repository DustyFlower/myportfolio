import React from 'react';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Project} from './project/Project';
import proj1 from '../../../assets/images/banner-1.png';
import proj2 from '../../../assets/images/banner-3.jpg';
import proj3 from '../../../assets/images/banner-2.jpg';
import {Container} from '../../../components/Container';
import {Content} from '../../../components/Content';
import {S} from './Projects_Styles';
import {Fade} from 'react-awesome-reveal';

const projects = [
    {
        name: 'ChertNodes',
        description: 'Minecraft servers hosting',
        src: proj1,
        stack: [
            'HTML', 'SCSS', 'Python', 'Flask'
        ]
    },
    {
        name: 'ProtectX',
        description: 'Discord anti-crash bot',
        src: proj2,
        stack: [
            'React', 'Express', 'Discord.js', 'Node.js', 'HTML', 'SCSS', 'Python', 'Flask'
        ]
    },
    {
        name: 'Kahoot Answers Viewer',
        description: 'Get answers to your kahoot quiz',
        src: proj3,
        stack: [
            'CSS', 'Express', 'Node.js'
        ]
    }/*,
    {
        name: 'Kotik Bot',
        description: 'Multi-functional discord bot',
        src: proj4,
        stack: [
            'HTML', 'CSS', 'JS'
        ]
    },
    {
        name: 'Portfolio',
        description: 'You’re using it rn',
        src: proj5,
        stack: [
            'Vue', 'TS', 'Less'
        ]
    },*/
]

export const Projects = () => {
    return (
        <S.Projects id={'works'}>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <SectionTitle maxWidthOfLine={511} widthOfLine={'32rem'} dynamicValue={'40vw'} noWidth={true}>projects&nbsp;</SectionTitle>
                    <S.ProjectsLink href={'#'}>View all ~~&gt;</S.ProjectsLink>
                </FlexWrapper>
                <Content top={'50px'} bottom={'100px'} mobileTop={'25px'} mobileBottom={'50px'}>
                    <S.ProjectsWrapper justify={'center'} align={'start'} wrap={'wrap'}>
                        <Fade cascade damping={0.2}>
                            {projects.map((project, index) => (
                                <Project key={index} nameOfProject={project.name} stack={project.stack}
                                         description={project.description} src={project.src}/>
                            ))}
                        </Fade>
                    </S.ProjectsWrapper>
                </Content>
            </Container>
        </S.Projects>
    );
};