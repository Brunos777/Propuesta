import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  imagen: any[]=[
    {id:5, url:'../assets/Imagenes/skin5.jpg'},
    {id:6, url:'../assets/Imagenes/skin6.png '},
    {id:7, url:'../assets/Imagenes/skin7.png'},
    {id:8, url:'../assets/Imagenes/skin8.png'}

  ]
}
