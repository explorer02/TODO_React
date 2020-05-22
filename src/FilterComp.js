import React from 'react';

export default function FilterComp(props) {
  const handleClick = ev => {
    if (ev.target.nodeName === 'BUTTON') {
      props.changeFilter(ev.target.getAttribute('data'));
    }
  };

  return (
    <div onClick={handleClick}>
      <button data="all">All</button>
      <button data="pending">Pending</button>
      <button data="completed">Completed</button>
    </div>
  );
}
