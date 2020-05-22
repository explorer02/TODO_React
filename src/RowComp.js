import React from 'react';
import CellComp from './CellComp'

export default function RowComp(props) {
  return (
    <tr>
      {props.todos.map(todo => (
        <CellComp toggleTODO={props.toggleTODO} todo={todo} key={todo.id} />
      ))}
    </tr>
  );
}
