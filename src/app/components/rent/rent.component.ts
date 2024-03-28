import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent implements OnInit {

  rental1 = { rentalId: 1, carId: 2, brandName:"Ford", customerName:"Emir Kokum", customerId: 1}
  rental2 = { rentalId: 2, carId: 4, brandName:"BMW", customerName:"Görkem Palalı", customerId: 2}
  rental3 = { rentalId: 3, carId: 1, brandName:"Mercedes", customerName:"Cihan Demirkal", customerId: 3}
  rental4 = { rentalId: 4, carId: 3, brandName:"Audi", customerName:"Mehmet Örs", customerId: 4}


  rentals=[this.rental1, this.rental2, this.rental3, this.rental4]

  ngOnInit(): void {
    
  }
}
