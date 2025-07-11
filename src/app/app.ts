import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuList } from './features/menu/components/menu-list/menu-list';

@Component({
  selector: 'app-root',
  imports: [MenuList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('food-ordering-system');
}
