import { Component, Input } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/tag';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input()
  foodPagetags?:string[]
  @Input()
  justifycontent?:string = 'center'

  tags?: Tag[] = [];
  constructor(private fs:FoodService){}


  ngOnInit(): void{
    if(!this.foodPagetags)
    
    this.tags=this.fs.getAllTag();
  }

}
