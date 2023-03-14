import Card from "../Card/Card";
import styles from "./itemListContainer.module.css";

const ItemListContainer = ({ products }) => {
	return (
		<div className={styles.container}>
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</div>
	);
};

export default ItemListContainer;
