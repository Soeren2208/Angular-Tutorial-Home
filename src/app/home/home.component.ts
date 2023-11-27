import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from "../housingLocation";
import {HousingService} from "../housing.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, HousingService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[]=[];
  constructor(private housingService: HousingService){
    this.housingLocationList=this.housingService.getAllHousingLocations();
  }


}
