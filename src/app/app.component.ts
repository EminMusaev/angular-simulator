import { Component } from '@angular/core';
import './training.ts';
import { Color } from '../enums/Color';
import { Collection, nameCollection, numberCollection } from './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'Румтибет'
  
  constructor() {
    this.saveLastVisit();
    this.updateVisitsCount();
    console.log(nameCollection.getAll());
    numberCollection.replace(1, 77);
  }
  
  getColor(color: Color): boolean {
  const primaryColors: Color[] = [Color.RED, Color.GREEN, Color.BLUE];
  return primaryColors.includes(color);
}

saveLastVisit(): void {
    const now: string = new Date().toString();
    localStorage.setItem('lastVisitDate', now);
  }
  
  updateVisitsCount(): void {
    const storedValue: number = Number(localStorage.getItem('visitsCount') || 0);
    localStorage.setItem('visitsCount', String(storedValue + 1));
  }

}
