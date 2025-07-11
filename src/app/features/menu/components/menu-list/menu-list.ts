import { AsyncPipe, CommonModule, } from '@angular/common';
import { Component, ComponentRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CartActions from '../../../../cart.actions';
import { MenuItem } from '../../../../data/models/menu-item/menu-item.model';
import { MenuService } from '../../../../data/services/menu/menu.service';
import { FilterBar } from '../../../../shared/components/filter-bar/filter-bar';
import { Modal } from '../../../../shared/components/modal/modal';
import { MenuItemCard } from '../menu-item-card/menu-item-card';

@Component({
  selector: 'app-menu-list',
  imports: [MatCardModule, MenuItemCard, FilterBar, MenuItemCard, CommonModule, AsyncPipe],
  templateUrl: './menu-list.html',
  styleUrl: './menu-list.scss'
})
export class MenuList {
  menuItems$!: Observable<MenuItem[]>;
  @ViewChild('filterInput') filterInput!: ElementRef;
  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;
  modalRef!: ComponentRef<Modal>;

  constructor(
    private menuService: MenuService,
    private store: Store
  ) {}
    onFilterChange(category: string): void {
    // this.selectedCategory = category;
    // this.filterChange.emit(category);
  }

  ngOnInit(): void {
    this.menuItems$ = this.menuService.getMenuItems();
  }

  handleAddToCart(item: MenuItem): void {
    this.store.dispatch(CartActions.addToCart({ menuItemId: item.id, name: item.name, price: item.price }));
    this.showModal(`Added ${item.name} to cart!`);
  }

  focusFilter(): void {
    this.filterInput.nativeElement.focus();
  }

  showModal(message: string): void {
    this.modalContainer.clear();
    this.modalRef = this.modalContainer.createComponent(Modal);
    this.modalRef.setInput('isOpen', true);
    const modalContent = this.modalRef.location.nativeElement.querySelector('.modal-content');
    modalContent.innerHTML = `<p>${message}</p><button mat-raised-button (click)="closeModal()">Close</button>`;
  }

  closeModal(): void {
    this.modalRef.instance.isOpen = false;
    this.modalContainer.clear();
  }
}
