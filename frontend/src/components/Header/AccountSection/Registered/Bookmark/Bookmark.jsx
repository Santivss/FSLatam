import "./Bookmark.css";
import bookmark_icon_amarillo from "../../../../../assets/uiIcons/bookmark_icon_amarillo.svg";
import bookmark_icon from "../../../../../assets/uiIcons/bookmark_icon.svg";
import { useEffect, useRef, useState } from "react";

const Bookmark = () => {
  const bookMarkIconRef = useRef(null);
  const bookMarkContainerRef = useRef(null);
  const [bookMarkNotificationStatus, setBookMarkNotificationStatus] =
    useState(true);
  const [bookMarkOptionsStatus, setBookMarkOptionsStatus] = useState(false);

  const handleBookMarkOptionsStatus = () => {
    setTimeout(() => {
      setBookMarkNotificationStatus(false);
    }, 500);
  };

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
        src={
          bookMarkNotificationStatus ? bookmark_icon_amarillo : bookmark_icon
        }
        alt=""
        className={`bookmark_icon ${
          bookMarkNotificationStatus ? "bookmark_icon-active" : ""
        }`}
        ref={bookMarkIconRef}
        onClick={() => {
          setBookMarkOptionsStatus(!bookMarkOptionsStatus);
          handleBookMarkOptionsStatus();
        }}
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
