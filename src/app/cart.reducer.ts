import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { CartItem } from './data/models/cart-item/cart-item';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { menuItemId, name, price }) => {
    const existingItem = state.items.find(item => item.menuItemId === menuItemId);
    if (existingItem) {
      return {
        ...state,
        items: state.items.map(item =>
          item.menuItemId === menuItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    }
    return {
      ...state,
      items: [...state.items, { id: state.items.length + 1, menuItemId, name, price, quantity: 1 }]
    };
  }),
  on(CartActions.removeFromCart, (state, { menuItemId }) => ({
    ...state,
    items: state.items.filter(item => item.menuItemId !== menuItemId)
  })),
  on(CartActions.updateQuantity, (state, { menuItemId, quantity }) => ({
    ...state,
    items: state.items.map(item =>
      item.menuItemId === menuItemId ? { ...item, quantity: Math.max(0, quantity) } : item
    )
  })),
  on(CartActions.clearCart, state => ({
    ...state,
    items: []
  }))
);