import { Button } from "@/components/ui/button";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";

export default async function Home() {
  
  const sliderList = await GlobalApi.getSliders();

  const categoryList = await GlobalApi.getCategoryList();

  const productList = await GlobalApi.getAllProducts();


  return (
    <div className="p-10 px-4 md:px-16 overflow-hidden">
        {/* Sliders */}
        <Slider sliderList={sliderList} />

        {/* CategoryList */}
        <CategoryList categoryList={categoryList} />

        {/* Product List */}
        <ProductList productList={productList} />

    </div>
  );
}
