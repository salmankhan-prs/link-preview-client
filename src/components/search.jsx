import React, { useContext, useState } from "react";
import { MetadataContext } from "../metadata/metadataContext";
import Alert from "./Alert";

const Search = () => {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(false);
  const { fetchMetaData } = useContext(MetadataContext);

  const handleClick = (e) => {
    setText(e.target.value);
  };
  const handleAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 2000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text == "") {
      handleAlert();
    } else {
      setText("");
      fetchMetaData(text);
    }
  };
  return (
    <main className="  container mx-auto px-3 pb-12 pt-20">
      <div className="grid  grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-2 gap-8">
        <div>
          <form>
            <div className="form-control">
              {alert && <Alert />}
              <div className="relative">
                <input
                  type="text"
                  placeholder=" Enter a website name to start ..."
                  value={text}
                  onChange={handleClick}
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg  "
                >
                  GO
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Search;
