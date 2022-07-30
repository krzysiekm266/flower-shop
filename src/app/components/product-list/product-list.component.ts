import { Component, Input, OnInit ,DoCheck,OnChanges, Output, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,DoCheck ,OnChanges{
  @Input() category:string = 'category';
  @Input() description:string = 'description';
  @Input() bgImage:string ='';
  @Input() products:Product[] = [];
  private lastCategory:string = '';
  @Output() private changeDetected:boolean = false;
  constructor(private _route:ActivatedRoute,private _productService:ProductService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.lastCategory = this.category;
  }
  ngDoCheck(): void {
   if(this.category !== this.lastCategory) {
    this.ngOnInit();
   };
  }

  ngOnInit(): void {
     this._route.paramMap.subscribe(param => this.category = param.get('category') as string);
     let bg = history.state['bg'] as string;
     this.bgImage = bg;
     console.log(this.bgImage);
     this.description =  this._productService.getCategoryDescription(this.category);
     this._productService.getProductsByCategory(this.category).subscribe(products => this.products = products);
     document.scrollingElement?.scroll(0,0);

  }

}
