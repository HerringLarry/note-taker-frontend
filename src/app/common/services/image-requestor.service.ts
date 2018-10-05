import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageRequestorService {

  static API_ENDPOINT: string = 'http://localhost:3000';


  constructor( private _http: HttpClient, private sanitizer: DomSanitizer ) { }

  getImageAndSanitize( imageUrl: string, setImageToShow: any ) {
    this.getImage(imageUrl).subscribe(data => {
      this.createImageFromBlob(data, setImageToShow);
    }, error => {
      console.log(error);
    });
  }

  createImageFromBlob(image: Blob, setImageToShow: any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
       setImageToShow(this.sanitizer.bypassSecurityTrustUrl(reader.result));
    }, false);
    if (image) {
       reader.readAsDataURL(image);
  }
}

  getImage( imageUrl: string ): Observable<any> {
    return this._http.get(ImageRequestorService.API_ENDPOINT + '/' + imageUrl, { responseType: 'blob' });
  }


}
