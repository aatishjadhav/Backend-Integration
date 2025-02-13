import { useState } from "react";
import useFetch from "../useFetch";

const Books = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const { data, loading, error } = useFetch("http://localhost:3000/books");
  console.log(data);

  const handleDelete = async (bookId) => {
    try {
      const data = await fetch(`http://localhost:3000/books/delete/${bookId}`, {
        method: "DELETE",
      });
      if (data) {
        setSuccessMsg("Book deleted successfully");
        window.location.reload();
      } else {
        setSuccessMsg("Failed to delete Book");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {data?.map((book) => (
          <li key={book._id}>
            {book.title}{" "}
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{successMsg}</p>
    </div>
  );
};

export default Books;
