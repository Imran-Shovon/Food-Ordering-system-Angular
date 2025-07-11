import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../../../data/models/menu-item/menu-item.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-menu-item-card',
  imports: [MatCardModule],
  templateUrl: './menu-item-card.html',
  styleUrl: './menu-item-card.scss'
})
export class MenuItemCard {
  @Input() menuItem: MenuItem | null = null;
  @Output() addToCart = new EventEmitter<number>();

  onAddToCart(): void {
    if (this.menuItem) {
      this.addToCart.emit(this.menuItem.id);
    }
  }

}
