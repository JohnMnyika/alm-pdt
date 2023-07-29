import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

// Import your product images
import vinylMatImage from "../assets/vinylmatt.jpg";
import cellucaBoardImage from "../assets/CelucaBoards.jpg";
import frostedWindowVinylImage from "../assets/frostedwindows.jpg";
import forexBoardImage from "../assets/forexboards.jpg";
import transparentVinylImage from "../assets/transparentvinyl.jpg";
// Add more imports for other product images as needed.

const Products = () => {
    // Create an array of products with image paths and other information
    const [data] = useState([
        {
            id: 1,
            title: "Vinyl Mat",
            description: "Description of Vinyl Mat",
            price: 15.99,
            image: vinylMatImage,
            category: "Vinyl Mats",
        },
        {
            id: 2,
            title: "Celluca Board",
            description: "Description of Celluca Board",
            price: 25.99,
            image: cellucaBoardImage,
            category: "Celluca Boards",
        },
        {
            id: 3,
            title: "Frosted Window Vinyl",
            description: "Description of Frosted Window Vinyl",
            price: 19.99,
            image: frostedWindowVinylImage,
            category: "Frosted Window Vinyl",
        },
        {
            id: 4,
            title: "Forex Board",
            description: "Description of Forex Board",
            price: 12.99,
            image: forexBoardImage,
            category: "Forex Boards",
        },
        {
            id: 5,
            title: "Transparent Vinyl",
            description: "Description of Transparent Vinyl",
            price: 17.99,
            image: transparentVinylImage,
            category: "Transparent Vinyl",
        },
        // Add more products with their information and image paths
    ]);

    const [filter, setFilter] = useState(data);
    const [loading] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((item) => item.category === cat);
        setFilter(updatedList);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons text-center py-5">
                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>
                        All
                    </button>
                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Vinyl Mats")}>
                        Vinyl Mats
                    </button>
                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Celluca Boards")}>
                        Celluca Boards
                    </button>
                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Frosted Window Vinyl")}>
                        Frosted Window Vinyl
                    </button>
                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Forex Boards")}>
                        Forex Boards
                    </button>
                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Transparent Vinyl")}>
                        Transparent Vinyl
                    </button>
                </div>

                {filter.map((product) => {
                    return (
                        <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                            <div className="card text-center h-100" key={product.id}>
                                <img className="card-img-top p-3" src={product.image} alt="Card" height={300} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text">{product.description.substring(0, 90)}...</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item lead">$ {product.price}</li>
                                    {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                                </ul>
                                <div className="card-body">
                                    <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                                        Buy Now
                                    </Link>
                                    <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    };

    return (
        <>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-12">
                        <h2 className="display-5 text-center">Latest Products</h2>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? (
                        <div className="col-12 py-5 text-center">
                            <Skeleton height={40} width={560} />
                        </div>
                    ) : (
                        <ShowProducts />
                    )}
                </div>
            </div>
        </>
    );
};

export default Products;
