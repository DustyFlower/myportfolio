import React, {FC} from 'react';
import {Button} from '../../../../components/Button';
import {S} from '../Projects_Styles'

type ProjectPropsType = {
    nameOfProject: string;
    src: string
    stack: string[]
    description: string
}

export const Project: FC<ProjectPropsType> = ({nameOfProject, src, stack, description}) => {
    return (
        <S.Project>
                <S.ImageWrapper>
                    <S.Image src={src} alt=""/>
                </S.ImageWrapper>
                <S.Stack>{stack.join(' ')}</S.Stack>
                <S.ProjectInfo>
                    <S.NameOfProject>
                        {nameOfProject}
                    </S.NameOfProject>
                    <S.DescriptionOfProject>
                        {description}
                    </S.DescriptionOfProject>
                    <Button as={'a'} href={'#'}> Live &lt;~&gt; </Button>
                </S.ProjectInfo>
        </S.Project>
    );
};


