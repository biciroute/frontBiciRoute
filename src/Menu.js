import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import SideNav, { NavIcon, NavItem, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './Menu.css';


export class Menu extends React.Component {
    render() {
        return (
            <Router>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <SideNav
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                    console.log(history)
                                }
                            }}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="route">
                                <img src={logo}></img>
                                <NavItem eventKey="route">
                                    <NavIcon>
                                        <LocationOnIcon/>
                                    </NavIcon>
                                    <NavText>
                                        <span className="nav-text">Find Route</span>
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="trip">
                                    <NavIcon>
                                        <DirectionsBikeIcon/>
                                    </NavIcon>
                                    <NavText>
                                        <span>My trips</span>
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="notifications">
                                    <NavIcon>
                                        <NotificationsIcon/>
                                    </NavIcon>
                                    <NavText>
                                        <span>Notifications</span>
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="help">
                                    <NavIcon>
                                        <HelpIcon />
                                    </NavIcon>
                                    <NavText>
                                        <span>Help</span>
                                    </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                        <main>
                            {/*<Route path="/" exact component={props => <RootComponent />} />
                            <Route path="/home" component={props => <Home />} />
                        <Route path="/devices" component={props => <Devices />} />*/}
                        </main>
                    </React.Fragment>
                )}
                />
            </Router>
        );
    }
}
