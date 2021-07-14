import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from '@reach/router';

export default (props) => {
    const [product, setProduct] = useState({});
    const navigate = useNavigate();


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/'+productId)
            .then(res => {
                navigate('/');
            })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/"+product._id+"/edit"}>
                Edit
            </Link>
            <button onClick={(e) => {deleteProduct(product._id)}}>
                Delete
            </button>
        </div>
    )
}