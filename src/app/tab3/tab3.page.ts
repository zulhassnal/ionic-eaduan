import { Component } from '@angular/core';
import { Geolocation} from '@capacitor/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Photo, PhotoService } from '../services/photo.service';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  latitude: number;
  longitude: number;
  location_text: any = {};
  url : string;
  constructor(
    private nativeGeocoder: NativeGeocoder,
    public photoService: PhotoService,
    private router: Router,
  ) {
    this.getLocation();
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.url = '<iframe src="https://maps.google.com/maps?q='+ this.latitude+ ', '+ this.longitude + '&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>';
  }

  reverse(){
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(this.latitude, this.longitude, options)
      .then(
        (result: NativeGeocoderResult[]) => {
          this.location_text = result[0];
          console.log(JSON.stringify(result[0]));
        }).catch((error: any) => console.log(error));
  }

  sendAduan(){
    //delete file storage
    this.photoService.deleteAllPicture();
    alert("Aduan telah dihantar");
    this.router.navigate(['tabs/tab1']);
  }

  /*
this.storageService.get('assets_inspected').then(result => {
        if (result != null) {
          const listResult: any = result;
          this.data.total_assets_inspected = listResult.length;
          console.log("total inspected : " + this.data.total_assets_inspected);
        }else {
          this.data.total_assets_inspected = 0;
        }
        }).catch(e => {
        console.log('error: ', e);
        });
  */

}
