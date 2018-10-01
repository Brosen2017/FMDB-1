import React from "react";
import axios from "axios";
import styles from "../styles/styles.css";
import TopHyperlinkBar from "./TopHyperlinkBar.jsx";
import Heading from "./Heading.jsx";
import MovieImages from "./MovieImages.jsx";
import HowToWatch from "./HowToWatch.jsx";
import BottomTextArea from "./BottomTextArea.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
    this.retrieveMovieData = this.retrieveMovieData.bind(this);
  }
  componentDidMount() {
    this.retrieveMovieData();
  }

  retrieveMovieData() {
    //change the number in here to 10mil when you acheive fast write speed
    var random = Math.floor(Math.random() * 1000);
    axios
      .get(`http://localhost:8000/api/title/${random}`)
      .then(res => {
        console.log(random);
        console.log('this is the res', res)
        this.setState({
          movie: res.data[0]
        });
        console.log("movie data retrieved", res.data);
      })
      .catch(err => {
        console.log("there was an error retrieving data", err);
      });
  }

  render() {
    if (this.state.movie !== null) {
      return (
        <div className={styles.container}>
          <div>
            <TopHyperlinkBar />
            <Heading className={styles.buffer} movie={this.state.movie} />
            <MovieImages movie={this.state.movie} />
            <HowToWatch />
            <BottomTextArea movie={this.state.movie} />
          </div>
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}

export default App;
