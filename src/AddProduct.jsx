import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

const AddProduct = () => {
    const [productId, setProductId] = React.useState('');
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [description, setdescription] = React.useState('');
    
    const addProduct = () => {
        console.warn(productId,name, price, quantity, description);
    }

    return (
        <form className='container '>
            <div className="form-group mx-sm-3 mb-2">
                <label className="mb-2">Product ID</label>
                <input type="number" className="form-control" id="productId" placeholder="Enter Product ID" 
                value={productId} onChange={(e) => { setProductId(e.target.value) }}
                />
                
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label className="mb-2">Name</label>
                <input type="text" className="form-control" id="ProductName" placeholder="Enter Product Name" 
                value={name} onChange={(e) => { setName(e.target.value) }}
                />

            </div>

            <div className="form-group mx-sm-3 mb-2">
                <label className="mb-2">Quantity</label>
                <input type="number" className="form-control" id="ProductQuantity" placeholder="Enter Quantity"
                value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
            </div>

            <div className="form-group mx-sm-3 mb-2">
                <label className="mb-2">Price</label>
                <input type="number" className="form-control" id="ProductPrice" placeholder="Enter Product Price" 
                value={price} onChange={(e) => { setPrice(e.target.value) }} 
                />
            </div>

            <div className="form-group mx-sm-3 mb-2">
                <label className="mb-2">Description</label>
                <input type="text" className="form-control" id="Description" placeholder="Enter Description" 
                value={description} onChange={(e) => { setdescription(e.target.value) }} 
                />
            </div>

            <div className="mt-4 d-flex justify-content-center align-item-center">
            <button type="submit" className="btn btn-primary ">Add</button>
            </div>
        </form>

    );
}
export default AddProduct;
