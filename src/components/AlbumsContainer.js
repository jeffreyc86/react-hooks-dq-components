import React from "react";
import AlbumsList from "./AlbumList"
import GenrePicker from "./GenrePicker"

function AlbumsContainer() {
  return <main>
    <GenrePicker />
    <AlbumsList />
    </main>;
}

export default AlbumsContainer;
