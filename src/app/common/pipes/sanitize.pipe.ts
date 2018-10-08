import { ImageRequestorService } from './../services/image-requestor.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(public _imageRequestorService: ImageRequestorService) {

  }

  transform(value: any, forCss: boolean) {
    if ( forCss ) {
      return this._imageRequestorService.sanitizeStyle( value );
    } else {
      return this._imageRequestorService.sanitizeUrl( value );
    }
  }

}
