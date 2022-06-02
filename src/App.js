import React from 'react';

import CardListPage from './components/Pages/CardListPage';
import CompleteAddCardPage from './components/Pages/CompleteAddCardPage';
import AddCardPage from './components/Pages/AddCardPage';

import { CardContext, PageContext } from './context';
import usePage from './hooks/usePage';
import useCard from './hooks/useCard';

function App() {
  const pageState = usePage();
  const cardState = useCard();

  return (
    <div className="root">
      <PageContext.Provider value={pageState}>
        <CardContext.Provider value={cardState}>
          <AddCardPage />
          <CompleteAddCardPage />
          <CardListPage />
        </CardContext.Provider>
      </PageContext.Provider>
    </div>
  );
}

export default App;
