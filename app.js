class Home extends React.Component {
  render() {
    return (
      <div className="app">
        <div id="header">
          <h1 id="title">Endo App</h1>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <p>Welcome to the home page of your Endo app</p>
        </div>
        <div>
          <img src="endo_logo.png"/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <Home/>,
    document.getElementById('container')
)
