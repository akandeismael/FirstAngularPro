import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  ngOnInit(): void {
  }

  public Name: string = 'Paris';
  public Name2: string = 'Lagos';
  public Name3: string = 'London';
  public Name4: string = "Lyon";

  public Lyon: string = 'https://images.pexels.com/photos/5868282/pexels-photo-5868282.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
  public london: string = 'https://images.pexels.com/photos/1837591/pexels-photo-1837591.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
  public image: string = 'https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';
  public imageName: string = 'https://images.pexels.com/photos/10648743/pexels-photo-10648743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
  constructor() { }

  public getDate(): string{
    return new Date().toLocaleDateString();
  }

  public getTime(): string{
    return new Date().toLocaleTimeString();
  }

}
