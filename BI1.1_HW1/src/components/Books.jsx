import useFetch from "../useFetch";

const Books = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/books");
  console.log(data);

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {data?.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
