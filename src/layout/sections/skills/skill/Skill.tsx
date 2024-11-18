import React, {FC} from 'react';
import styled from 'styled-components';

type SkillPropsType = {
    skillGroupName: string;
    skillUnit?: string;
}

export const Skill: FC<SkillPropsType> = ({skillGroupName, skillUnit}) => {
    return (
        <StyledSkill>
            <SkillTable>
                <td><SkillsGroupName>{skillGroupName}</SkillsGroupName></td>
            </SkillTable>
            <SkillTable>
                <td>
                    <SkillUnit>{skillUnit}</SkillUnit>
                </td>
            </SkillTable>
        </StyledSkill>
    );
};

const StyledSkill = styled.table`
    width: 25%;
    background-color: rgba(255, 255, 255, 0.56);
    margin: 10px;
`
const SkillTable = styled.tr`
td {
    border: black solid 1px;
}`

const SkillsGroupName = styled.h3`
font-weight: bold;
`
const SkillUnit = styled.span`
font-weight: normal;
`