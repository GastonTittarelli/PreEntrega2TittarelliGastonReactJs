import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem/ProductItem";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Navigate to= "inicio"/>}/>
				<Route path="/inicio" element={<h3>¡Bienvenidos!</h3>} />
				<Route
					path="/productos"
					element={<ItemListContainer products={products} />}
				/>
				<Route
					path="/carrito"
					element={<h2>¡Oops! Tu carrito esta vacío!</h2>}
				/>
				<Route
					path="/productos/:id"
					element={<ProductItem />}
				/>
				<Route path="*" element={<h2>¡Oops! Página no encontrada!</h2>} />
			</Routes>
		</div>
	);
}

export default App;
