import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {

  state = {
    gists: null
  }

  componentDidMount() {
    fetch('https://api.github.com/gists')
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists })
      });
  }

  render() {
    const { gists } = this.state;
    return (
      <Router>
        <Root>
          {/* <p>App Here: {gists && gists.length}</p> */}
          <Sidebar>
            {gists ? (
              gists.map(gist => (
                <SidebarItem key={gist.id}>
                  <Link to={`/g/${gist.id}`}>
                    {gist.description || '[no description]'}
                  </Link>
                </SidebarItem>
              ))
            ) : (
                <div>Loading...</div>
              )}
          </Sidebar>
          <Main>
            {/* <Route path="/" componen={Home} /> */}
            <Route exact={true} path="/" render={ () => (
              <h1>Welcome</h1>
            ) } />
            {/* <Route path="/g/:gistId" component={Gist}/> */}
            {gists && (
              <Route path="/g/:gistId" render={({match}) => (
                <Gist gist={gists.find(g => g.id === match.params.gistId)} />
              ) }/>
            )}
          </Main>
        </Root>
      </Router>
    );
  }
}

export default App;

const Gist1 = ({match}) => (
  <div>
    {match.params.gistId}
  </div>
)

const Gist = ({gist}) => {
  return (
    <div>
      <h1>{gist.description || 'No Description'}</h1>
      <ul>
        {Object.keys(gist.files).map(key => (
          <li>
            <b>{key}</b>
            <LoadFile url={gist.files[key].raw_url}>
              {(text) => (
                <pre>{text}</pre>
              )}
            </LoadFile>
          </li>
        ))}
      </ul>
    </div>
  )
}


class LoadFile extends Component {
  state = {
    file: null
  };

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.text())
      .then(file => {
        this.setState({file})
      });
  }

  render() {
    const { file } = this.state;

    return (
      file && this.props.children(file)
    );
  }
}

const Root = (props) => (
  <div style={{
    display: 'flex'
  }} {...props} />
)

const Sidebar = (props) => (
  <div style={{
    width: '33vw',
    height: '100vw',
    overflow: 'auto',
    background: '#eee'
  }} {...props} />
)

const SidebarItem = (props) => (
  <div style={{
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    padding: '5px 10px'
  }} {...props} />
)

const Main = (props) => (
  <div style={{
    flex: 1,
    height: '100vh',
    overflow: 'auto'
  }}>
    <div style={{ padding: '20px' }} {...props} />
  </div>
)