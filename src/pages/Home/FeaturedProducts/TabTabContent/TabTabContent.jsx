import { Link, useSearchParams } from "react-router-dom";
import TabContent from "./TabContent/TabContent";

const TabTabContent = () => {
  const [params, ] = useSearchParams();
  const featured = params.get("featured");
  const tabsContentInfo = [
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
      upvote: 234,
    },
  ];
  const featuredCategories = [
    {
      label: "Newly Launched Products",
      category: "newly-launched",
    },
    {
      label: "Top Rated Products",
      category: "top-rated",
    },
    {
      label: "Editor's Picks",
      category: "picks",
    },
  ];
  return (
    <div>
      <div className="overflow-x-auto mb-5">
        <ul
          role="tablist"
          className="flex items-center w-[32rem] mb-4 tabs tabs-bordered"
        >
          {featuredCategories.map((item, index) => (
            <li
              role="tab"
              className={`tab ${
                featured === item.category
                  ? "tab-active"
                  : featured === null && index === 0 && "tab-active"
              }`}
              key={item.category}
            >
              <Link to={`/?featured=${item.category}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      {tabsContentInfo.map((contentInfo) => (
        <TabContent key={contentInfo.id} tabsContentInfo={contentInfo} />
      ))}
    </div>
  );
};

export default TabTabContent;
