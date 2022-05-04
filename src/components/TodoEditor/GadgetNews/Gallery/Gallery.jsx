import { useState, useEffect } from 'react';
import { fetchImg } from 'services/api';
import SearchForm from '../SearchForm';
import styles from '../Gallery/Gallery.module.css';

const News = () => {
  const [gallery, setGallery] = useState([]);
  const [query, setQurey] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const onLoadPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const api = fetchImg();
  console.log(api);
  useEffect(() => {
    Load();
    try {
      fetchImg(query, page).then(responseGallery => {
        setGallery(prevGallery => [...prevGallery, ...responseGallery]);
      });
    } catch (error) {
      return error.message;
    } finally {
      Load();
      onHandleScroll();
    }
  }, [query, page]);

  const onHandleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const Load = () => {
    setIsloading(isLoading => !isLoading);
  };

  const onChangeQuery = query => {
    setQurey(query);
    setPage(1);
    setGallery([]);
    setError(null);
  };

  return (
    <div>
      <SearchForm onSubmit={onChangeQuery} />

      <ul className={styles.listItem}>
        {gallery.map(art => (
          <li key={art.id} className={styles.item}>
            <div className={styles.boxDescr}>
              <img src={art.urls.small} alt="" />

              <p>Description: {art.description}</p>
              {!art.description && <p>No info</p>}
              <p>Likes: {art.likes}</p>
            </div>
          </li>
        ))}
      </ul>
      {error && <div>The search has not given any results</div>}
      {gallery === 0 && <>End collection....</>}
      {gallery.length > 0 && (
        <button
          className={styles.btnLoad}
          type="button"
          onClick={() => onLoadPage()}
        >
          Load more...
        </button>
      )}

      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default News;
//  fetchArticles().then(responseArt => setGallery(responseArt))
//
//  );
