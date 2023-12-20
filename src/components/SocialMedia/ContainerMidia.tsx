import { styled } from 'styled-components';
import { ReactNode } from 'react';

interface ContainerMidiaProps {
    children: ReactNode;
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
`

const ContainerMidia = ({ children }: ContainerMidiaProps) => {

    return(
        <Container >   
            { children }
        </Container>
    )
    
}

export default ContainerMidia;