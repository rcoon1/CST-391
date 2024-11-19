import React from "react";
import Card from "./Card";
import SearchForm from "./SearchForm";
import "./App.css";
import albums from "./albums.json";

class App extends React.Component
{
     state = { albumList: [ ], searchPhrase: ""}

     renderedList = () => {
          return this.state.albumList.map (
               (album) => {
                    if(album.description.toLowerCase().includes(this.state.searchPhrase.toLowerCase()) || this.state.searchPhrase === "")
                         return (<Card key={album.id} albumId={album.id} albumTitle={album.title} albumDescription={album.description} buttonText="OK" imgURL={album.image}/>);
                    else
                         console.log("Does not match " + this.state.searchPhrase);
               }
          )
     }

     componentDidMount()
     {
          this.setState( {albumList: albums} );
     }

     updateSearchResults = (phrase) =>
     {
          console.log("phrase is " + phrase);
          this.setState( {searchPhrase: phrase});
     }

     render()
     {
          return (
               <div>
                    <div className="container">
                         <SearchForm onSubmit={this.updateSearchResults} />
                    </div>
                    <div className="container">
                         { this.renderedList() }
                    </div> 
               </div>)
     }
}

export default App;