function Product({productId, productName, productCategory, productPrice, handleClick}){
    return(
           <ul className='products' key={productId}><li className='productName'>{productName}</li>
           <li>Categoria - {productCategory}</li>
           <li>Preço - {productPrice} R$</li>
           <button onClick={() => handleClick(productId)}>Adicionar</button>
           </ul>
    )
}

export default Product