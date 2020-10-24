import React from "react";
import PropTypes from 'prop-types';

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
        this.state = { selected: 0, x: -1 };
    }
    handleSwipeStart = (e) => {
        const clientX = e?.changedTouches?.[0].clientX ?? e.clientX;
        if (this.state.x > 0) {
            return;
        }
        this.setState({ x: clientX })
    }
    handleSwipeEnd = (e) => {
        const clientX = e?.changedTouches?.[0].clientX ?? e.clientX;
        const diff = clientX - this.state.x;

        if (Math.abs(diff) > 100) {
            if (diff > 0) {
                this.handlePrev()
            } else {
                this.handleNext()
            }
        }
        this.setState({ x: -1 })
    }
    handleNext = () => {
        const length = this.props.images?.length ?? 0;
        if (this.state.selected >= length - 1) {
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
        const current = images?.[selected] ?? {};
        const length = images?.length ?? 0;

        return (
            <Container onMouseDown={this.handleSwipeStart} onMouseUp={this.handleSwipeEnd} onTouchStart={this.handleSwipeStart} onTouchEnd={this.handleSwipeEnd}>
                <Slot image={current}>
                    <Prev onClick={this.handlePrev} disabled={selected === 0} />
                    <Next onClick={this.handleNext} disabled={selected >= length - 1} />
                </Slot>
                { !!current.caption && <Caption>
                    {current.caption}
                </Caption>}
            </Container>
        )
    }
}
PhotoGallery.defaultProps = {
    images: []
};

PhotoGallery.propTypes = {
    images: PropTypes.array
};
export default PhotoGallery;