import React, { PropTypes } from 'react';
import KalenderIkon from 'ffe-icons-react/kalender-ikon';

function FFEDateInput(props) {
  return (
  <div className="ffe-dateinput">
    <input
      type="text"
      className="ffe-dateinput__field ffe-input-field ffe-input-field--medium" {...props}
    />
    <KalenderIkon className="ffe-dateinput__icon" />
  </div>
  );
}

FFEDateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FFEDateInput;
