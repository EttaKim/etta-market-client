import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return <h1>product detail page {id} product</h1>;
}

export default ProductPage;
