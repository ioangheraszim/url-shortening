import React, { useState } from "react";
import "../scss/AddLinks.scss";

const AddLinks = () => {
  // states
  const [links, setLinks] = useState([
    {
      id: crypto.randomUUID(),
      text: "https://testlink.com/signup",
    },
  ]);

  const [shorten, setShorten] = useState("");
  const [linkValue, setLinkValue] = useState("");

  const [shortenedLink, setShortenedLink] = useState(null);
  const [linkInfo, setLinkInfo] = useState(null);

  const getErrorInput = () =>
    !isValidHttpLink(linkValue) && linkValue.trim() !== "" ? "error" : "";
  const getErrorLabel = () =>
    !isValidHttpLink(linkValue) && linkValue.trim() !== "" ? "show" : "";

  // functions
  const addLink = () => {
    if (isValidHttpLink(linkValue) && linkValue.trim() !== "") {
      setLinks((prevLinks) => [
        ...prevLinks,
        {
          id: crypto.randomUUID(),
          text: linkValue,
        },
      ]);
      setLinkValue("");
    }
  };

  const isValidHttpLink = (link) => {
    const httpPattern = /^https?:\/\//i;
    return httpPattern.test(link);
  };

  return (
    <>
      <section className="add-link">
        <div className="input-container">
          <div className="the-input">
            <input
              id="linkInput"
              type="text"
              value={linkValue}
              onChange={(e) => setLinkValue(e.target.value)}
              className={`link-input ${getErrorInput()}`}
              placeholder="Shorten link here..."
            />
            <label htmlFor="linkInput"className={`error-label ${getErrorLabel()}`}>
              Please add a link
            </label>
          </div>
          <div className="the-button">
            <button onClick={addLink} className="short-btn">
              Shorten It!
            </button>
          </div>
        </div>
      </section>
      {links.map((link) => {
        return (
          <section className="show-links" key={link.id}>
            <h2 className="long-url">{link.text}</h2>
            <h2 className="short-url">https://rel.ink/k4lkyk</h2>
            <button className="copy-btn">Copy</button>
          </section>
        );
      })}
    </>
  );
};

export default AddLinks;
