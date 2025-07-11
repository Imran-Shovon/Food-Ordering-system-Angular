import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as CartActions from './cart.actions';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions) {}

  // Placeholder for future API effects, e.g., persisting cart to backend
  logAddToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addToCart),
      map(({ menuItemId }) => {
        console.log(`Effect: Item ${menuItemId} added to cart`);
        return { type: '[Cart] Log Success' };
      })
    )
  );
}