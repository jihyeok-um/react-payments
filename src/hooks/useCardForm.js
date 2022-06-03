import { useState } from 'react';

function useCardForm(initialForm) {
  const [cardForm, setcardForm] = useState(initialForm);

  const handleCardInputChange = (e, validationFunc, dataType, key) => {
    const {
      target: { value: changedData, maxLength },
    } = e;

    if (!validationFunc(changedData, maxLength)) {
      return;
    }

    if (key) {
      setcardForm({
        ...cardForm,
        [`${dataType}`]: { ...cardForm[`${dataType}`], [`${key}`]: changedData },
      });
    } else {
      setcardForm({
        ...cardForm,
        [`${dataType}`]: changedData,
      });
    }
  };

  const reset = resetValue => {
    setcardForm({
      ...resetValue,
    });
  };

  return [cardForm, handleCardInputChange, reset];
}

export default useCardForm;
