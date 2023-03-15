import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
	return (
		<nav className={styles.container}>
			<Link to="/inicio">
				<img
					className={styles.logo}
					href=""
					src="/img/DLogo.png"
					alt="logo Distribuidora Tittarelli"
				/>
			</Link>
			<Link to="/inicio">
				<h3 className={styles.titulo}>Distribuidora Tiitarelli</h3>
			</Link>
			<div className={styles.anContainer}>
				<Link to="/productos">
					<p className={styles.anchors} href="">
						Todos los productos
					</p>
				</Link>
				<Link to="/joyeria">
					<p className={styles.anchors}>Joyería</p>
				</Link>
			</div>
			<Link to="/carrito">
				<FaShoppingCart className={styles.svg} />
			</Link>
		</nav>
	);
};

export default NavBar;
