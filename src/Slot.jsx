import React from "react"
import styled from "styled-components";

const Image = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${(props) => props.background};
    padding: 10px;
    background-size: cover
`

export default class Slot extends React.Component {

    render() {
        const image = this.props.image;
        return (
            <Image background={`url(${image.url})`} alt={image.caption}>
                {this.props.children}
            </Image>
        )
    }
}