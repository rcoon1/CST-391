import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

const App = () => {
    return (
        <div>

            <h1>Music I like</h1>
            <Card
                albumTitle="Enema of the State"
                albumDescription="Enema of the State is the third studio album by American rock band Blink-182, released on June 1, 1999, by MCA Records."
                imgURL="https://upload.wikimedia.org/wikipedia/en/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg"
                buttonText="OK"
            />
            <Card
                albumTitle="Frail Words Collapse"
                albumDescription="Frail Words Collapse is the second studio album by American metalcore band As I Lay Dying. The album is their first release on the record label Metal Blade Records."
                imgURL="https://upload.wikimedia.org/wikipedia/en/d/df/Frail_Worlds_Collapse_cover_art.jpg"
                buttonText="OK"
            />
            <Card
                albumTitle="Full Collapse"
                albumDescription="Full Collapse is the second studio album by American post-hardcore band Thursday. It was released on April 10, 2001, through Victory Records, to whom the band signed after leaving Eyeball Records."
                imgURL="https://upload.wikimedia.org/wikipedia/en/2/23/Thursday%2BFull%2BCollapse.jpg"
                buttonText="OK"
            />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));