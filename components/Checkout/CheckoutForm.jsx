"use client";

const CheckoutForm = ({ formData, setFormData, dictionary }) => {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="fName" className="text-gray-600">
            {dictionary.firstName}
            <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            name="fName"
            id="fName"
            required
            defaultValue={formData.fName}
            onChange={handleChange}
            className="input-box"
          />
        </div>
        <div>
          <label htmlFor="lName" className="text-gray-600">
            {dictionary.lastName}
            <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            name="lName"
            id="lName"
            required
            defaultValue={formData.lName}
            onChange={handleChange}
            className="input-box"
          />
        </div>
      </div>
      <div>
        <label htmlFor="street" className="text-gray-600">
          {dictionary.streetAddress}
        </label>
        <input
          type="text"
          name="street"
          required
          defaultValue={formData.street}
          onChange={handleChange}
          id="street"
          className="input-box"
        />
      </div>
      <div>
        <label htmlFor="city" className="text-gray-600">
          {dictionary.city}
        </label>
        <input
          type="text"
          name="city"
          required
          defaultValue={formData.city}
          onChange={handleChange}
          id="city"
          className="input-box"
        />
      </div>
      <div>
        <label htmlFor="state" className="text-gray-600">
          {dictionary.countryRegion}
        </label>
        <input
          type="text"
          name="state"
          required
          defaultValue={formData.state}
          onChange={handleChange}
          id="state"
          className="input-box"
        />
      </div>
      <div>
        <label htmlFor="zip" className="text-gray-600">
          ZIP
        </label>
        <input
          type="number"
          name="zip"
          required
          defaultValue={formData.zip}
          onChange={handleChange}
          id="zip"
          className="input-box"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-gray-600">
          {dictionary.phoneNumber}
        </label>
        <input
          type="text"
          name="phone"
          required
          defaultValue={formData.phone}
          onChange={handleChange}
          id="phone"
          className="input-box"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-gray-600">
          {dictionary.emailAddress}
        </label>
        <input
          type="email"
          name="email"
          required
          defaultValue={formData.email}
          onChange={handleChange}
          id="email"
          className="input-box"
        />
      </div>
      <div>
        <label htmlFor="company" className="text-gray-600">
          {dictionary.company}
        </label>
        <input
          type="text"
          name="company"
          defaultValue={formData.company}
          onChange={handleChange}
          id="company"
          className="input-box"
        />
      </div>
    </form>
  );
};

export default CheckoutForm;
