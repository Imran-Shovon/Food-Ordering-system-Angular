import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../../models/menu-item/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems: MenuItem[] = [
    { id: 1, name: 'Margherita Pizza', price: 12.99, category: 'Pizza', imageUrl: 'pizza.jpg' },
    { id: 2, name: 'Cheeseburger', price: 8.99, category: 'Burger', imageUrl: 'burger.jpg' },
    { id: 3, name: 'Caesar Salad', price: 6.99, category: 'Salad', imageUrl: 'salad.jpg' }
  ];

  getMenuItems(): Observable<MenuItem[]> {
    return of(this.menuItems);
  }
}