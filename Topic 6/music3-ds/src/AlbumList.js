import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const AlbumList = (props) => {

    const handleSelectionOne = (albumId) => {
        console.log('Selected ID is ' + albumId);
        props.onClick(albumId, navigator);
    };

    console.log('props albumList', props);
    const navigator = useNavigate();
    const album = props.albumList.map((album) => {
        return (
            <Card
            key={album.id}
            albumId={album.id}
            albumTitle={album.title}
            albumDescription={album.Description}
            buttonText='OK'
            imgURL={album.image}
            onClick={handleSelectionOne}
            />

        );
    });
    return <div className='container'>{album}</div>;
};

export default AlbumList;