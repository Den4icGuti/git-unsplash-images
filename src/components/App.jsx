import { useState, useEffect } from 'react';
import requestSplash from 'service/api';
import Form from './SearchForm/SearchForm';
import Container from './Container';
import GalleryList from './GalleryList';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);

  const onFormSubmit = query => {
    setSearchQuery(query);
    setGallery([]);
    setPage(1);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchImg = async () => {
      try {
        const imgGal = await requestSplash(page, searchQuery);
        return setGallery(gallery => [...gallery, ...imgGal]);
      } catch (error) {
        return error.message;
      }
    };
    fetchImg();
  }, [gallery, page, searchQuery]);

  const api = requestSplash();
  console.log(api);

  return (
    <Container>
      <Form onsubmit={onFormSubmit} />
      <GalleryList img={gallery} />
    </Container>
  );
};
