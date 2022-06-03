import React, { useState } from 'react';
import PropTypes from 'prop-types';

function DescriptionComment({ helpText }) {
  if (!helpText) {
    return;
  }

  const [isMouseOver, setIsMouseOver] = useState(false);

  const onMouseOver = () => {
    setIsMouseOver(true);
  };

  const onMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <>
      <div className="help-content" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        ?
      </div>
      {isMouseOver && <div className="help-content-text">{helpText}</div>}
    </>
  );
}

export default DescriptionComment;

DescriptionComment.propTypes = {
  helpText: PropTypes.string,
};
