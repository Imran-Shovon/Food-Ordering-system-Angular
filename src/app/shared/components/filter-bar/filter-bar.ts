import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-filter-bar',
  imports: [MatCardModule, MatButtonToggleModule, CommonModule],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.scss'
})
export class FilterBar {
  @Input() categories: string[] = [];
  @Output() filterChange = new EventEmitter<string>();
  @ContentChild('customFilter') customFilter!: TemplateRef<any>;

  selectedCategory: string = 'All';

  onFilterChange(category: string): void {
    this.selectedCategory = category;
    this.filterChange.emit(category);
  }

}
