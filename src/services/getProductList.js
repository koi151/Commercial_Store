import { get } from '../utils/request';

// http://localhost:3002/products?q=&price_gte=10&price_lte=300&_sort=price&_order=asc

export const getProductList = async (searchTerm, sortBy, order, minPrice, maxPrice) => {
   let endpoint = 'products?q=';
   endpoint += `${searchTerm}`
   if (sortBy)
      endpoint += `&_sort=${sortBy}&_order=${order}`
   if (minPrice)
      endpoint +=`&price_gte=${minPrice}`
   if (maxPrice)
      endpoint+= `&price_lte=${maxPrice}`;
   
   const result = await get(endpoint); 
   return result;
}

export default getProductList;
