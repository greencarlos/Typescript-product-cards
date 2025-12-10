import { useParams } from "react-router-dom";
import productsData from "../productsData";
import { Link } from "react-router-dom";

function ProductPage() {
	const { id } = useParams();
	const product = productsData.find(
		(product) => String(product.id) === String(id)
	);

	return (
		<>
			<img src={product.image} alt={product.name} />
			<p>{product.name}</p>
			<p>{product.description}</p>
			<p>${product.price}</p>
			<Link to="/productlist">Back to products</Link>
		</>
	);
}

export default ProductPage;
