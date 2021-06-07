import React from 'react';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    console.log(this.fileInput.current.files);
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" defaultValue="Bob" ref={this.input} />
        </label>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;