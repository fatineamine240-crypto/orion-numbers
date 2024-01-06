import { Link, useRouteError } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import wrong from '../assets/error-run.svg';
import notFound from '../assets/error-dog.svg';

export default function Error() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('global');
  const error = useRouteError();

  const containerClasses =
    'w-4xl mx-auto p-4 mt-10 flex flex-col items-center space-y-5 text-xl';
  const btnClasses =
    'text-sm bg-teal-500 hover:bg-teal-700 transition-colors duration-300 text-white rounded p-2';

  return (
    <main className={containerClasses}>
      <img
        src={error.status === 404 ? notFound : wrong}
        alt="404"
        className="h-80"
      />
      <h2>
        {error.status === 404
          ? t('error.pageNotFound')
          : t('error.somethingWentWrong')}
        !
      </h2>
      <Link to="/" className={btnClasses}>
        {t('error.backHome')}
      </Link>
    </main>
  );
}
