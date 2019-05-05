import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  textareaValue: string = "";
  title = 'Angular';
  cars: Object[];

  selectedCars2: any[];

  handleClick() {
    console.log(this.textareaValue);
    console.log('selectedCars2');
    console.log(this.selectedCars2);
  }

  ngOnInit() {
    this.cars = [
      { vin: 'vin', year: 'Vin', brand: 'Vin' , color: 'Vin'  },
      { vin: 'vin1', year: 'Vin', brand: 'Vin' , color: 'Vin'  }];
}

putSelectedDateInDefault1(agreed: any[]){
  console.log(agreed);
  //this.txtWeekDay1 = $event.toString();
  this.selectedCars2=agreed;
}

}
