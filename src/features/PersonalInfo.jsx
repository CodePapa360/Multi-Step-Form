function PersonalInfo() {
  return (
    <>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number</p>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g Stephen King"
        />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="e.g stephenking.lorem.com"
        />
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="e.g +1 234 567 890"
        />
      </div>
    </>
  );
}

export default PersonalInfo;
