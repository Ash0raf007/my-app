import AllProducts from "@/components/AllProducts";
import { getProducts } from "../../../lib/api";

const Page = async () => {
  let products = [];
  try {
    const product = await getProducts();
    console.log("sddd", product.data.products);
    products = product.data.products; // Assign products inside the try block
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
    return <div>Error fetching products</div>;
  }
  return (
    <div className="header">
      <AllProducts products={products} />
    </div>
  );
};

export default Page;
