import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FlickrPhotosOutput } from '../flickrPhotos';
import { FlickrPhoto } from '../flickr';



@Injectable({
  providedIn: 'root'
})

export class FlickrService {
  currentPage = 1;

  constructor(private http: HttpClient) { }

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('content-type', 'application/image')
  .set('Access-Control-Allow-Origin', '*');

  // https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg
  // keyword = 'food';
  sorting = "date-posted-desc";
  extras = "description";
  owner = "owner_name";
  qty = "all";
  search_image(keyword:string){
    keyword = 'masala dosa';
    const url = `${environment.flickrSearchURL}`;
    const params = `api_key=${environment.flickr_key.key}&text=${keyword}&tag=${keyword}&tag_mode=${this.qty}&extras=${this.extras}&format=json&nojsoncallback=1&per_page=30`;

   const result =  this.http.get<FlickrPhotosOutput>(url+params).pipe(map((res: FlickrPhotosOutput) => {
      const arrayUrl: any[] = [];
      res.photos.photo.forEach((singlePhoto: FlickrPhoto) => {
        console.log('inside object');
        const photoObj = {
          url: `https://live.staticflickr.com/${singlePhoto.server}/${singlePhoto.id}_${singlePhoto.secret}`,
          title: singlePhoto.title,
          description: singlePhoto.description
        };
        arrayUrl.push(photoObj);
      });
      return arrayUrl;
    }));
    return  result;
  }
}
