function BoookCard({ id, image, name, genre, author }) {
    return (
      <div className="book-card ">
          <img src={image} alt={name} className="book-image" />
          <h1 className="book-title">{name}</h1>
          <h2 className="book-genre">{genre}</h2>
          <h3 className="book-author">{author}</h3>
      </div>
    )
  }
  
  export default BoookCard