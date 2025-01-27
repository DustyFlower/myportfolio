import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Content} from '../../../components/Content';
import {theme} from '../../../styles/Theme';
import {Button} from '../../../components/Button';

const ProjectsWrapper = styled(FlexWrapper)`
    align-content: center;
    gap: 15px;
`

const Projects = styled.section`
    position: relative;

    ${Content} {
        position: relative;

        &::after {
            content: '';
            display: inline-block;
            width: 155px;
            height: 155px;
            border: 1px solid ${theme.colors.fontText};
            z-index: 1;

            position: absolute;
            right: 0;
            transform: translateX(190%) translateY(-160%);
        }
    }
    
`

const ProjectsLink = styled.a`;
    font-weight: 500;
    color: ${theme.colors.fontTitle};
    transition: all 0.2s;

    &:hover {
        font-weight: 600;
        text-shadow: 0 0 2px rgb(199, 120, 221);
    }
`

const Project = styled.article`
    width: 330px;
    border: ${theme.colors.fontText} solid 1px;
    overflow: hidden;
`

const ImageWrapper = styled.div`
    border-bottom: ${theme.colors.fontText} solid 1px;
`

const Image = styled.img`
    display: block;
    width: 328px;
    height: 201px;
    object-fit: cover;
`

const ProjectInfo = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    ${Button} {
        text-align: center;
        align-content: center;
    }
`

const Stack = styled.div`
    padding: 8px;

    border-bottom: ${theme.colors.fontText} solid 1px;

    tbody tr:last-child & {
        border-bottom: none;
    }

    font-weight: 400;
    line-height: 1.3rem;
`

const NameOfProject = styled.h3`
    font-weight: 500;
    font-size: 1.5rem;
    color: ${theme.colors.fontTitle};
    line-height: 2rem;
`

const DescriptionOfProject = styled.p`

`

export const S = {
    ProjectsWrapper,
    Projects,
    ProjectsLink,
    Project,
    ImageWrapper,
    Image,
    ProjectInfo,
    Stack,
    NameOfProject,
    DescriptionOfProject
}