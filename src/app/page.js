import Hero from "@/components/HeroSlider";
import Product from "@/components/Product";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  const products = data?.data;
  return (
    <div>
      <section>
        <Hero />
      </section>
      {/* products section  */}
      <section>
        {products.length ? (
          products?.map((product, index) => (
            <Product key={index} product={product} />
          ))
        ) : (
          <div>loading</div>
        )}
      </section>
    </div>
  );
}
