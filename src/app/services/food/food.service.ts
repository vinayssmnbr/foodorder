import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Foods{
    return this.getAll().find(food =>food.id==id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food=>food.tags?.includes(tag))

  }

  getAllTag():Tag[]{
    return[
      {name:'All',count:4},
      {name:'FastFood',count:1},
      {name:'Lunch',count:1},
      {name:'Snacks',count:1},
      {name:'BreakFast',count:1},
     

    ];

  }
 
  getAll():Foods[]{
    return [
      {
        id:1,
        name:'chapati',
        price:30,
        cookTime:'20-30',
        favorite:true,
        origins:['persia','india'],
        star:2,
        imageUrl:'/assets/image.jpeg',
        tags:['Snacks']
      },
      {
        id:2,
        name:'Burgur',
        price:25,
        cookTime:'20-30',
        favorite:true,
        origins:['persia','india'],
        star:4,
        imageUrl:'/assets/images.jpeg',
        tags:['slowFood','Lunch']
      },
      {
        id:3,
        name:'Noodels',
        price:60,
        cookTime:'20-30',
        favorite:true,
        origins:['persia','india'],
        star:3,
        imageUrl:'/assets/img.jpeg',
        tags:['slowFood','FastFood']
      },
      {
        id:4,
        name:'paw-bhaji',
        price:40,
        cookTime:'20-30',
        favorite:true,
        origins:['persia','india'],
        star:3,
        imageUrl:'/assets/imgs.jpeg',
        tags:['slowFood','BreakFast']
      }



    ]
  }
}
