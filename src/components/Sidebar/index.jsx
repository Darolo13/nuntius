import './sidebar.css';

import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from '@material-ui/icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__list">
          <li className="sidebar__list--item">
            <RssFeed className="sidebar__list--item-icon" />
            <span className="sidebar__list--item-text">Feed</span>
          </li>
          <li className="sidebar__list--item">
            <Chat className="sidebar__list--item-icon" />
            <span className="sidebar__list--item-text">Chats</span>
          </li>
          <li className="sidebar__list--item">
            <PlayCircleFilledOutlined className="sidebar__list--item-icon" />
            <span className="sidebar__list--item-text">Videos</span>
          </li>
          <li className="sidebar__list--item">
            <Group className="sidebar__list--item-icon" />
            <span className="sidebar__list--item-text">Groups</span>
          </li>
          <li className="sidebar__list--item">
            <Bookmark className="sidebar__list--item-icon" />
            <span className="sidebar__list--item-text">Bookmarks</span>
          </li>
          <li className="sidebar__list--item">
            <HelpOutline className="sidebar__list--item-icon" />
            <span className="sidebar__list--item-text">Questions</span>
          </li>
          <li className="sidebar__list--item">
            <WorkOutline className="sidebar__list--item-icon" />
            <span className="sidebar__list--item-text">Jobs</span>
          </li>
          <li className="sidebar__list--item">
            <Event className="sidebar__list--item-icon" />
            <span className="sidebar__list--item-text">Events</span>
          </li>
          <li className="sidebar__list--item">
            <School className="sidebar__list--item-icon" />
            <span className="sidebar__list--item-text">Courses</span>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
