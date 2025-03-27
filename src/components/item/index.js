import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';

function Item(props) {

  return (
    <div
      className={'Item' + (props.item.selected ? ' Item_selected' : '')}
    >
      <div className="Item-title">
        <b>{props.item.title}</b>
      </div>
      <div className="Item-price">{props.item.price.toLocaleString("ru-RU")} &#8381;</div>
      <div className="Item-actions">
        <button>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
};

Item.defaultProps = {
  onDelete: () => {},
  onSelect: () => {},
};

export default React.memo(Item);
