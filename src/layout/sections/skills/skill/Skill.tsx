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
            <SkillsGroupName>{skillGroupName}</SkillsGroupName>
            <SkillsCell>
                <SkillUnit>{skillUnit.join(' ')}</SkillUnit>
            </SkillsCell>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    border: ${theme.colors.fontText} 1px solid;
    width: 185px;
    border-spacing: 0;
`

const SkillsGroupName = styled.div`
    border-bottom: ${theme.colors.fontText} 1px solid;

    font-weight: 600;
    font-size: 1rem;
    line-height: 1.3rem;
    color: ${theme.colors.fontTitle};

    text-align: left;
    padding: 0.5rem;
`

const SkillsCell = styled.div`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3rem;
    padding: 0.5rem;
`

const SkillUnit = styled.span`

`