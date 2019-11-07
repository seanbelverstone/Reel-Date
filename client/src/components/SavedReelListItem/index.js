import React from "react";
import "./style.css"
import StarRating from "../StarRatingComponent";
import ShareButton from "../ShareButton";
import DeleteButton from "../DeleteButton";
import ReplayButton from "../ReplayButton";

// RecipeList renders a bootstrap list item
function SavedReelListItem (props) {

    return (
        <li>
            <div className="saved-content">
                <p className="time-stamp">{`Watched: ${props.timestamp}`}</p>
                <div className="movie-content-container">

                    <img className="movie-image" src={props.movieImage} alt={props.movieTitle}></img>
                    <div className="movie-content-right">
                        <h5 className="movie-title">{props.movieTitle}</h5>

                        <StarRating />

                        <p className="movie-synopsis"><span id="synopsis">Synopsis: </span>{props.movieSynopsis}</p>
                
                        <ul className="buttons">
                            <li><ReplayButton /></li>
                            <li><ShareButton /></li>
                            <li><button id="delete-button" onClick={props.handleDelete}>DELETE</button></li>
                        </ul>
                    </div>
                </div>

                <div className="saved-recipe">
                    <p><span id="saved-recipe-head">Saved Recipe</span></p>
                    <p><span id="saved-recipe"># Menu: </span>{props.recipeTitle}</p>
                    <p><span id="saved-recipe"># Recipe: </span><a href={props.recipeLink} target="_blank">CLICK ME</a></p>
                </div>
            </div>
        </li>
    );
}

export default SavedReelListItem;