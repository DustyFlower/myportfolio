import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Project} from './project/Project';
import proj1 from '../../../assets/images/banner-1.png';
import proj2 from '../../../assets/images/banner-3.jpg';
import proj3 from '../../../assets/images/banner-2.jpg';
import {Container} from '../../../components/Container';
import {theme} from '../../../styles/Theme';
import {Content} from '../../../components/Content';

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
        <StyledProjects>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <SectionTitle widthOfLine={'32rem'}>projects&nbsp;</SectionTitle>
                    <ProjectsLink href={'#'}>View all ~~&gt;</ProjectsLink>
                </FlexWrapper>
                <Content top={'50px'} bottom={'100px'}>
                    <FlexWrapper justify={'space-between'} align={'start'} wrap={'wrap'}>
                        {projects.map((project, index) => (
                            <Project key={index} nameOfProject={project.name} stack={project.stack}
                                     description={project.description} src={project.src}/>
                        ))}
                    </FlexWrapper>
                </Content>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    position: relative;


    ${Content} {
        position: relative;

        &::after {
            content: '';
            display: inline-block;
            width: 155px;
            height: 155px;
            border: 1px solid ${theme.colors.fontText};
            z-index: 1;

            position: absolute;
            right: 0;
            transform: translateX(190%) translateY(-160%);
        }
    }
`

const ProjectsLink = styled.a`;
    font-weight: 500;
    color: ${theme.colors.fontTitle};
    transition: all 0.2s;

    &:hover {
        font-weight: 600;
        /*transform: scale(1.1);*/
        text-shadow: 0 0 2px rgb(199, 120, 221);
    }
`