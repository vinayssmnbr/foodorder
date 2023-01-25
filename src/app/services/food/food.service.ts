import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        id:1,
        name:'burgur',
        price:40,
        cookTime:'20-30',
        favorite:true,
        origins:['persia','india'],
        star:2,
        imageUrl:'/assets/image.jpeg',
        tags:['slowFood','lunch']
      },
      {
        id:2,
        name:'chapati',
        price:40,
        cookTime:'20-30',
        favorite:true,
        origins:['persia','india'],
        star:4,
        imageUrl:'/assets/images.jpeg',
        tags:['slowFood','lunch']
      },
      {
        id:3,
        name:'Noodels',
        price:40,
        cookTime:'20-30',
        favorite:true,
        origins:['persia','india'],
        star:3,
        imageUrl:'/assets/img.jpeg',
        tags:['slowFood','lunch']
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
        tags:['slowFood','lunch']
      }



    ]
  }
}
