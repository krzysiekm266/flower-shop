export interface Product {
  id?:number;
  category:string;
  name:string;
  description:string;
  price:number;
  quantity:number;
  picturePath:string;

}

export const FLOWERS:Product[] = [
  { id:1,category:'Roses',name:'Red rose',description:'Beautiful red roses from Narnia.',price:4.25,quantity:1,picturePath:'' },
  { id:2,category:'Bouquets',name:'Anniversary bouquet',description:'Beautiful bouquet from far away.',price:12.35,quantity:1,picturePath:'' },
  { id:3,category:'Flower Arrangements',name:'Wedding flowers arrangements',description:'Flower Arrangements for every ocassion.',price:27.25,quantity:1,picturePath:'' } ,
  { id:4,category:'Plants',name:'Palm tree',description:'Plants for your house',price:10.75,quantity:1,picturePath:'' },
  { id:5,category:'Sunflowers',name:'Green sunflower',description:'Sunflowers to improve your mood.',price:13,quantity:1,picturePath:'' },
  { id:6,category:'Summer flowers',name:'Summer mix',description:'Summer flowers to add some colors to yours surroundings./',price:6.20,quantity:1,picturePath:'' },

];
