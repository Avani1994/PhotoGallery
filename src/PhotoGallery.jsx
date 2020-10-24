import React from "react";
import Slot from "./Slot";
import { Next, Prev } from "./Arrows";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    height: 300px;
    width: 400px;
    box-sizing: border-box;
`
const Caption = styled.div`
    font-size: 1em;
    color: white;
    font-weight: 500;
    text-align: center;
    padding: 5px;
    z-index: 1;
    margin-bottom: 10px;
    background: rgba(0,0,0,0.2);
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    line-height: 1;
`

class PhotoGallery extends React.Component {
    constructor() {
        super();
        this.state = { selected: 0 };
    }
    handleNext = () => {
        if (this.state.selected === this.props.images.length - 1) {
            return
        }
        this.setState((prevState) => ({ selected: prevState.selected + 1 }))
    }
    handlePrev = () => {
        if (this.state.selected === 0) {
            return
        }
        this.setState((prevState) => ({ selected: prevState.selected - 1 }))
    }

    render() {
        const images = this.props.images;
        const selected = this.state.selected;
        const current = images[selected];

        return (
            <Container>
                <Slot image={current}>
                    <Prev onClick={this.handlePrev} disabled={selected===0} />
                    <Next onClick={this.handleNext} disabled={selected===images.length-1} />
                </Slot>
                <Caption>
                    {current.caption}
                </Caption>
            </Container>
        )
    }
}

export default PhotoGallery;