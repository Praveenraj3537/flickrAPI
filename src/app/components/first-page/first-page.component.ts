import { Component, OnInit, Output } from '@angular/core';
import { FlickrService } from 'src/app/services/flickr-service.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  // @Output() images:any[] = [];
  @Output() rating:number = 0;
  

  images: any[] = [];
  description:string[] = [];
  keyword: string = '';
  title:string[] = [];

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
  }

  search(event: any) {
    this.keyword = event.target.value;
    if (this.keyword) {
      this.keyword = 'food';
      // this.flickrService.search_image(this.keyword).toPromise().then(res => {this.images = res; });

      this.flickrService.search_image(this.keyword).subscribe((e)=>{this.images = e})
      // this.flickrService.search_image(this.keyword).subscribe((e)=>{this.title = e})
      // this.flickrService.search_image(this.keyword).subscribe((e)=>{this.description = e})
      // this.flickrService.search_image(this.keyword).toPromise().then(res => {this.title = res; });
    }else{
      console.log('Inside else');
      
    }
  }

  secondComponent(){
    
  }

}
