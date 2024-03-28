import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  
  car1={carId: 1, BrandName: "Mercedes", ColorName:"Yellow"}
  car2={carId: 2, BrandName: "Ford", ColorName:"Black"}
  car3={carId: 3, BrandName: "Audi", ColorName:"Green"}
  car4={carId: 4, BrandName: "BMW", ColorName:"Red"}
  
  
  cars=[this.car1, this.car2, this.car3, this.car4]
  
  
  ngOnInit(): void {
    
  }
}
