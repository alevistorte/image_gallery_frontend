function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3">
        <div className="flex justify-center mb-4">
          <img
            src="src/assets/website-banner_1.png"
            alt="ymjewelry-logo"
            className="h-20"
          />
        </div>
        <div className="border-2 rounded-full border-gray-500 p-2 hover:bg-gray-200">
          <label htmlFor="search-box" className="w-full">
            <input
              type="text"
              id="search-box"
              placeholder="What are you looking for?"
              className="w-full outline-none bg-inherit"
            />
          </label>
        </div>
        <div className="flex justify-evenly mt-4">
          {[
            "rings",
            "necklaces",
            "earrings",
            "bracelets",
            "engagement ring",
            "pendants",
          ].map((c) => (
            <button key={c} className="bg-gray-200 rounded-xl px-2 py-1">
              <p className="text-sm uppercase">{c}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
