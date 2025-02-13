import { useState } from "react";

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    releaseYear: "",
    genre: "",
    director: "",
    actors: "",
    language: "",
    country: "",
    rating: "",
    plot: "",
    awards: "",
    posterUrl: "",
    trailerUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "releaseYear" || name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw "Failed to add movie";
      } else {
        const data = await response.json();
        console.log("Added Movie", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Release Year:</label>
        <br />
        <input
          type="number"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Genre:</label>
        <br />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Director:</label>
        <br />
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Actors:</label>
        <br />
        <input
          type="text"
          name="actors"
          value={formData.actors}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Language:</label>
        <br />
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Country:</label>
        <br />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Rating:</label>
        <br />
        <input
          type="text"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Plot:</label>
        <br />
        <input
          type="text"
          name="plot"
          value={formData.plot}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Awards:</label>
        <br />
        <input
          type="text"
          name="awards"
          value={formData.awards}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Poster URL:</label>
        <br />
        <input
          type="text"
          name="posterUrl"
          value={formData.posterUrl}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Trailer URL:</label>
        <br />
        <input
          type="text"
          name="trailerUrl"
          value={formData.trailerUrl}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
