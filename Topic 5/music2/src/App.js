import React, { useState } from "react";
import Card from './Card';
import './App.css';

const App = () => {
    const [albumList, setAlbumList] = useState([
        {
            artistId: 0,
            artist: 'Blink 182',
            title: 'Enema of the State',
            description: "Enema of the State is the third studio album by American rock band Blink-182, released on June 1, 1999, by MCA Records.",
            year: 1999,
            image: "https://upload.wikimedia.org/wikipedia/en/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg"
        },
        {
            artistId: 1,
            artist: 'As I Lay Dying',
            title: 'Frail Words Collapse',
            description: "Frail Words Collapse is the second studio album by American metalcore band As I Lay Dying. The album is their first release on the record label Metal Blade Records.",
            year: 2003,
            image: "https://upload.wikimedia.org/wikipedia/en/d/df/Frail_Worlds_Collapse_cover_art.jpg"
        },

            
        {
            artistId: 2,
            artist: 'Thursday',
            title: 'Full Collapse',
            description: "Full Collapse is the second studio album by American post-hardcore band Thursday. It was released on April 10, 2001, through Victory Records, to whom the band signed after leaving Eyeball Records.",
            year: 2001,
            image: "https://upload.wikimedia.org/wikipedia/en/2/23/Thursday%2BFull%2BCollapse.jpg"
        },
    ]);


    const renderedList = () => {
        return albumList.map((album) => {
            return (
                <Card
                    albumTitle={album.title}
                    albumDescription={album.description}
                    buttonText='OK'
                    imgURL={album.image}
                />
            );
        });
    };
    return <div className="container">{renderedList()}</div>;
};

export default App;