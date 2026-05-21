import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import './training';
import { Color } from '../enums/Color';
import { CommonModule } from '@angular/common';
import { Collection, nameCollection, numberCollection } from './collection';
import { MessageType } from '../enums/Message-type';
import { MessageService } from './services/message.service';
import { LocalStorageService } from './services/local-storage.service';
import { IDestinationCard } from '../interfaces/IDestinationCard';
import { IBlogCard } from '../interfaces/IBlogCard';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl:  './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  readonly companyName: string = 'Румтибет';

  messageService: MessageService = inject(MessageService);
  storageService: LocalStorageService = inject(LocalStorageService);
  messageType: typeof MessageType = MessageType;

  city!: string;
  date!: string;
  participants!: string;

  count: number = 0;

  currentDate: Date = new Date();
  currentHeaderWidget: 'date' | 'counter' = 'date';

  liveInputValue!: string;
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

  destinationCards: IDestinationCard [] = [
    {
      id: 1,
      title: 'Озеро возле гор',
      subtitle: 'романтическое приключение',
      price: 480,
      image: 'lake-near-mount',
      rating: 4.9
    },
    {
      id: 2,
      title: 'Ночь в горах',
      subtitle: 'в компании друзей',
      price: 500,
      image: 'night-in-mount',
      rating: 4.5
    },
    {
      id: 3,
      title: 'Йога в горах',
      subtitle: 'для тех, кто забоится о себе',
      price: 230,
      image: 'stretc-in-mount',
      rating: 5.0
    },
  ];

  blogCards: IBlogCard [] = [
    {
      id: 1,
      title: 'Красивая Италия, какая она в реальности?',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023' ,
      image: 'houses-the-cliff',
      linkText: '#',
    },
    {
      id: 2,
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации... независимые способы реализации соответствующих...',
      date: '01/04/2023',
      image: 'airplane-the-cloud',
      linkText: '#',
    },
    {
      id: 3,
      title: 'Как подготовиться к путешествию в одиночку?',
      description: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/04/2023',
      image: 'narrow-street',
      linkText: '#',
    },
    {
      id: 4,
      title: 'Индия ... летим?',
      description: 'Для современного мира базовый.',
      date: '01/04/2023',
      image: 'taj-mahal',
      linkText: '#',
    },
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
    
    this.storageService.setValue('last-visit-date', now);
  }

  updateVisitsCount(): void {
    const storedValue: number = this.storageService.getValue<number>('visits-count') ?? 0;

    this.storageService.setValue('visits-count', storedValue + 1);
  }

}
