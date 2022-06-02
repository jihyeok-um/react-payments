import { useState } from 'react';

import { DEFAULT_CARD_INFO } from '../constants';

function useCard() {
  const [cardList, setCardList] = useState({});
  const [cardInput, setCardInput] = useState(DEFAULT_CARD_INFO);

  const cardState = {
    cardList,
    setCardList,
    cardInput,
    setCardInput,
  };

  return cardState;
}

export default useCard;
