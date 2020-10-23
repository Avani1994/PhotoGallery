import React from "react"

export default class Slot extends React.Component {

    render() {
        const image = this.props.image
        return (
            <div style={{ background: `url(${image.url})`, width: '100%', height: '400px', position: "absolute" }} alt={image.caption}></div>
        )
    }
}