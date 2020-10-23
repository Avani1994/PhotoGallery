import React from "react"

export default class Slot extends React.Component {

    render() {
        const image = this.props.image
        return (
            <div>
                <div style={{ background: `url(${image.url})`, width: '100%', height: '400px' }} alt={image.caption}></div>
            </div>
        )
    }
}