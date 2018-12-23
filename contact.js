class Contact extends React.Component {
  render() {
    return (
      <div className="app">
        <div id="header">
          <h1 id="title">Contact</h1>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
        </div>
        <div>
          <p>Put your contact us info here</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <Contact/>,
    document.getElementById('container')
)
