import React, {Component} from 'react';
import BlogSpot from '../pages/BlogPost/BlogPost';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Product from '../pages/Product/Product';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import YouTubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import "./Home.css";
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import GlobalProvider from '../../context/context';
import Hooks from '../pages/Hooks/Hooks';


class Home extends Component {
    render() {
        return (
            <Router>
                <div className="nav">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/product">Product</Link>
                    <Link className="link" to="/blogspot">Blogspot</Link>
                    <Link className="link" to="/lifecycle">Life Cycle</Link>
                    <Link className="link" to="/hooks">Hooks</Link>
                </div>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <YouTubeCompPage />
                    </Route>
                    <Route path="/detail-post/:postId" component={DetailPost} />
                    <Route path="/product">
                        <Product />
                    </Route>
                    <Route path="/blogspot">
                        <BlogSpot />
                    </Route>
                    <Route path="/lifecycle">
                        <LifeCycleComp />
                    </Route>
                    <Route path="/hooks">
                        <Hooks />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default GlobalProvider(Home);