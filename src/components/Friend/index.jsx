import './friend.css';

function Friend({ user }) {
  return (
    <li className="sidebar__friend">
      <img src={user.profilePicture} alt="" className="sidebar__friend--img" />
      <span className="sidebar__friend--name">{user.username}</span>
    </li>
  );
}

export default Friend;
