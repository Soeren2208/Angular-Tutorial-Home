import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from "../housingLocation";
import {HousingService} from "../housing.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredHousingLocationList: HousingLocation[] =[];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[])=>{
      this.housingLocationList = housingLocationList;
      this.filteredHousingLocationList=this.housingLocationList;
    });

  }

  filterResults(text: string) {
    if (!text) {
      this.filteredHousingLocationList = this.housingLocationList;
    }
    this.filteredHousingLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }


}
