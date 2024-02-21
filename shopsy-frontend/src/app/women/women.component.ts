import { Component ,OnInit} from '@angular/core';
import { Products} from '../products';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit{



  products:any;
 
  constructor(private productsService:ProductsService,
    private router:Router){}

ngOnInit(): void {
  this.getProducts();
}

private getProducts(){
  this.productsService.getProductlist().subscribe(data=>
    {
      this.products=data;
    });
}

 productopen=function(){
  location.pathname=('/createorders');
}

}
