import React from "react";
import { LeftArrow } from "@styled-icons/boxicons-regular/LeftArrow";
import { RightArrow } from "@styled-icons/boxicons-regular/RightArrow";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: 30px;
    padding: 5px;
    background: rgb(0,0,0,0.2);
    border-radius: 20px;
    color: white;
    opacity: ${(props) => props.disabled ? 0.5 : 1};
    &:hover {
        box-shadow: 0 10px 25px rgba(0, 0, 0, ${props => props.disabled ? 0 : 0.3});
        background-color: rgba(0,0,0, ${props => props.disabled ? 0.2 : 0.4});
      }; 
`

export class Next extends React.Component {

    render() {
        const onClick = this.props.onClick;
        const disabled = this.props.disabled;
        return (
            <Container onClick={onClick} disabled={disabled}>
                <RightArrow />
            </Container>
        );
    }
}

export class Prev extends React.Component {
    render() {
        const onClick = this.props.onClick;
        const disabled = this.props.disabled;
        return (
            <Container onClick={onClick} disabled={disabled}>
                <LeftArrow />
            </Container>
        );
    }
}