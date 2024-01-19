import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { quizComponents } from '../utils/quizTypes';
import { Link } from 'react-router-dom';

export default function Home() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('global');
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const quizType = urlParams.get('type');
    const quizTypeIndex = quizComponents.findIndex(
      (item) => item.name === quizType
    );

    if (quizTypeIndex !== -1) {
      setActiveTabIndex(
        quizComponents.findIndex((item) => item.name === quizType)
      );
    }
  }, []);

  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800 transition-colors duration-300 mb-4 rounded">
        <ul className="container flex flex-wrap items-center gap-6 p-4 md:px-6 md:py-5 mx-auto text-gray-600 capitalize dark:text-gray-200 transition-colors duration-300">
          {quizComponents.map((type, index) => {
            return (
              <li
                key={type.name}
                className={`cursor-pointer transition-colors duration-300 transform border-b-2 ${
                  index === activeTabIndex
                    ? 'text-gray-800 dark:text-gray-100 border-teal-500'
                    : 'border-transparent hover:text-gray-800 dark:hover:text-gray-100 hover:border-teal-500'
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
                <Link to={`/?type=${type.name}`}>{t(`math.${type.name}`)}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <section>
        {quizComponents[activeTabIndex].component ?? <p>{t('general.soon')}</p>}
      </section>

      {/* <nav aria-label="Breadcrumb" className="flex mb-4">
        <ul className="flex overflow-hidden rounded-lg border border-gray-200 text-xs font-medium">
          {quizComponents.map((type, index) => {
            return (
              <li
                key={type.name}
                className={`flex h-10 items-center gap-1.5 px-4 transition-colors duration-300 cursor-pointer ${
                  index === activeTabIndex
                    ? 'bg-gray-200 dark:bg-gray-100 dark:text-gray-700'
                    : ''
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
                <span className="ml-1.5">{type.name}</span>
              </li>
            );
          })}
        </ul>
      </nav> */}
    </>
  );
}
