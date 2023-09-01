import { get } from '../utils/request';

export const getProductList = async (searchTerm, curCategorySearch='') => {

   // LOCAL HOST ONLY ---------
   // curCategorySearch, sortByPrice, priceOrder, minPrice, maxPrice, sortByDiscount, discountOrder
   
   let endpoint = 'products';
   if (searchTerm)   
      endpoint += `/search?q=${searchTerm}`
   if (curCategorySearch)
      endpoint += `/category/${curCategorySearch}`
   // if (sortByPrice)
   //    endpoint += `&_sort=price&_order=${priceOrder}`
   // if (minPrice)
   //    endpoint +=`&price_gte=${minPrice}`
   // if (maxPrice)
   //    endpoint += `&price_lte=${maxPrice}`;
   // if (sortByDiscount)
   //    endpoint += `&_sort=discountPercentage&_order=${discountOrder}`
   
   const result = await get(endpoint); 
   return result;
}

export default getProductList;
