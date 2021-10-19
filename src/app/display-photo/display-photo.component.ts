import { Component, OnInit } from '@angular/core';
import { UnsplashService } from './../unsplash.service';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})
export class DisplayPhotoComponent implements OnInit {


  ngOnInit(): void {
  }

  imgSrc = '';

  constructor(private unsplash: UnsplashService) {
    this.getImage();
  }

  getImage() {
    this.unsplash.getImage().subscribe((imguRL) => {
      this.imgSrc = imguRL;
    });
  }

}
