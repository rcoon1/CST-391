import { Component, Input } from '@angular/core';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css']
})
export class DisplayAlbumComponent {
  @Input() album: Album | null = null;

  ngOnInit() {
    console.log("Getting data ....");
    console.log("Tracks", this.album!.Tracks);
    this.album!.Tracks.forEach(element => console.log(element.Title))
  }


}