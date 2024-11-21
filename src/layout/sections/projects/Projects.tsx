import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Project} from './project/Project';
import proj1 from '../../../assets/images/banner-1.png';
import proj2 from '../../../assets/images/banner-3.jpg';
import proj3 from '../../../assets/images/banner-2.jpg';
import proj4 from '../../../assets/images/banner-4.jpg';
import proj5 from '../../../assets/images/banner-5.png';
import {Button} from '../../../components/Button';

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
    },
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
    },
]

export const Projects = () => {
    return (
        <StyledProjects>
            <FlexWrapper justify={'space-between'}>
                <SectionTitle>#projects</SectionTitle>
                <Button>View all ~~&gt; </Button>
            </FlexWrapper>
            <FlexWrapper direction={'row'} align={'center'} wrap={'wrap'}>
                {projects.map((project, index) => (
                    <Project key={index} nameOfProject={project.name} stack={project.stack} description={project.description} src={project.src}/>
                ))}
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #deefff;
`