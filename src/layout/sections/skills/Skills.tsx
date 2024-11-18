import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from '../../../components/icon/Icon';
import {Skill} from './skill/Skill';

const Skills = () => {
    return (
        <StyledSkills>
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
                    <Skill skillGroupName={'Languages'} skillUnit={'JavaScript'}/>
                    <Skill skillGroupName={'Databases'} skillUnit={'SQLite'}/>
                    <Skill skillGroupName={'Tools'} skillUnit={'WebStorm'}/>
                    <Skill skillGroupName={'Other'} skillUnit={'HTML5'}/>
                    <Skill skillGroupName={'Frameworks'} skillUnit={'React'}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSkills>
    );
};

export default Skills;

const StyledSkills = styled.section`
    background-color: #ffe5e4;
    min-height: 100vh;
`