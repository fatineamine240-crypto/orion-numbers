import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="flex items-center justify-center px-6 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2">
          <p className="text-xs">Number</p>
          <img className="w-auto h-[4rem]" src={logo} alt="Logo" />
          <p className="text-xs">Ninjas</p>
        </Link>
      </div>

      <hr className="border-gray-200 dark:border-gray-700" />
    </header>
  );
}
