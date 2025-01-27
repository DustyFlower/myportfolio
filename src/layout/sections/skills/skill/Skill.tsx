import React, {FC} from 'react';
import {S} from '../Skills_Styles'

type SkillPropsType = {
    skillGroupName: string
    skillUnit: string[]
}

export const Skill: FC<SkillPropsType> = ({skillGroupName, skillUnit}) => {
    return (
        <S.Skill>
            <S.SkillsGroupName>{skillGroupName}</S.SkillsGroupName>
            <S.SkillsCell>
                <S.SkillUnit>{skillUnit.join(' ')}</S.SkillUnit>
            </S.SkillsCell>
        </S.Skill>
    );
};

