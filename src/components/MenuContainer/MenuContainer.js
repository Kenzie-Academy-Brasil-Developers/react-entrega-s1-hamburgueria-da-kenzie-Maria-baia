import Product from "../Product/Product"

function MenuContainer({products, handleClick}){
    return(
         <ul>
         {products.map(product => (
           <Product productId={product.id} productName={product.name} productCategory={product.category} productPrice={product.price} handleClick={handleClick}/>
         ))}
       </ul>
    )
}

 export default MenuContainer