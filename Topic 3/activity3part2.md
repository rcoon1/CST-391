Activity 3: Part 2

Ryan Coon

CST-391

Professor Bobby Estey

July 16, 2023

**Screenshots:**

![Alt text](<Screenshot 2023-07-16 at 4.35.19 PM.png>)

Here you can see the initial application page running.

![Alt text](<Screenshot 2023-07-16 at 4.35.42 PM.png>)

Here is the GCU Homepage actively clicked from a button within the application.

![Alt text](<Screenshot 2023-07-16 at 4.36.04 PM.png>)

Here is the create album form.

![Alt text](<Screenshot 2023-07-16 at 4.51.35 PM.png>)

Here is information inputted into the create album form.

![Alt text](<Screenshot 2023-07-16 at 4.51.49 PM.png>)

Here is the result of creating a new album and submitting the form.

![Alt text](<Screenshot 2023-07-16 at 4.52.03 PM.png>)

Here is the result of clicking on the about button showing a pop up box with the version number.

**Research:**

import { Injectable } from'@angular/core';

importexampledatafrom'../../data/sample-music-data.json';

import { Artist } from'../models/artists.model';

import { Album } from'../models/albums.model';

import { Track } from'../models/tracks.model';

//set injectable to get to all services in project

@Injectable({ providedIn:'root' })

exportclassMusicServiceService {

privatereadonlyartists: Artist[] = [];

privatereadonlyalbums: Album[] = [];

constructor() {

this.createArtists();

this.createAlbums();

}

//create artists constructor, shows The Beatles in list as default

privatecreateArtists(): void {

this.artists.push(newArtist(0, 'The Beatles'));

}

//create albums constructor, will show beatles list as default

privatecreateAlbums(): void {

exampledata.forEach((data: any) =\> {

if (data.artist === 'The Beatles') {

consttracks = data.tracks.map((trackData: any) =\>newTrack(trackData.id, trackData.number, trackData.title, trackData.lyrics, trackData.video));

constalbum = newAlbum(data.id, data.title, data.artist, data.description, data.year, data.image, tracks);

this.albums.push(album);

}

});

}

//will get artists from data set and return them to the view in a list

publicgetArtists(): Artist[] {

returnthis.artists;

}

//will get the albums in dataset, and return them to the view in a list

publicgetAlbums(artist: string): Album[] {

returnthis.albums;

}

//will get albums that were searched for and return them to the view in a list

publicgetAlbum(artist: string, id: number): Album | undefined {

constalbum = this.albums.find((a) =\>a.Artist === artist && a.Id === id);

if (album) {

consttracks = album.Tracks.map((track) =\>newTrack(track.Id, track.Number, track.Title, track.Lyrics, track.Video));

returnnewAlbum(album.Id, album.Title, album.Artist, album.Description, album.Year, album.Image, tracks);

}

returnundefined;

}

//this is where we create a new album and push it into the data set

publiccreateAlbum(album: Album): void {

this.albums.push(album);

}

//here we update albums within the data set

publicupdateAlbum(album: Album): void {

constindex = this.albums.findIndex((a) =\>a.Id === album.Id);

if (index !== -1) {

this.albums.splice(index, 1, album);

}

}

//constructor to delete an album from within the data set

publicdeleteAlbum(id: number, artist: string): void {

constindex = this.albums.findIndex((a) =\>a.Id === id);

if (index !== -1) {

this.albums.splice(index, 1);

}

}

}