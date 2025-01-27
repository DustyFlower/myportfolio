import styled from 'styled-components';
import {Content} from '../../../components/Content';
import GroupSkills from '../../../assets/images/GroupSkills.svg'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {theme} from '../../../styles/Theme';

const Skills = styled.section`
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

            @media screen and (max-width: 995px) {
                display: none;
            }
        }

        ${FlexWrapper} {
            @media screen and (max-width: 995px) {
                justify-content: center;
            }
        }
    }
}
`

const SkillsWrapper = styled(FlexWrapper)`
    height: 300px;
    max-width: 584px;
    width: 100%;

    @media screen and (max-width: 995px) {
        flex-direction: row;
        height: auto;
        width: auto;
        max-width: 100%;

        flex-wrap: wrap;
    }
`

const Skill = styled.div`
    border: ${theme.colors.fontText} 1px solid;
    width: 185px;
    border-spacing: 0;

    @media ${theme.media.mobile} {
        width: 100%;
    }
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

export const S = {
    Skills,
    SkillsWrapper,
    Skill,
    SkillsGroupName,
    SkillsCell,
    SkillUnit
}