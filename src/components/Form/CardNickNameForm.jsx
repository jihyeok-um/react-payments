import React from 'react';
import LineInput from '../Common/Input/LineInput';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CardContext, PageContext } from '../../context';
import { isBlankValue, isOverlappedValue } from '../../utils/validations';
import SubmitButton from '../Common/Button/SubmitButton';
import { isKoreanInRange } from './validation';
import { DEFAULT_CARD_INFO, MAX_LENGTH } from '../../constants';
import useCardForm from '../../hooks/useCardForm';

function CardNickNameForm() {
  const { cardList, cardInput, setCardList, setCardInput } = useContext(CardContext);
  const { setPage } = useContext(PageContext);
  const [cardForm, handleCardInputChange, reset] = useCardForm(cardInput);
  const { cardNickName } = cardForm;

  const onChangeCardName = (e, validationFunc, dataType) => {
    handleCardInputChange(e, validationFunc, dataType);
    setCardInput({ ...cardInput, cardNickName: cardForm.cardNickName });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isOverlappedValue(cardNickName, cardList)) {
      alert('동일한 명칭의 카드가 존재합니다.');
      return;
    }

    if (isBlankValue(cardNickName)) {
      alert('카드 이름이 공백입니다.');
      return;
    }

    setCardList({ ...cardList, [cardNickName]: { ...cardInput } });
    setPage('cardListPage');
    setCardInput(DEFAULT_CARD_INFO);
    reset(DEFAULT_CARD_INFO);
  };

  return (
    <form onSubmit={handleSubmit}>
      <LineInput>
        <input
          className="input-underline"
          value={cardNickName}
          onChange={e => onChangeCardName(e, isKoreanInRange, 'cardNickName')}
          maxLength={MAX_LENGTH.CARD_NICK_NAME}
          required
        />
      </LineInput>
      <SubmitButton>완료</SubmitButton>
    </form>
  );
}

CardNickNameForm.propTypes = {
  handleChangePage: PropTypes.func,
};

export default CardNickNameForm;
