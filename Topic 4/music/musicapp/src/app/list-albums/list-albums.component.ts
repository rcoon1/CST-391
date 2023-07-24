import { Component, Input, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';
import { Album } from './../models/albums.model';

@Component({
	selector: 'app-list-albums',
	templateUrl: './list-albums.component.html',
	styleUrls: ['./list-albums.component.css']
  })
  export class ListAlbumsComponent {
	@Input() artist: Artist | null = null;
	albums: Album[] = [];
	selectedAlbum: Album | null = null;
	constructor(private service: MusicServiceService) { }
  
  
	ngOnInit() {
	  console.log("Getting data...");
	  //his.albums = this.service.getAlbums(this.artist.Name);
	  this.service.getAlbums(String(this.artist?.Name), (albums: Album[]) => {
		this.albums = albums;
		console.log('this.albums', this.albums);
  
	  });
	}
	// ngOnInit() {
	//   if (this.artist) {
	//     this.albums = this.service.getAlbums(this.artist.Name);
	//   }
	// }
  
	public onSelectAlbum(album: Album) {
	  this.selectedAlbum = album;
	}
  
  }

