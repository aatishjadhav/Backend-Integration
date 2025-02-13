import useFetch from "../useFetch";

const HotelByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/hotels/${title}`
  );
  console.log("data by title", data);

  return data ? (
    <div>
      <h2>{data[0].name}</h2>
      <p>
        <strong>Location:</strong> {data[0].location}
      </p>
      <p>
        <strong>Rating:</strong> {data[0].rating}
      </p>
      <p>
        <strong>Price Range:</strong> {data[0].priceRange}
      </p>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default HotelByTitle;
