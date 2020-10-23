import React from "react";
import PhotoGallery from './PhotoGallery';

export default class App extends React.Component {
  render() {
    const images = [
      {
        url:
          "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1691&q=80",
        caption: "Peaceful mountains",
      },
      {
        url:
          "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        caption: "Golden Gate Bridge",
      },
      {
        url:
          "https://images.unsplash.com/photo-1524946274118-e7680e33ccc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        caption: "Playful Beach",
      },
      {
        url:
          "https://images.unsplash.com/photo-1479030160180-b1860951d696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        caption: "Solid Rocks",
      },
    ];
    return (
      <div>
        <PhotoGallery images={images} />
      </div>
    );
  }
}