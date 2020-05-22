import React from 'react';
import RowComp from './RowComp';

export default function TableComp(props) {
  const rows = [];
  const numOfRows = Math.ceil(props.todos.length / props.numOfCols);
  for (let i = 0; i < numOfRows; i++) {
    rows.push(
      <RowComp
        todos={props.todos.slice(
          props.numOfCols * i,
          (i + 1) * props.numOfCols
        )}
        toggleTODO={props.toggleTODO}
      />
    );
  }
  return (
    <table>
      <tbody>{rows.map(el => el)}</tbody>
    </table>
  );
}
