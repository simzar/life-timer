import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import differenceInMinutes from 'date-fns/differenceInMinutes';

import './App.css';
import useInterval from './useInterval';

function App() {
  const { t } = useTranslation();
  const startDate = new Date("Nov 20 2022 01:00:00 GMT+0200");

  const [minutesSince, setMinutesSince] = useState<number>(differenceInMinutes(Date.now(), startDate));
  const hoursSince = Math.floor(minutesSince / 60);
  const daysSince = Math.floor(hoursSince / 24);

  useInterval(() => {
    setMinutesSince(differenceInMinutes(Date.now(), startDate));
  }, 1000 * 10);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {t('days', { count: daysSince })}, {t('hours', { count: hoursSince - daysSince * 24 })} and {t('minutes', { count: minutesSince - hoursSince * 60 })} have passed.
        </p>
      </header>
    </div>
  );
}

export default App;
