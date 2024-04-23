import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  salles = [] = ["Salle à manger", "SDB", "Garage", "PAC", "Buanderie", "Piscine"]
}
