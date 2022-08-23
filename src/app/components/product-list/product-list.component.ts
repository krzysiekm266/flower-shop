import {
  Component,
  Input,
  OnInit,
  DoCheck,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ConfigService } from 'src/app/services/config.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() category: string = 'category';
  @Input() description: string = 'description';
  @Input() bgImage: string = '';
  @Input() products: Product[] = [];
  private lastCategory: string = '';
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _configService: ConfigService,
    private _shoppingCartService:ShoppingCartService
  ) {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.lastCategory = this.category;
  // }

  ngDoCheck(): void {
    if (this.category !== this.lastCategory) {
      this.lastCategory = this.category;
      this.ngOnInit();
    }
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(
      (param) => (this.category = param.get('category') as string)
    );

    /**
     * Config service returns first element of categories array
     * Category name should be one of the kind so config service always returns only one category name description
     */
    this._configService
      .getCategoryDescription(this.category)
      .subscribe((category) => (this.description = category.description));
    this._configService
      .getCategoryBg(this.category)
      .subscribe(
        (background) => (this.bgImage = background.categoryBackground)
      );
    this._productService
      .getProductsByCategory(this.category)
      .subscribe((products) => (this.products = products));
    document.scrollingElement?.scroll(0, 0);
    //  console.log(this.bgImage)
  }
  onAddToCart(product: Product) {

    this._shoppingCartService.addItem(product).subscribe(items => console.log(items));
  }
}
