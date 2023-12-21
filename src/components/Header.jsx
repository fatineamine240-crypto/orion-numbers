import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="flex items-center justify-center">
        <Link to="/" className="flex items-center gap-2">
          <span>Number</span>
          <img className="w-auto h-[4rem]" src={logo} alt="Logo" />
          <span>Ninjas</span>
        </Link>
      </div>
    </header>
  );
}
