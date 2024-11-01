import { Link } from "react-router-dom";
import ProductCart from "./ProductCart/ProductCart";
import { useContext } from "react";
import { PageScrollContext } from "../../../providers/PageScrollProvider";

const TrendingProducts = () => {
  const { trendingSectionRef } = useContext(PageScrollContext);

  const productdata = [
    {
      id: 1,
      image:
        "https://ph-files.imgix.net/c5bfd640-2b07-4a2d-aed9-e75b8afb3bbf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1",
      name: "Scrintal",
      title: "Go from ideas to insights, one block at a time",
      comments: 50,
      topics: ["Productivity", "writing", "Notes"],
      upvote: 234,
    },
    {
      id: 2,
      image:
        "https://ph-files.imgix.net/b486d850-4523-4440-aefe-81ac50627700.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1",
      name: "Nango Auth",
      title: "Free OAuth to quickly connect your product with 250+ APIs",
      comments: 30,
      topics: ["API", "SaaS", "Developer Tools"],
      upvote: 34,
    },
    {
      id: 3,
      image:
        "https://ph-files.imgix.net/e9e9f3ee-fd94-43c5-ac4a-23208470e2f1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1",
      name: "Scrintal",
      title: "Go from ideas to insights, one block at a time",
      comments: 50,
      topics: ["Productivity", "writing", "Notes"],
      upvote: 250,
    },
    {
      id: 4,
      image:
        "https://ph-files.imgix.net/c5bfd640-2b07-4a2d-aed9-e75b8afb3bbf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1",
      name: "Scrintal",
      title: "Go from ideas to insights, one block at a time",
      comments: 50,
      topics: ["Productivity", "writing", "Notes"],
      upvote: 100,
    },
    {
      id: 5,
      image:
        "https://ph-files.imgix.net/b486d850-4523-4440-aefe-81ac50627700.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1",
      name: "Nango Auth",
      title: "Free OAuth to quickly connect your product with 250+ APIs",
      comments: 30,
      topics: ["API", "SaaS", "Developer Tools"],
      upvote: 35,
    },
    {
      id: 6,
      image:
        "https://ph-files.imgix.net/e9e9f3ee-fd94-43c5-ac4a-23208470e2f1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1",
      name: "Scrintal",
      title: "Go from ideas to insights, one block at a time",
      comments: 50,
      topics: ["Productivity", "writing", "Notes"],
      upvote: 500,
    },
  ];


  return (
    <section ref={trendingSectionRef} className="pt-20">
      <div className="max-w-[1500px] 2xl:mx-auto mx-4">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Trending Products
        </h2>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-7">
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Hot Picks
              </span>
              <br /> of the Week
            </h1>
            <p className="lg:w-[35rem] font-medium">
              Explore the hottest tech products making waves in the industry
              right now. From cutting-edge AI tools to innovative web apps,
              these are the products everyone is talking about. Dive in and
              discover what&apos;s trending in the world of tech today.
            </p>
          </div>
          <div className="flex gap-10 p-5 sm:w-[23rem] bg-gradient-to-r from-rose-500/30 to-indigo-500/30 rounded-lg lg:mb-0 mb-7">
            {productdata.slice(0, 3).map((item) => (
              <Link to="product-details" key={item.id}>
                <img className="w-32" src={item.image} alt={item.name} />
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-col-span-1 lg:grid-cols-2 gap-5">
          {productdata.map((item, index) => (
            <ProductCart key={item.id} productdata={item} position={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;