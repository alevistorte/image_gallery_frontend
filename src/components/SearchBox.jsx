import { Search } from "@mui/icons-material";
import CategoriesList from "./CategoriesList";
import PropTypes from "prop-types";
import { Form, Link } from "react-router-dom";

export default function SearchBox({ short = false }) {
  return (
    <div
      className={`flex h-full m-2 ${
        short ? "" : "justify-center items-center"
      }`}
    >
      <div>
        <div className={`${short && "flex"}`}>
          <Link to="/">
            <div className="flex justify-center mb-4">
              <img
                src="src/assets/website-banner_1.png"
                alt="ymjewelry-logo"
                className={`${short ? "h-10" : "h-20"}`}
              />
            </div>
          </Link>
          <Form id="search-form" role="search" action="/search">
            <div className="flex border-2 rounded-full border-gray-500 p-2 hover:bg-gray-200 h-fit w-full">
              <div className="text-gray-500">
                <Search />
              </div>
              <label htmlFor="search-box" className="w-full">
                <input
                  type="search"
                  id="search-box"
                  name="q"
                  placeholder="What are you looking for?"
                  className="w-full outline-none bg-inherit italic"
                />
              </label>
            </div>
          </Form>
        </div>

        <div>
          <CategoriesList />
        </div>
      </div>
    </div>
  );
}

SearchBox.propTypes = {
  short: PropTypes.bool,
};
