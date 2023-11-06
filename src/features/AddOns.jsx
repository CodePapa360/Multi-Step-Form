function AddOns() {
  return (
    <>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <div>
        <label htmlFor="onlineService">
          <input type="checkbox" name="onlineService" id="onlineService" />

          <span>
            <h3>Online Service</h3>
            <p>Access to multiplayer games</p>
          </span>

          <p>+$1/mo</p>
        </label>

        <label htmlFor="largerStorage">
          <input type="checkbox" name="largerStorage" id="largerStorage" />

          <span>
            <h3>Larger Storage</h3>
            <p>Extra 1TB of cloud save</p>
          </span>

          <p>+$2/mo</p>
        </label>

        <label htmlFor="customizableProfile">
          <input
            type="checkbox"
            name="customizableProfile"
            id="customizableProfile"
          />

          <span>
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </span>

          <p>+$2/mo</p>
        </label>
      </div>
    </>
  );
}

export default AddOns;
