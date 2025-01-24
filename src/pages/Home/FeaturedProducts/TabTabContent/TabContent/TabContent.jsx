import PropTypes from "prop-types";
import { useState } from "react";
import { GoComment } from "react-icons/go";
import { TiArrowSortedUp } from "react-icons/ti";
import { Link } from "react-router-dom";


const TabContent = ({ tabsContentInfo }) => {
  const { image, name, title, comments, topics, upvote } = tabsContentInfo;
  const [ upvotes, setUpVote ] = useState(upvote);

  return (
    <div className="w-full flex items-center justify-between mb-5 md:p-5 md:backdrop-blur-md md:shadow-lg md:rounded-lg md:bg-white/25">
      <div className="flex items-center w-full cursor-pointer">
        <Link to="/product-details">
          <img className="mr-3 rounded-md md:w-12" src={image} alt={name} />
        </Link>
        <div className="me-2 md:me-0 ms-2 md:ms-0">
          <Link to="/product-details">
            <h3 className="text-sm md:text-base font-semibold">{name}</h3>
            <p>{title}</p>
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
        className="flex flex-col items-center justify-center px-3 pb-1 rounded-lg bg-base-300"
      >
        <TiArrowSortedUp className="w-6 h-6 md:w-10 md:h-10" />
        {upvotes}
      </button>
    </div>
  );
};

TabContent.propTypes = {
  tabsContentInfo: PropTypes.object
};

export default TabContent;
