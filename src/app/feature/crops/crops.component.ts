import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {CropsService} from '../../service/crops.service';
import {Crop} from '../../shared/model/crop';

@Component({
  selector: 'crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.scss']
})
export class CropsComponent implements OnInit {

  filterControl = new FormControl('');
  crops = [] as Crop[];
  filteredCrops = [] as Crop[];

  constructor(private cropsService: CropsService) { }

  ngOnInit(): void {
    this.loadAllCropDetails();
  }

  loadAllCropDetails() {
    this.crops = this.cropsService.crops;
    this.filteredCrops = this.crops;
  }

  onFilterCrop() {
    const filterText: string = this.filterControl.value;
    if (filterText.length === 0 ) {
      this.filteredCrops = this.crops;
    } else {
      this.filteredCrops = this.crops.filter(
          crop => crop.name === this.filterControl.value);
    }
  }

}
