const GalleryItem = ({ src, description }) => {
  return (
    <li>
      <img src={src} alt="" />
      <div>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default GalleryItem;
