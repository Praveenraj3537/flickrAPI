import { FlickrPhoto } from "./flickr";

export interface FlickrPhotosOutput{
        photos:{
            page:number;
            pages:number;
            perpage:number;
            total:number;
            photo:FlickrPhoto[];
        } 
        // image: FlickrPhoto[]
    
}