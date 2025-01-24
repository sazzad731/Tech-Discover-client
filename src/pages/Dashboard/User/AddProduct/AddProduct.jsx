import { useState } from "react";
import TagsInput from "../../../../components/shared/TagsInput/TagsInput";


const AddProduct = () => {
  const [ tags, setTags ] = useState([]);
  return (
    <div>
      <form>
        <h2 className="text-center text-2xl font-semibold">Add Product</h2>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg font-medium">
              What is your product name?
            </span>
          </div>
          <input
            type="text"
            placeholder="Enter you product name"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-lg font-medium">
              Pick a product image
            </span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text text-lg font-medium">Your bio</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </label>
        <TagsInput tags={tags} setTags={setTags} />
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg font-medium">
              Product or Website link
            </span>
          </div>
          <input
            type="url"
            placeholder="Enter your link"
            className="input input-bordered w-full"
          />
        </label>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;