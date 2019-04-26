const getMood = () => {
  const moods = ['Angry', 'Hungry', 'Silly']
  return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My mood is {getMood()}</h1>
      </div>
    )
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))
