function Products() {
    let pid = 1234;
    let pname = "iPhone 14 Pro Max";
    let price = 1099.99;
    let inStock = true;

    return(
        <div>
            <h2>Product Details</h2>
            <p>Product ID: {pid}</p>
            <p>Product Name: {pname}</p>
            <p>Price: ${price}</p>
            <p>In Stock: {inStock ? "Yes" : "No"}</p>
        </div>
    )
}

export default Products;
