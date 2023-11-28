import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from "../housingLocation";
import {HousingService} from "../housing.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList?: Observable<HousingLocation[]>;
  filteredHousingLocationList?: Observable<HousingLocation[]>;
  housingService: HousingService = inject(HousingService);

  constructor() {
    //this.housingService.getAllHousingLocations().subscribe(list => this.housingLocationList = list);
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredHousingLocationList=this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredHousingLocationList = this.housingLocationList;
    }
   // this.filteredHousingLocationList = this.housingLocationList.filter((housingLocation) =>
     // housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    //);
  }


}
