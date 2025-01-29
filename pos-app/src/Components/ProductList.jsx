function ProductList (props) {
    return (
        
        <div className="card">
            <button className="button-menu" type="button" onClick={() => props.onSelectProduct(props.name, props.price)}><img className="card-image" src={props.image} alt={props.name} /></button>
            <p>{props.name}</p>
        </div>
    )
}

export default ProductList;