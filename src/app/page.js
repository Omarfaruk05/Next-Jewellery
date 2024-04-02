import Hero from "@/components/HeroSlider";
import Products from "@/components/Product/Products";

export default async function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      {/* products section  */}
      <Products />
    </div>
  );
}
