import styles from './searchResults.module.css';
const SearchResults = ({ results }) => {
  const resultItems = results.data;

  console.log(results);
  return (
    <div className={styles.container}>
      {resultItems?.map((result, index) => {
        return <div key={index}> {result.author} </div>;
      })}
    </div>
  );
};
export default SearchResults;
