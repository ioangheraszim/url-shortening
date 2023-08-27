import React, { useEffect, useState } from "react";
import "../scss/AddLinks.scss";

const AddLinks = () => {
  // states
  const [savedLinks, setSavedLinks] = useState([
    {
      id: crypto.randomUUID(),
      text: "https://testlink.com/signup",
      newShortLink: "https://shrtco.de/dummyText123",
    },
  ]);

  const [linkValue, setLinkValue] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [copyClicked, setCopyClicked] = useState(false);

  // functions
  const getErrorInput = () =>
    !isValidHttpLink(linkValue) && linkValue.trim() !== "" ? "error" : "";
  const getErrorLabel = () =>
    !isValidHttpLink(linkValue) && linkValue.trim() !== "" ? "show" : "";

  // Shortens link
  const handleShortenLink = async () => {
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${linkValue}`
      );
      const data = await response.json();

      if (data.ok) {
        const newShortLink = data.result.full_short_link;
        setShortURL(newShortLink);
        setSavedLinks([
          ...savedLinks,
          {
            id: crypto.randomUUID(),
            text: linkValue,
            newShortLink,
          },
        ]);
      } else {
        setShortURL("");
      }
    } catch (error) {
      console.error("Ann error has occured", error);
      setShortURL("");
    }
  };

  // Regex to check if there is a valid link input
  const isValidHttpLink = (link) => {
    const httpPattern = /^https?:\/\//i;
    return httpPattern.test(link);
  };

  // copies short link to clip board
  const copyToClipboard = (newShortLink) => {
    navigator.clipboard.writeText(newShortLink);
    setCopyClicked(true);

    setTimeout(() => {
      setCopyClicked(false);
    }, 500);
  };

  // save link so they can load after reload
  useEffect( () => {
    localStorage.setItem("savedLinks", JSON.stringify(savedLinks));
  }, [savedLinks])

  // load links saved to local storage 
  useEffect(() => {
    const storeLinks = localStorage.getItem("savedLinks")
    if(storeLinks) {
      setSavedLinks(JSON.parse(storeLinks))
    }
  }, [])


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
            <label
              htmlFor="linkInput"
              className={`error-label ${getErrorLabel()}`}
            >
              Please add a link
            </label>
          </div>
          <div className="the-button">
            <button onClick={handleShortenLink} className="short-btn">
              Shorten It!
            </button>
          </div>
        </div>
      </section>
      {savedLinks.map((link) => {
        return (
          <section className="show-links" key={link.id}>
            <h2 className="long-url">{link.text}</h2>
            <a href={link.newShortLink} className="short-url">
              {link.newShortLink}
            </a>
            <button
              onClick={() => copyToClipboard(link.newShortLink)}
              className={`copy-btn ${copyClicked ? "copied" : ""}`}
            >
              {copyClicked ? "Copied" : "Copy"}
            </button>
          </section>
        );
      })}
    </>
  );
};

export default AddLinks;
