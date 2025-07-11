import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../../models/menu-item/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems: MenuItem[] = [
    { id: 1, name: 'Margherita Pizza', price: 12.99, category: 'Pizza', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' },
    { id: 2, name: 'Cheeseburger', price: 8.99, category: 'Burger', imageUrl: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg' },
    { id: 3, name: 'Caesar Salad', price: 6.99, category: 'Salad', imageUrl: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg'},
    { id: 4, name: 'Margherita Pizza', price: 12.99, category: 'Pizza', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' },
    { id: 5, name: 'Cheeseburger', price: 8.99, category: 'Burger', imageUrl: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg' },
    { id: 6, name: 'Caesar Salad', price: 6.99, category: 'Salad', imageUrl: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg' },
    { id: 7, name: 'Margherita Pizza', price: 12.99, category: 'Pizza', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' },
    { id: 8, name: 'Cheeseburger', price: 8.99, category: 'Burger', imageUrl: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg' },
    { id: 9, name: 'Caesar Salad', price: 6.99, category: 'Salad', imageUrl: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg' },
    { id: 10, name: 'Margherita Pizza', price: 12.99, category: 'Pizza', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' },
    { id: 11, name: 'Cheeseburger', price: 8.99, category: 'Burger', imageUrl: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg' },
    { id: 12, name: 'Caesar Salad', price: 6.99, category: 'Salad', imageUrl: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg' },
  ];

  getMenuItems(): Observable<MenuItem[]> {
    return of(this.menuItems);
  }
}