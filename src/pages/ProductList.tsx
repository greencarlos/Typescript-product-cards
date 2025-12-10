import productsData from "../productsData";
import "./Product.css";
import { Link } from "react-router-dom";

const ProductList = () => {
	return (
		<div className="product-grid">
			{productsData.map((item, index) => (
				<Link
					to={`/productpage/${item.id}`}
					key={index}
					className="product-card"
				>
					<img src={item.image} alt={item.name} />
					<p>{item.name}</p>
					<p>{item.description}</p>
					<p>${item.price}</p>
				</Link>
			))}
		</div>
	);
};

export default ProductList;
