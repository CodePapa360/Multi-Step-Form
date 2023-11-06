function Plans() {
  return (
    <>
      <h2>Plans</h2>
      <p>You have the option for monthly or yearly billing.</p>

      <div>
        <label htmlFor="arcade">
          <span>
            <img src="/images/icon-arcade.svg" alt="Arcade" />
          </span>
          <span>
            <h3>Arcade</h3>
            <p>$9/mo</p>
          </span>
          <input type="radio" name="plan" id="arcade" />
        </label>

        <label htmlFor="advanced">
          <span>
            <img src="/images/icon-advanced.svg" alt="advanced" />
          </span>
          <span>
            <h3>Advanced</h3>
            <p>$12/mo</p>
          </span>
          <input type="radio" name="plan" id="advanced" />
        </label>

        <label htmlFor="pro">
          <span>
            <img src="/images/icon-pro.svg" alt="pro" />
          </span>
          <span>
            <h3>Pro</h3>
            <p>$15/mo</p>
          </span>
          <input type="radio" name="plan" id="pro" />
        </label>
      </div>

      <div>
        <label htmlFor="monthly">Monthly</label>
        <input type="radio" name="duration" id="monthly" />

        <label htmlFor="yearly">Monthly</label>
        <input type="radio" name="duration" id="yearly" />
      </div>
    </>
  );
}

export default Plans;
