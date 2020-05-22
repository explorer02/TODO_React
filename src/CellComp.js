import React from 'react';

export default function CellItem(props) {
  const handleClick = ev => {
    props.toggleTODO(props.todo.id);
  };
  return (
    <td className={props.todo.pending ? '' : 'completed'} onClick={handleClick}>
      {props.todo.value}
    </td>
  );
}
