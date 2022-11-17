
import "./ProductDetails.css";
import Header from '../../components/Header/Header'
import ProductDetailsCard from "../../components/ProductDetailsCard/ProductDetailsCard";
import Footer from "../../components/Footer/Footer";


function ProductDetails() {
  return (
    <div >
      <Header/>
      <ProductDetailsCard className="ProductDetails"/>
      <Footer/>
    </div>
  )
}

export default ProductDetails;
