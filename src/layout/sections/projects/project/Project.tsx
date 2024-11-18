import React, {FC} from 'react';
import styled from 'styled-components';

type ProjectPropsType = {
    nameOfProject: string;
    src: string
    stack: string[]
    description: string
}

export const Project: FC<ProjectPropsType> = ({nameOfProject,src, stack, description}) => {
    return (
        <StyledProject>
            <StyledTableProject>
                <td><Image src={src} alt=""/></td>
            </StyledTableProject>
            <StyledTableProject>
                <td>{stack.join(' ')}</td>
            </StyledTableProject>
            <StyledTableProject>
                <td>
                    {nameOfProject} <br/>
                    {description} <br/>
                    <Link> Live &lt;~&gt; </Link>
                </td>
            </StyledTableProject>
        </StyledProject>
    );
};


const StyledProject = styled.table`

`

const StyledTableProject = styled.tr`
    td {
        border: black solid 1px;
    }
`

const Link = styled.a`

`

const Image = styled.img`
    width: 331px;
    height: 201px;
    object-fit: cover;
`