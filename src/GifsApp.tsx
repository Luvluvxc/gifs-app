import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";




export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Gifs App"
        description="Discover amazing gifs!"
      />


      {/* Search */}
      <SearchBar
        placeholder="placeholder"
        onSearch={(query) => {
          console.log("Searching for:", query);
        }
        
        }
      />

      {/* Busquedas previas */}
      <PreviousSearches previousSearches={["cats", "dogs", "funny"]} />

      {/* Gifs */}
      
    </>
  );
};
