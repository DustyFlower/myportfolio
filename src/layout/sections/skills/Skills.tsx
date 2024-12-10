import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from '../../../components/icon/Icon';
import {Skill} from './skill/Skill';
import {Container} from '../../../components/Container';

const skills = [
    {
        groupName: 'Languages',
        content: ['TypeScript', 'Lua', 'Python', 'JavaScript'],
    },
    {
        groupName: 'Databases',
        content: ['SQLite', 'PostgreSQL', 'Mongo'],
    },
    {
        groupName: 'Tools',
        content: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome'],
    },
    {
        groupName: 'Other',
        content: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja'],
    },
    {
        groupName: 'Frameworks',
        content: ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js'],
    },
]

const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>#skills</SectionTitle>
                <FlexWrapper justify={'space-between'}>
                    <FlexWrapper wrap={'wrap'}>
                        <Icon iconId={'dots'} width={'63px'} height={'63px'}/>
                        <Icon iconId={'dots'} width={'63px'} height={'63px'}/>
                        <Icon iconId={'square'} width={'86px'} height={'86px'}/>
                        <Icon iconId={'square'} width={'52px'} height={'52px'}/>
                        <Icon iconId={'logo-outline'} width={'113px'} height={'113px'}/>
                    </FlexWrapper>
                    <FlexWrapper wrap={'wrap'}>
                        {
                            skills.map(skill => (<Skill skillGroupName={skill.groupName} skillUnit={skill.content}/>))
                        }
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

export default Skills;

const StyledSkills = styled.section`
    background-color: #ffe5e4;
    min-height: 100vh;
`