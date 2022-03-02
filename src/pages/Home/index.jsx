import './home.css';

// components
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="home">
        <Sidebar />
      </div>
    </>
  );
}
