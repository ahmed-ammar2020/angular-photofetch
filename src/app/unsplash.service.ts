import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(
    private http: HttpClient
  ) { }

  getImage() {
    return this.http.get<UnsplashResponse>("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: "Client-ID 3urleFG0v7WzuO9lkKn8jAQZNmp0PokI6HmcwCwaK54"
      }
    }).pipe(
      pluck("urls", "regular"),
    );
  }
}
