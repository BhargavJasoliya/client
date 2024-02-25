import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
    // State to manage form inputs
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [supply, setSupply] = useState('');
    const navigate = useNavigate();
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your logic to handle the form data (e.g., API call, state update)
        console.log('Product Name:', name);
        console.log('Price:', price);
        console.log('Description:', description);
        console.log('Category:', category);
        console.log('Rating:', rating);
        console.log('Supply:', supply);
        const { data } = await axios.post(
            'http://localhost:5001/client/addProduct',
            { name, price, description, category, rating, supply },
        );
        console.log('Add Product Done ', data);
        navigate('/products');
        // Reset form fields after submission
        setName('');
        setPrice('');
        setDescription('');
        setCategory('');
        setRating('');
        setSupply('');
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Category:
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Rating:
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Supply:
                    <input
                        type="text"
                        value={supply}
                        onChange={(e) => setSupply(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;