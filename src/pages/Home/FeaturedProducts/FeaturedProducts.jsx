import { useContext } from "react";
import TabTabContent from "./TabTabContent/TabTabContent";
import { PageScrollContext } from "../../../providers/PageScrollProvider";
import PrimaryButton from "../../../components/shared/Button/PrimaryButton";

const FeaturedProducts = () => {
  const { featuredSectionRef } = useContext(PageScrollContext);
  return (
    <section ref={featuredSectionRef} className="pt-20">
      <div className="max-w-[1500px] 2xl:mx-auto mx-4">
        <h4 className="text-center text-2xl font-semibold mb-10">
          Featured Products
        </h4>
        <div>
          <TabTabContent />
        </div>
        <div className="flex items-center justify-center mt-10">
          <PrimaryButton label="See all Product" path="/products" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;