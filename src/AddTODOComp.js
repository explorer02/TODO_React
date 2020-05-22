import React from 'react'

export default class AddTODOComp extends React.Component {
  constructor(props) {
      super(props)
      this.state = { value: '' }
  }
  handleChange = ev => {
      this.setState({ value: ev.target.value })
  }
  addTODO = (ev) => {
      if (this.state.value.trim().length) {
          this.props.addTODO(this.state.value.trim())
          this.setState({ value: '' })
      }
  }
  render() {
      return (
          <div>
              <input type="text" placeholder="kill a cat" onChange={this.handleChange} value={this.state.value} />
              {' '}
              <button onClick={this.addTODO}>Add to Todo List</button>
          </div>
      );
  }
}