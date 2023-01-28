import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food !:Foods

  constructor(private activatedRoute:ActivatedRoute,  private foodServices:FoodService){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food=foodServices.getFoodById(params['id'])
    })
   
  }

}
