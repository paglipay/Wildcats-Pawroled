import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NavTabs from './components/NavTabs'
import PerpPage from './components/PerpPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Container, Row, Col, Table, Card, Button } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <NavTabs />
      <Router>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
            <header className="App-header">
              <Container >
                <Row>
                  <Col>
                    <img src={logo} className="App-logo" alt="logo" />
                  </Col>
                  <Col>

                    <Table style={{ height: '100%', color: 'white' }}>
                      <tr style={{ height: '100%' }}>
                        <td>
                          <img src={"liam_neeson.png"} />
                        </td>
                        <td>
                          Liam Neeson - Founder of<br/>PAW (Policing the Animals of the World)
                          <p style={{ fontSize: 14, textAlign: 'left' }}>
                            Liam Neeson has received several accolades throughout his career, including nominations for an Academy Award, a British Academy Film Award, two Tony Awards, and three Golden Globe Awards. In 2020, Neeson was listed at number 7 on The Irish Times list of Ireland's 50 greatest film actors. So... <i><strong>he</strong></i> would know how to deal with "naughty" pets.
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </Col>
                </Row>
              </Container>
              {/* <NavTabs
          // authenticated={authenticated}
          // logout={logout}
        /> */}
            </header>

          </Route>
          <Route exact path={["/", "/perppage"]}>
            <PerpPage />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
