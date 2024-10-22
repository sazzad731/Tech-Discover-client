import { useContext } from "react";
import TabTabContent from "./TabTabContent/TabTabContent";
import { PageScrollContext } from "../../../providers/PageScrollProvider";

const FeaturedProducts = () => {
  const { featuredSectionRef } = useContext(PageScrollContext);
  return (
    <section ref={featuredSectionRef}>
      <div className="max-w-[1500px] my-20 2xl:mx-auto mx-4">
        <h4 className="text-center text-2xl font-semibold mb-10">
          Featured Products
        </h4>
        <div>
          <TabTabContent />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;