export interface Background {
  categoryName:string;
  categoryBackground:string ;

}
//flower-roses.jpg
const assetsPath:string = 'assets/images/nav/';
export const BACKGROUNDS:Background[] = [
  {
    categoryName:'Roses',
    categoryBackground: 'url(' + assetsPath + 'flower-roses.jpg' + ')'
  },
  {
    categoryName:'Bouquets',
    categoryBackground: 'url(' + assetsPath + 'flower-bouquets.jpg' + ')'
  },
  {
    categoryName:'Flower Arrangements',
    categoryBackground: 'url(' + assetsPath + 'flower-arrangements.jpg' + ')'
  },
  {
    categoryName:'Plants',
    categoryBackground: 'url(' + assetsPath + 'flower-plants.jpg' + ')'
  },
  {
    categoryName:'Sunflowers',
    categoryBackground: 'url(' + assetsPath + 'flower-sunflowers.jpg' + ')'
  },
  {
    categoryName:'Summer flowers',
    categoryBackground: 'url(' + assetsPath + 'flower-spring.jpg' + ')'
  }
];
