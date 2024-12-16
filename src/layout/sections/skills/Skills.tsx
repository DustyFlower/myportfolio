import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Skill} from './skill/Skill';
import {Container} from '../../../components/Container';
import {Content} from '../../../components/Content';
import GroupSkills from '../../../assets/images/GroupSkills.svg'

const skills = [
    {
        groupName: 'Tools',
        content: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome'],
    },
    {
        groupName: 'Frameworks',
        content: ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js'],
    },
    {
        groupName: 'Databases',
        content: ['SQLite', 'PostgreSQL', 'Mongo'],
    },
    {
        groupName: 'Other',
        content: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja'],
    },
    {
        groupName: 'Languages',
        content: ['TypeScript', 'Lua', 'Python', 'JavaScript'],
    }
]

const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle widthOfLine={'15rem'}>skills&nbsp;</SectionTitle>
                <Content top={'45px'} bottom={'110px'}>
                    <FlexWrapper justify={'flex-end'}>
                        <SkillsWrapper>
                            <FlexWrapper direction={'column'} wrap={'wrap-reverse'} align={'flex-start'} gap={'1rem'} content={'flex-start'}>
                                {
                                    skills.map(skill => (<Skill skillGroupName={skill.groupName} skillUnit={skill.content}/>))
                                }
                            </FlexWrapper>
                        </SkillsWrapper>
                    </FlexWrapper>
                </Content>
            </Container>
        </StyledSkills>
    );
};

export default Skills;

const StyledSkills = styled.section`
    ${Content} {
        position: relative;
        
        &::before {
            content: '';
            display: inline-block;
            width: 349px;
            height: 282px;
            background-image: url(${GroupSkills});
            background-size: contain;
            background-repeat: no-repeat;

            position: absolute;
            left: 35px;
            top: 20px;
        }
    }
`

const SkillsWrapper = styled.div`
    height: 300px;
    width: 584px;
    
    ${FlexWrapper} {
        height: 100%;
        width: 100%;
    }
`