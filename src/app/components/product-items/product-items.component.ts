import { Component, OnInit } from '@angular/core';

interface product{
  sno: string;
  name: string;
  image: string;
  qty: number;
  price: number;
}

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
 
  public product = {
    sno: 'A100',
    name: 'watch',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    qty: '50',
    price: 20

  }

  constructor() { }

  ngOnInit(): void {
  }

}
