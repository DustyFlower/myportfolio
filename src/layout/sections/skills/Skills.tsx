import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Skill} from './skill/Skill';
import {Container} from '../../../components/Container';
import {Content} from '../../../components/Content';
import LogoOutline from '../../../assets/images/Logo.svg'
import Dots from '../../../assets/images/Dots.svg'
import {theme} from '../../../styles/Theme';

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
                <SectionTitle widthOfLine={'15rem'}>skills&nbsp;</SectionTitle>
                <Content top={'45px'} bottom={'110px'}>
                    <FlexWrapper>
                        <IconBox1></IconBox1>
                        <IconBox2></IconBox2>
                        <IconBox3></IconBox3>
                        <FlexWrapper wrap={'wrap'} align={'start'} justify={'flex-end'} gap={'1rem'} style={{alignContent: 'flex-start'}}>
                            {
                                skills.map(skill => (<Skill skillGroupName={skill.groupName} skillUnit={skill.content}/>))
                            }
                        </FlexWrapper>
                    </FlexWrapper>
                </Content>
            </Container>
        </StyledSkills>
    );
};

export default Skills;

const StyledSkills = styled.section`
    
`

const IconBox1 = styled.div`
    width: 100%;
/*    border: 1px solid deeppink;*/
    flex-basis: 100%;
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        width: 113px;
        height: 113px;
        background-image: url(${LogoOutline});
        background-size: contain;
        background-repeat: no-repeat;

        position: absolute;
        left: 43px;
        top: 145px

    }

    &::after {
        content: '';
        display: inline-block;
        width: 63px;
        height: 63px;
        background-image: url(${Dots});
        background-size: contain;
        background-repeat: no-repeat;

        position: absolute;
        top: 15px;
        left: 25px;
    }
`

const IconBox2 = styled.div`
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        width: 86px;
        height: 86px;
        border: 1px solid ${theme.colors.fontText};

        position: absolute;
        top: -30px;
        right: 10px;
    }

    &::after {
        content: '';
        display: inline-block;
        width: 63px;
        height: 63px;
        background-image: url(${Dots});
        background-size: contain;
        background-repeat: no-repeat;

        position: absolute;
        top: 120px;
        left: -145px;
    }
`

const IconBox3 = styled.div`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 52px;
        height: 52px;
        border: 1px solid ${theme.colors.fontText};

        position: absolute;
        right: -20px;
        bottom: 55px;
    }
`