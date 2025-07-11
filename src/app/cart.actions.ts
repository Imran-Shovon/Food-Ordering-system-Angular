import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ menuItemId: number; name: string; price: number }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ menuItemId: number }>()
);

export const updateQuantity = createAction(
  '[Cart] Update Quantity',
  props<{ menuItemId: number; quantity: number }>()
);

export const clearCart = createAction('[Cart] Clear Cart');