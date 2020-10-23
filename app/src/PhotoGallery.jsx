import React from "react";
import Slot from "./Slot";


export default class PhotoGallery extends React.Component {
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
            <div onClick={this.handleNext}>
                <div>
                    {current.caption}
                </div>
                <Slot image={current} />
            </div>
        )
    }
}