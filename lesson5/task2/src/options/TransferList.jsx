import React from 'react';
import Options from './Options';
import SelectedOptions from './SelectedOptions';
import AvailableOptions from './AvailableOptions';

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOptions title={'Available Options'} />
      <SelectedOptions title={'Selected Options'} />
    </div>
  )
}

export default TransferList;