import { useState } from 'react';
import { quizTypes } from '../utils/quizTypes';

export default function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      <nav aria-label="Breadcrumb" className="flex mb-4">
        <ul className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600 text-xs font-medium">
          {quizTypes.map((type, index) => {
            return (
              <li
                key={type.name}
                className={`flex h-10 items-center gap-1.5 px-4 transition 
              ${
                index === activeTabIndex
                  ? 'bg-primary text-white cursor-default'
                  : 'cursor-pointer hover:text-primary'
              }`}
                onClick={() => setActiveTabIndex(index)}
              >
                <span className="ml-1.5">{type.name}</span>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="ml-2">
        {quizTypes[activeTabIndex].component ?? <p>Coming Soon!</p>}
      </div>
    </>
  );
}
