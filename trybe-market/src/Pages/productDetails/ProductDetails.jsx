
import "./ProductDetails.css";
import Header from '../../components/Header/Header'
import ProductDetailsCard from "../../components/ProductDetailsCard/ProductDetailsCard";

function ProductDetails() {
  return (
    <div >
      <Header/>
      <ProductDetailsCard className="ProductDetails"/>
    </div>
  )
}

export default ProductDetails;
