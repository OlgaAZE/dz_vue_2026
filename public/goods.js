async function goodsApi() {
   const response = await fetch("https://fakestoreapi.com/products");
   if(!response.ok) {
      throw new Error(`error ${response.status}`)
   }
   return response.json();
}

export {goodsApi};