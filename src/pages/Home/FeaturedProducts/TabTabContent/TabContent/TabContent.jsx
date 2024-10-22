import PropTypes from "prop-types";
import { useState } from "react";
import { GoComment } from "react-icons/go";
import { TiArrowSortedUp } from "react-icons/ti";
import { Link } from "react-router-dom";


const TabContent = ({ tabsContentInfo }) => {
  const { productImage, productName, productTitle, comments, topics, upvote } = tabsContentInfo;
  const [ upvotes, setUpVote ] = useState(upvote);

  return (
    <div className="w-full flex  items-center justify-between mb-5">
      <div
        className="flex  items-center w-full cursor-pointer"
      >
        <Link to="/product-details">
          <img
            className="me-4 rounded-md w-10 md:w-12"
            src={productImage}
            alt={productName}
          />
        </Link>
        <div>
          <Link to="/product-details">
            <h3 className="text-sm md:text-base">
              <span className="font-semibold">{productName}</span> —{" "}
              {productTitle}
            </h3>
          </Link>
          <div className="flex">
            <Link
              to="/product-details"
              className="me-3 flex items-center hover:text-red-500"
            >
              <GoComment className="w-4 h-4 text-gray-400 font-bold me-1" />{" "}
              {comments}
            </Link>
            <div className="flex">
              {window.screen.width <= 768 ? (
                <div className="text-gray-500">
                  <span className="mx-3">•</span>
                  <Link className="hover:underline" to={`/topics/${topics[0]}`}>
                    {topics[0]}
                  </Link>
                </div>
              ) : (
                topics.map((topic) => (
                  <div key={topic} className="text-gray-500">
                    <span className="mx-3">•</span>
                    <Link className="hover:underline" to={`/topics/${topic}`}>
                      {topic}
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setUpVote(upvotes + 1)}
        className="px-3 pb-2 rounded-lg bg-base-300"
      >
        <TiArrowSortedUp size={30} />
        {upvotes}
      </button>
    </div>
  );
};

TabContent.propTypes = {
  tabsContentInfo: PropTypes.object
};

export default TabContent;
