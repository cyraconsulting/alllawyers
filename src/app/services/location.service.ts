import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

  constructor() { }

  getLocations() {
    let locations = [
      'Ontario',
      'Quebec',
      'Alberta',
      'Manitoba',
      'New Foundland',
      'British Columbia',
      'Nova Scotia',
      'Saskstchewn',
      'New Brunswick'
    ];
    return locations;
  }

}
