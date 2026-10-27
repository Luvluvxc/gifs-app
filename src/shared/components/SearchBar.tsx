interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ onSearch, placeholder }: SearchBarProps) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder || "Search gifs..."} />
      <button onClick={
        () => onSearch((document.querySelector('input') as HTMLInputElement).value)
      }>Search</button>
    </div>
  );
};
