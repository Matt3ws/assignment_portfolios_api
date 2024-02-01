'use client';
import { useSearchParams } from 'next/navigation';
import SearchField from '../searchField/searchField';
import styles from './imageSearch.module.css';
import { useEffect, useState } from 'react';
import SearchResults from '../searchResults/searchResults';

const ImageSearch = () => {
  const searchParams = useSearchParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    fetch('http://localhost:3000/api/images?searchterm=' + params.get('searchterm'))
      .then((res) => res.json())
      .then((data) => {
        setResult(data[0]);
      });
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <h3>Search</h3>
      <SearchField></SearchField>
      <SearchResults results={result}></SearchResults>
    </div>
  );
};
export default ImageSearch;
