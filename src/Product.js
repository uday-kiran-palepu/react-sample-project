function Product(Props){
    return (
        <div className="product">
            <img src={Props.url} className="image" alt="img"/>
            <h3>{Props.name}</h3>
            <p>{Props.price}</p>
        </div>
    )
}

export default Product;