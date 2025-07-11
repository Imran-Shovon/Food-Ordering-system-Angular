import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemCard } from './menu-item-card';
import { selectCartTotal } from '../../../../cart.selectors';

describe('MenuItemCard', () => {
  let component: MenuItemCard;
  let fixture: ComponentFixture<MenuItemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate cart total', () => {
    const state = { cart: { items: [{ id: 1, menuItemId: 1, name: 'Pizza', price: 12.99, quantity: 2 }] } };
    const total = selectCartTotal(state);
    expect(total).toBe(25.98);
  });

  it('should emit addToCart event', () => {
  const component = new MenuItemCard();
  component.menuItem = { id: 1, name: 'Pizza', price: 12.99, category: 'Pizza', imageUrl: 'pizza.jpg' };
  spyOn(component.addToCart, 'emit');
  component.onAddToCart();
  expect(component.addToCart.emit).toHaveBeenCalledWith();
});
});
