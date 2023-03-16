import styles from "./itemDetailContainer.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				<h3 className={styles.title}>{product.title}</h3>
				<img className={styles.img} src={product.image} alt={product.title} />
				<h4 className={styles.precio}>${product.price}</h4>
				<div className={styles.description}>
					<p>{product.description}</p>
				</div>
			</div>
		</div>
	);
};

export default ItemDetailContainer;
