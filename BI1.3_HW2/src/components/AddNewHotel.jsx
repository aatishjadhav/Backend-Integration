import { useState } from "react";

const AddNewHotel = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: "",
    isParkingAvailable: "",
    isWifiAvailable: "",
    isPoolAvailable: "",
    isSpaAvailable: "",
    isRestaurantAvailable: "",
    photos: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        console.log("Failed to post data");
      } else {
        const data = await response.json();
        console.log("Added new hotel successfully", data);
      }
    } catch (error) {
      throw "Failed to add new hotel data";
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Category:</label>
        <br />
        <select
          name="category"
          id=""
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />

        <label htmlFor="">Location:</label>
        <br />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Rating:</label>
        <br />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Website:</label>
        <br />
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Phone Number:</label>
        <br />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Checkin Time:</label>
        <br />
        <input
          type="text"
          name="checkInTime"
          value={formData.checkInTime}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Checkout Time:</label>
        <br />
        <input
          type="text"
          name="checkOutTime"
          value={formData.checkOutTime}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Amenities:</label>
        <br />
        <input
          type="text"
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="">Price Range:</label>
        <br />
        <select
          name="priceRange"
          onChange={handleChange}
          value={formData.priceRange}
          id=""
        >
          <option value="$$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />

        <input
          type="checkbox"
          name="reservationsNeeded"
          value={formData.reservationsNeeded}
          onChange={handleChange}
        />
        <label htmlFor="">Reservation:</label>

        <br />
        <br />

        <input
          type="checkbox"
          name="isParkingAvailable"
          value={formData.isParkingAvailable}
          onChange={handleChange}
        />
        <label htmlFor="">Parking:</label>

        <br />
        <br />

        <input
          type="checkbox"
          name="isWifiAvailable"
          value={formData.isWifiAvailable}
          onChange={handleChange}
        />
        <label htmlFor="">Wi-Fi:</label>

        <br />
        <br />

        <input
          type="checkbox"
          name="isPoolAvailable"
          value={formData.isPoolAvailable}
          onChange={handleChange}
        />
        <label htmlFor="">Pool:</label>

        <br />
        <br />

        <input
          type="checkbox"
          name="isSpaAvailable"
          value={formData.isSpaAvailable}
          onChange={handleChange}
        />
        <label htmlFor="">Spa:</label>

        <br />
        <br />

        <input
          type="checkbox"
          name="isRestaurantAvailable"
          value={formData.isRestaurantAvailable}
          onChange={handleChange}
        />
        <label htmlFor="">Restaurant:</label>

        <br />
        <br />

        <input
          type="checkbox"
          name="photos"
          value={formData.photos}
          onChange={handleChange}
        />
        <label htmlFor="">Photos:</label>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewHotel;
