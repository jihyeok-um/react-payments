import { useState, useEffect } from 'react';

import { DEFAULT_ROUTE_INFO, PAGE } from '../constants';

function usePage() {
  const [page, setPage] = useState(PAGE.ADD_CARD);
  const [tempRouter, setTempRouter] = useState(DEFAULT_ROUTE_INFO);

  const pageState = {
    page,
    setPage,
    tempRouter,
  };

  useEffect(() => {
    if (page === PAGE.ADD_CARD) {
      setTempRouter({ addCard: 'app', completeAddCard: 'app hide', cardList: 'app hide' });
    }
    if (page === PAGE.COMPLETE_ADD_CARD) {
      setTempRouter({ addCard: 'app hide', completeAddCard: 'app', cardList: 'app hide' });
    }
    if (page === PAGE.CARD_LIST) {
      setTempRouter({ addCard: 'app hide', completeAddCard: 'app hide', cardList: 'app' });
    }
  }, [page]);

  return pageState;
}

export default usePage;
