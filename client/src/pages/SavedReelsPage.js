import React, { Component } from "react";
import SavedReelsCard from "../components/SavedReelsCard";
import Logo from "../components/Logo";
import BackgroundVideo from "../components/BackgroundVideo";
import Title from "../components/TitleForEachPage";
import SavedReelList from "../components/SavedReelList";
import SavedReelListItem from "../components/SavedReelListItem";
import BackToDashButton from "../components/BackToDashButton";
import UsernameDisplay from "../components/UsernameDisplay";
import StarRating from "../components/StarRatingComponent";
import API from "../utils/API";

const allCookies = document.cookie.split(";");
const userNameToken = allCookies[14].split("=");
const userNameValue = userNameToken[1];

class SavedReelPage extends Component {

  state = {
    title : "Saved Reel",
    username: userNameValue
  }

  componentDidMount() {
    console.log("done")
    var allCookies = document.cookie.split(";");
    var userId = allCookies[1].split("=");
    var userIdValue = userId[1];

    API.getReels(userIdValue)
      .then(results => {
        console.log(results.data)
        // The array of items from the database is stored in this results.data.
        // Please create an if statement, saying if no results, just maybe render a div saying "no saved reels :("
        // If results returned, map through them and append them to the corresponding areas below.
      })
  } 

  render() {

    return (
        <div>
            <BackgroundVideo />
            <SavedReelsCard>
            <div className="page-header">
                <Logo />
                <p className="title-div">
                    <StarRating />
                    <Title title={this.state.title} />
                    <UsernameDisplay username={this.state.username}/>
                </p>
            </div>
            <div className="saved-page-container">
                <SavedReelList>
                    <SavedReelListItem/>
                </SavedReelList>
            </div>
            <div className="back-to-dashboard">
                <BackToDashButton />
            </div>
            </SavedReelsCard>
        </div>
    );
  }
}

export default SavedReelPage;

/* SeanyB Psuedocode
On component mount, do an API get all saved reels using the user's ID.
*/