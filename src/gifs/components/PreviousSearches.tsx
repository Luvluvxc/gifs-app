interface previousSearchesProps {
  previousSearches: string[];
}

export const PreviousSearches = ({ previousSearches }: previousSearchesProps) => {
  return (
    <div className="previous-searches">
        <h2>Previous Searches</h2>
        <ul className="previous-searches-list">
          {previousSearches.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </div>
  )
}
