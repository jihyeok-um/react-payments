import React from 'react';
import LineInput from '../Common/Input/LineInput';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CardContext, PageContext } from '../../context';
import { isBlankValue, isOverlappedValue } from '../../utils/validations';
import SubmitButton from '../Common/Button/SubmitButton';
import { isKoreanInRange } from './validation';
import useInputs from '../../hooks';
import { DEFAULT_CARD_INFO } from '../../constants';

function LineInputForm() {
  const { cardList, cardInput, setCardList, setCardInput } = useContext(CardContext);
  const { setPage } = useContext(PageContext);
  const [form, onChange, reset] = useInputs(cardInput);

  const onChangeCardName = (e, validationFunc, dataType) => {
    onChange(e, validationFunc, dataType);
    setCardInput({ ...cardInput, cardDesignation: form.cardDesignation });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isOverlappedValue(form.cardDesignation, cardList)) {
      alert('동일한 명칭의 카드가 존재합니다.');
      return;
    }

    if (isBlankValue(form.cardDesignation)) {
      alert('카드 이름이 공백입니다.');
      return;
    }

    setCardList({ ...cardList, [form.cardDesignation]: { ...cardInput } });
    setPage('cardListPage');
    setCardInput(DEFAULT_CARD_INFO);
    reset(DEFAULT_CARD_INFO);
  };

  return (
    <form onSubmit={handleSubmit}>
      <LineInput>
        <input
          className="input-underline"
          value={form.cardDesignation}
          onChange={e => onChangeCardName(e, isKoreanInRange, 'cardDesignation')}
          maxLength={15}
          required
        />
      </LineInput>
      <SubmitButton>완료</SubmitButton>
    </form>
  );
}

LineInputForm.propTypes = {
  handleChangePage: PropTypes.func,
};

export default LineInputForm;
