import GalleryItem from 'components/GalleryItem/GalleryItem';

const GalleryList = ({ img }) => {
  return (
    <ul>
      {img.map((id, small, description) => (
        <GalleryItem key={id} src={small} description={description} />
      ))}
    </ul>
  );
};

export default GalleryList;
