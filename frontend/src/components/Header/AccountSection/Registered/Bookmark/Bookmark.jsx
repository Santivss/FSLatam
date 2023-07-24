import "./Bookmark.css";

import { useIconsStore } from "../../../../../store/ui_icons_store";
import { useEffect, useRef, useState } from "react";

const Bookmark = () => {
  const { ui_icons } = useIconsStore();
  const bookMarkIconRef = useRef(null);
  const bookMarkContainerRef = useRef(null);
  const [bookMarkOptionsStatus, setBookMarkOptionsStatus] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        bookMarkIconRef.current &&
        bookMarkContainerRef.current &&
        !bookMarkIconRef.current.contains(event.target) &&
        !bookMarkContainerRef.current.contains(event.target)
      ) {
        setBookMarkOptionsStatus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bookMark__container">
      <img
        src={ui_icons.bookmark_icon}
        alt=""
        className="bookmark_icon"
        ref={bookMarkIconRef}
        onClick={() => setBookMarkOptionsStatus(true)}
      />
      {bookMarkOptionsStatus ? (
        <div
          className={`bookMarkOptions__container ${
            bookMarkOptionsStatus ? "bookMarkOptions__container__active" : ""
          }`}
          ref={bookMarkContainerRef}
        >
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
        </div>
      ) : null}
    </div>
  );
};

export default Bookmark;
