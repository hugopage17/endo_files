class About extends React.Component {
  render() {
    return (
      <div className="app">
        <div id="header">
          <h1 id="title">About</h1>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <p>Put your about us info here</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <About/>,
    document.getElementById('container')
)
