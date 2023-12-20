import { ReactNode } from "react";
import styled from "styled-components";

interface ContainerCardProps {
    children: ReactNode;
}

const Container = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
`


const ContainerCard = ({ children }: ContainerCardProps) => {
    return(
        <Container>
            { children }
        </Container>
    )
}

export default ContainerCard;