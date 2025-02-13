import useFetch from "../useFetch";

const BookByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/books/authors/${author}`
  );

  console.log("data by author", data);

  return data ? (
    <div>
      <h2>Book By {data.book[0].author}</h2>
      <ul>
        <li>{data.book[0].title}</li>
        <li>{data.book[1].title}</li>
      </ul>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default BookByAuthor;
