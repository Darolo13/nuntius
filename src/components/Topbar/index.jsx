import './topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="topbar-left__logo">nuntius</span>
      </div>
      <div className="topbar-center">
        <span className="topbar-center__search-bar">
          <Search className="topbar-center__search-bar--search-icon" />
          <input
            placeholder="Search for a friend, post or video"
            className="topbar-center__search-input"
          />
        </span>
      </div>
      <div className="topbar-right">
        <div className="topbar-right__link">
          <span className="topbar-right__link--item">Homepage</span>
          <span className="topbar-right__link--item">Timeline</span>
        </div>
        <div className="topbar-right__icons">
          <div className="topbar-right__icons--item">
            <Person />
            <span className="topbar-right__icon--badge">1</span>
          </div>
          <div className="topbar-right__icons--item">
            <Chat />
            <span className="topbar-right__icon--badge">2</span>
          </div>
          <div className="topbar-right__icons--item">
            <Notifications />
            <span className="topbar-right__icon--badge">1</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt=""
          className="topbar-right__image"
        />
      </div>
    </div>
  );
}

export default Topbar;
