import useFetch from "../useFetch";

const BookByTitle = ({ bookTitle }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/books/${bookTitle}`
  );
  console.log("data by title", data);

  return data ? (
    <div>
      <h2>{data.book[0].title}</h2>
      <p>
        <strong>Author:</strong> {data.book[0].author}
      </p>
      <p>
        <strong>Release Year:</strong> {data.book[0].publishedYear}
      </p>
      <p>
        <strong>Genre:</strong> {data.book[0].genre.join(", ")}
      </p>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default BookByTitle;
