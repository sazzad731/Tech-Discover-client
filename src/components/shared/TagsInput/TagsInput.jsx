import PropTypes from "prop-types";

const TagsInput = ({tags, setTags}) => {
  const handleTagInput = (e) => {
    const value = e.target.value;
    if (e.key !== "Enter" && e.key !== " ") {
      return;
    }
    if (!value.trim()) {
      return;
    }
    setTags([ ...tags, value ])
    e.target.value = "";
  };

  const removeTags = (index)=>{
    setTags(tags.filter((el, i) => i !== index));
  }
  return (
    <div>
      <div className="label">
        <span className="label-text text-lg font-medium">Add Topics</span>
      </div>
      <div className="bg-white rounded-md p-2 border-2 flex items-center flex-wrap gap-3">
        {tags.map((tag, index) => (
          <div key={tag} className="bg-base-300 inline-block py-2 px-3 rounded-full">
            <span className="font-medium">{tag}</span>
            <span onClick={()=>removeTags(index)} className="h-6 w-6 pb-[0.08rem] ms-2 bg-zinc-700 inline-flex items-center justify-center text-white rounded-full cursor-pointer text-lg font-semibold">
              &times;
            </span>
          </div>
        ))}
        <input
          onKeyDown={handleTagInput}
          type="text"
          placeholder="Add a tag"
          className="flex-1 py-2 border-none outline-none ms-2"
        />
      </div>
    </div>
  );
};

TagsInput.propTypes = {
  tags: PropTypes.array,
  setTags: PropTypes.func,
}

export default TagsInput;