import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit{
  @Input() hero: Object;
  cols: any[];

  @Input()
  selectedCars3: any[];
  @Output()
  getSelectedDateInModal = new EventEmitter();

  ngOnInit() {

    this.cols = [
        { field: 'vin', header: 'Vin' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];
}

handleClick1() {
    console.log(this.selectedCars3);
    this.getSelectedDateInModal.emit(this.selectedCars3);
  }

  onRowSelect(event: any, template?: any) {
    this.getSelectedDateInModal.emit(this.selectedCars3);
    console.log('row select : ', event);
    }
    onRowUnselect(event: any) {
    this.getSelectedDateInModal.emit(this.selectedCars3);
    console.log('row unselect : ', event);
    }
}
