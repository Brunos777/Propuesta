import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  imagen: any[]=[
    {id:1, url:'../assets/Imagenes/skin1.jpg'},
    {id:2, url:'../assets/Imagenes/skin2.jpg'},
    {id:3, url:'../assets/Imagenes/skin3.png'},
    {id:4, url:'../assets/Imagenes/skin4.png'}

  ]

 
  constructor() {}

}
