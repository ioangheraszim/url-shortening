import React from "react";
import "../scss/AddLinks.scss";
const AddLinks = () => {
  return (
    <>
      <section className="add-link">
        <div className="input-container">
          <input
            className="link-input"
            type="text"
            placeholder="Shorten link here..."
          />
          <label className="error-label">Please add a link</label>
          <button className="short-btn">Shorten It!</button>
        </div>
      </section>
      <section className="show-links">
        <h2 className="long-url">http://127.0.0.1:50568/testing.html</h2>
        <h2 className="short-url">https://rel.ink/k4lkyk</h2>
        <button className="copy-btn">Copy</button>
      </section>
    </>
  );
};

export default AddLinks;
