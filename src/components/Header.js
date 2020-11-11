import {
  Link
} from 'react-router-dom';

const Header = () => (
  <div>
    Header
    <ul>
      <li><Link to="/">ホーム</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
);
export default Header;