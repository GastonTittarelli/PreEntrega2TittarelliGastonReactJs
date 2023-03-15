import Card from "../Card/Card";
import styles from "./itemListContainer.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
	const [products, setProduct] = useState([]);
	const { category } = useParams();

	useEffect(() => {
		if (category !== "item") {
			fetch(`https://fakestoreapi.com/products/category/${category}`)
				.then((res) => res.json())
				.then((data) => setProduct(data));
		} else {
			fetch("https://fakestoreapi.com/products")
				.then((res) => res.json())
				.then((data) => setProduct(data));
		}
	}, [category]);

	return (
		<div className={styles.container}>
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</div>
	);
};

export default ItemListContainer;
