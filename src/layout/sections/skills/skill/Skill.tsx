import React, {FC} from 'react';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';

type SkillPropsType = {
    skillGroupName: string
    skillUnit: string[]
}

export const Skill: FC<SkillPropsType> = ({skillGroupName, skillUnit}) => {
    return (
        <StyledSkill>
            <SkillsHead>
                <SkillsTitle>
                    <SkillsGroupName>{skillGroupName}</SkillsGroupName>
                </SkillsTitle>
            </SkillsHead>
            <tbody>
            <SkillsList>
                <SkillsCell>
                    <SkillUnit>{skillUnit.join(' ')}</SkillUnit>
                </SkillsCell>
            </SkillsList>
            </tbody>
        </StyledSkill>
    );
};

const StyledSkill = styled.table`
    border: ${theme.colors.fontText} 1px solid;
    width: 28%;
    border-spacing: 0;
`
const SkillsHead = styled.thead`
    
`
const SkillsTitle = styled.tr`
    
`

const SkillsGroupName = styled.th`
    border-bottom: ${theme.colors.fontText} 1px solid;
    
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.3rem;
    color: ${theme.colors.fontTitle};
    
    text-align: left;
    padding: 0.5rem;
`

const SkillsList = styled.tr`
`

const SkillsCell = styled.td`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3rem;
    padding: 0.5rem;
`

const SkillUnit = styled.span`

`