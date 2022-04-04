import { Component, OnInit } from '@angular/core';


interface product{
  sno: string;
  name: string;
  image: string;
  qty: number;
  price: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products:product[] = [
    {
      sno: 'A100',
      name: 'watch',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      qty: 10,
      price: 50
    },
    {
      sno: 'A101',
      name: 'google',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-qfmfH5mT-XG9sWPOcyvAhTOGzw_rpmtupQ&usqp=CAU',
      qty: 10,
      price: 50
    },
    {
      sno: 'A102',
      name: 'Sonny',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9iqOaMe-sBcx0N4KP6NgWNqfdA2bar2E8KQ&usqp=CAU',
      qty: 10,
      price: 50
    },
    {
      sno: 'A103',
      name: 'Oppo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMT0Io-cVcWWypRvKqNnq_CPyT4ElYfFTH6A&usqp=CAU',
      qty: 10,
      price: 50
    },
    {
      sno: 'A104',
      name: 'samsung',
      image: 'data:image/jpeg;base64,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',
      qty: 10,
      price: 50
    },
    {
      sno: 'A105',
      name: 'iphone',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPMDLfrcfxXajyLdUxH82kxKOeisSodqkag&usqp=CAU',
      qty: 10,
      price: 50
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public decrQty(productId : string):void{
    this.products = this.products.map((product :product) =>{
      if(product.sno === productId){
        return{
          ...product,
          qty : product.qty - 1 > 0? product.qty - 1 : 0
        }
      }
      return product;
    })
  }

  public incrQty(productId : string):void{
    this.products = this.products.map((product :product) =>{
      if(product.sno === productId){
        return{
          ...product,
          qty : product.qty + 1 > 0? product.qty + 1 : 0
        }
      }
      return product;
    })
  }

  public calcGrandTotal():number{
    let total:number = 0;
    for(let product of this.products){
      total += (product.qty * product.price);
    }
    return total;
  }
}
