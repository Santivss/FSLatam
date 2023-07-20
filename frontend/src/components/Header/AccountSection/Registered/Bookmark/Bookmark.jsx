import "./Bookmark.css";

import { useIconsStore } from "../../../../../store/ui_icons_store";

const Bookmark = () => {
  const { ui_icons } = useIconsStore();
  return (
    <div>
      <img src={ui_icons.bookmark_icon} alt="" className="bookmark_icon" />
    </div>
  );
};

export default Bookmark;
