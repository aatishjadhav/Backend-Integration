import { useState } from "react";
import useFetch from "../useFetch";

const Hotels = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const { data, loading, error } = useFetch("http://localhost:3000/hotels");
  console.log("All hotels", data);

  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(`http://localhost:3000/hotels/${hotelId}`, {
        method: "DELETE",
      });
      if (response) {
        setSuccessMsg("Hotel deleted successfully");
        window.location.reload();
      } else {
        setSuccessMsg("Failed to delete Hotel");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Hotels</h1>
      <ul>
        {data?.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name}{" "}
            <button onClick={() => handleDelete(hotel._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{successMsg}</p>
    </div>
  );
};

export default Hotels;
