import { Component } from '@angular/core';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SRShop';
  products: any[]=[]
  count=0
  name:string="";
  isDark = false;
  addToCart(){
    this.count++;
  }

  constructor(private product: ProductService){
    this.product.getAllProducts().subscribe((data:any)=> this.products= data.products
    )
  }

  search(){
    this.product.getSearchProduct(this.name).subscribe((data:any) => this.products = data.products)
  }
  
  filter(e:any){
    this.product.getCategoryProducts(e.target.textContent).subscribe((data:any)=> this.products = data.products)
  }

  all(){
    this.product.getAllProducts().subscribe((data:any)=> this.products= data.products
    )
  }

  themChange(){
    if(this.isDark){
      this.isDark = false;
    }else{
      this.isDark = true;
    }
  }
}
