import React, {Component, Fragment} from "react";
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';

class YouTubeCompPage extends Component {
    render() {
        return(
            <Fragment>
                <p>Youtube Component</p>
                <hr/>
                <YouTubeComp 
                    time="06:25" 
                    title="Belajar ReactJs Part 1"
                    desc="Ditonton 2 hari yang lalu" />
                <YouTubeComp 
                    time="07:25" 
                    title="Belajar ReactJs Part 2"
                    desc="Ditonton 3 hari yang lalu" />
                <YouTubeComp 
                    time="09:25" 
                    title="Belajar ReactJs Part 3"
                    desc="Ditonton 4 hari yang lalu" />
                <YouTubeComp 
                    time="08:45" 
                    title="Belajar ReactJs Part 4"
                    desc="Ditonton 5 hari yang lalu" />
                <YouTubeComp />
            </Fragment>
        )
    }
}

export default YouTubeCompPage;