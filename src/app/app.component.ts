import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';
import { CommonModule } from '@angular/common';
import { Collection, nameCollection, numberCollection } from './collection';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  companyName: string = 'Румтибет';

  city: string = '';
  date: string = '';
  participants: string = '';

  count: number = 0;

  currentDate: Date = new Date();
  currentHeaderWidget: 'date' | 'counter' = 'date';

  liveInputValue: string = '';
  isLoading: boolean = true;

  offers = [
    {
      id: 1,
      title: 'Опытный гид',
      desc: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      iconName: 'guide-icon'
    },
    {
      id: 2,
      title: 'Безопасный поход',
      desc: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      iconName: 'security-icon'
    },
    {
      id: 3,
      title: 'Лояльные цены',
      desc: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      iconName: 'price-icon'
    }
  ];

  constructor() {
    this.saveLastVisit();
    this.updateVisitsCount();

    console.log(nameCollection.getAll());
    numberCollection.replace(1, 77);

    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }


  setHeaderWidget(widget: 'date' | 'counter'): void {
    this.currentHeaderWidget = widget;
  }

  incrementCount(): void {
    this.count++;
  }

  decrementCount(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

  isPrimaryColor(color: Color): boolean {
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
