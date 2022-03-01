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
          <Search />
          <input
            placeholder="Search for a friend, post or video"
            className="topbar-center__search-input"
          />
        </span>
      </div>
      <div className="topbar-right">
        <div className="topbar__link">
          <div className="topbar__link--item">Homepage</div>
          <div className="topbar__link--item">Timeline</div>
        </div>
        <div className="topbar__icons">
          <div className="topbar__icons--item">
            <Person />
            <span className="topbar__icon--badge">1</span>
          </div>
          <div className="topbar__icons--item">
            <Chat />
            <span className="topbar__icon--badge">2</span>
          </div>
          <div className="topbar__icons--item">
            <Notifications />
            <span className="topbar__icon--badge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbar__image" />
      </div>
    </div>
  );
}

export default Topbar;
