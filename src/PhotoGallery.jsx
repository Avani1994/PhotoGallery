import React from "react";
import Slot from "./Slot";
import { styled } from "./stitches.config";

const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    height: "300px",
    width: "400px"
})
const Caption = styled("div", {
    fontSize: "1em",
    color: "white",
    fontWeight: 500,
    textAlign: "center",
    padding: "5px",
    zIndex: 1,
    marginBottom: "10px",
    background: "rgba(0,0,0,0.2)",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "5px",
    lineHeight: "1",
})

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
            <Container onClick={this.handleNext}>
                <Slot image={current} />
                <Caption>
                    {current.caption}
                </Caption>
            </Container>
        )
    }
}

export default PhotoGallery;