import { Component } from '@angular/core';
import { Geolocation} from '@capacitor/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  latitude: number;
  longitude: number;
  location_text: any = {};
  constructor(
    private nativeGeocoder: NativeGeocoder
  ) {
    this.getLocation();
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
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
