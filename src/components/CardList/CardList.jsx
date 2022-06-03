import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { CardContext } from '../../context';
import { CARD_SIZE } from '../../constants';

function CardList({ children }) {
  const { cardList } = useContext(CardContext);

  return (
    <main className="card-list-box">
      {Object.values(cardList).map(card => {
        const cardUniqueKey = Object.values(card.cardNumber).join('');
        return (
          <React.Fragment key={`${cardUniqueKey}Frag`}>
            <Card key={cardUniqueKey} cardInformation={card} cardBoxSize={CARD_SIZE.SMALL} />
            <p key={`${cardUniqueKey}Name`} className="card-bottom__number">
              {card.cardNickName}
            </p>
          </React.Fragment>
        );
      })}
      {children}
    </main>
  );
}

CardList.propTypes = {
  children: PropTypes.node,
};

export default CardList;
