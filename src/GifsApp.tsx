export const GifsApp = () => {
  return (
    <>
      {/* Header */}

      <div className="content-center">
        <h1>Gifs App</h1>
        <p>Discover amazing gifs!</p>
      </div>

      {/* Search */}
      <div className="search-container">
        <input type="text" placeholder="Search gifs..." />
        <button>Search</button>
      </div>

      {/* Busquedas previas */}
      <div className="previous-searches">
        <h2>Previous Searches</h2>
        <ul className="previous-searches-list">
          <li>funny</li>
          <li>cats</li>
          <li>dance</li>
        </ul>
      </div>

      {/* Gifs */}
      <div className="gifs-container">
        <div className="gif-card">
          <img
            src="https://media.giphy.com/media/3o7TKsQ5a18900624M/giphy.gif"
            alt="Gif 1"
          />
        </div>
        <div className="gif-card">
          <img
            src="https://media.giphy.com/media/3o7TKsQ5a18900624M/giphy.gif"
            alt="Gif 2"
          />
        </div>
        <div className="gif-card">
          <img
            src="https://media.giphy.com/media/3o7TKsQ5a18900624M/giphy.gif"
            alt="Gif 3"
          />
        </div>
      </div>
    </>
  );
};
