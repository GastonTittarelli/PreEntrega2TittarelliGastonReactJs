import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import ProductItem from "./components/ProductItem/ProductItem";


function App() {

	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<h3>¡Bienvenidos!</h3>} />
				<Route
					path="category/:category"
					element={<ItemListContainer />}
				/>
				<Route
					path="/carrito"
					element={<h2>¡Oops! Tu carrito esta vacío!</h2>}
				/>
				<Route path="item/:id" element={<ProductItem />} />
				<Route path="*" element={<h2>¡Oops! Página no encontrada!</h2>} />
			</Routes>
		</div>
	);
}

export default App;
