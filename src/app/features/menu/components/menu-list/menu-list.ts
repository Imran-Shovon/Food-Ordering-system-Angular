import { Component, ComponentRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { MenuItem } from '../../../../data/models/menu-item/menu-item.model';
import { MenuService } from '../../../../data/services/menu/menu.service';
import { MenuItemCard } from '../menu-item-card/menu-item-card';
import { Modal } from '../../../../shared/components/modal/modal';
import { FilterBar } from '../../../../shared/components/filter-bar/filter-bar';
import { AsyncPipe, CommonModule,  } from '@angular/common';

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

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuItems$ = this.menuService.getMenuItems();
  }

  handleAddToCart(itemId: number): void {
    this.showModal(`Item ${itemId} added to cart!`);
  }

  focusFilter(): void {
    this.filterInput.nativeElement.focus();
  }

  showModal(message: string): void {
    this.modalContainer.clear();
    this.modalRef = this.modalContainer.createComponent(Modal);
    this.modalRef.instance.isOpen = true;
    this.modalRef.setInput('isOpen', true); // Angular 20+ input binding
    // Simulate content projection by setting inner HTML (for simplicity)
    const modalContent = this.modalRef.location.nativeElement.querySelector('.modal-content');
    modalContent.innerHTML = `<p>${message}</p><button mat-raised-button (click)="closeModal()">Close</button>`;
  }

  closeModal(): void {
    this.modalRef.instance.isOpen = false;
    this.modalContainer.clear();
  }

  onFilterChange(selectedCategory: string): void {
  console.log('Selected category:', selectedCategory);
  // You can filter menuItems$ based on this category here
}


}
