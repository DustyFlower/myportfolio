import React, {FC} from 'react';
import styled from 'styled-components';
import {Button} from '../../../../components/Button';
import {theme} from '../../../../styles/Theme';

type ProjectPropsType = {
    nameOfProject: string;
    src: string
    stack: string[]
    description: string
}

export const Project: FC<ProjectPropsType> = ({nameOfProject, src, stack, description}) => {
    return (
        <StyledProject>
                <ImageWrapper>
                    <Image src={src} alt=""/>
                </ImageWrapper>
                <Stack>{stack.join(' ')}</Stack>
                <ProjectInfo>
                    <NameOfProject>
                        {nameOfProject}
                    </NameOfProject>
                    <DescriptionOfProject>
                        {description}
                    </DescriptionOfProject>
                    <Button as={'a'} href={'#'}> Live &lt;~&gt; </Button>
                </ProjectInfo>
        </StyledProject>
    );
};


const StyledProject = styled.article`
    width: 333px;
    /*    table-layout: fixed;*/
    border: ${theme.colors.fontText} solid 1px;
    /*    border-spacing: 0;*/
    overflow: hidden;
`

const ImageWrapper = styled.div`
    border-bottom: ${theme.colors.fontText} solid 1px;
`

const Image = styled.img`
    display: block;
    width: 331px;
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