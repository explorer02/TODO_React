import React from 'react';
import AddTODOComp from './AddTODOComp';
import FilterComp from './FilterComp';
import TableComp from './TableComp';

export default class ContainerComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: '1a', value: 'Clean Doghouse', pending: true },
        { id: '2b', value: 'Take dog on walk', pending: true },
        { id: '3c', value: 'Grocery Shopping', pending: true },
        { id: '4d', value: 'Cook Dinner', pending: true },
        { id: '5e', value: 'Eat Dinner', pending: true }
      ],
      filter: 'all'
    };
  }
  toggleTODO = id => {
    const newState = [...this.state.todos];
    const index = newState.findIndex(item => item.id === id);
    newState[index] = { ...newState[index], pending: !newState[index].pending };
    this.setState({ todos: newState });
  };

  addTODO = value => {
    const newState = [
      ...this.state.todos,
      { id: Math.random().toString(), value, pending: true }
    ];
    this.setState({ todos: newState });
  };
  changeFilter = newFilter => {
    this.setState({ filter: newFilter });
  };
  filter() {
    return [...this.state.todos].filter(todo => {
      return (
        this.state.filter === 'all' ||
        (this.state.filter === 'pending' && todo.pending) ||
        (this.state.filter === 'completed' && !todo.pending)
      );
    });
  }
  render() {
    const filteredTODO = this.filter();
    return (
      <div>
        <AddTODOComp addTODO={this.addTODO} />
        <FilterComp changeFilter={this.changeFilter} />
        <TableComp
          todos={filteredTODO}
          toggleTODO={this.toggleTODO}
          numOfCols={2}
        />
      </div>
    );
  }
}
