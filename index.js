class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <p>My buddy!</p>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'))
