import React from 'react';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Skill} from './skill/Skill';
import {Container} from '../../../components/Container';
import {Content} from '../../../components/Content';
import {S} from './Skills_Styles';
import {Fade} from 'react-awesome-reveal';

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

export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle widthOfLine={'15rem'} maxWidthOfLine={239}
                              dynamicValue={'45vw'}>skills&nbsp;</SectionTitle>
                <Content top={'45px'} bottom={'110px'} mobileTop={'25px'} mobileBottom={'50px'}>
                    <FlexWrapper justify={'flex-end'}>
                        <S.SkillsWrapper direction={'column'} wrap={'wrap-reverse'} align={'flex-start'} gap={'1rem'}
                                         content={'flex-start'}>
                            <Fade cascade
                            damping={0.1}
                            direction={'right'}>
                                {
                                    skills.map(skill => (
                                        <Skill skillGroupName={skill.groupName} skillUnit={skill.content}/>))
                                }
                            </Fade>
                        </S.SkillsWrapper>
                    </FlexWrapper>
                </Content>
            </Container>
        </S.Skills>
    );
};

