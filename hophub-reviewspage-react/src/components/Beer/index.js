import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Listing from "./Listing";
import Button from "../Button";
import CloseX from "../CloseX";
import { BeerListingWrapper } from "./beer.styles";
import { Loader } from "../Loader";
import { Error } from "../Error";

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      beer: null,
    };
  }

  async componentDidMount() {
    try {
      // this no longer works as the path from root is ignored
      // const id = this.props.match.params.id;

      // need to pull id from location
      const path = this.props.location.pathname;
      const pieces = path.split("/");
      const id = pieces[2];

      const response = await fetch(
        `https://brj-server.herokuapp.com/api/beers/${id}`
      );
      const json = await response.json();
      if (response.ok) {
        this.setState({
          isLoaded: true,
          beer: json,
        });
      } else {
        this.setState({
          isLoaded: true,
          error: json.error,
        });
      }
    } catch (error) {
      this.setState({
        isLoaded: true,
        error: error.message,
      });
    }
  }

  render() {
    const { error, isLoaded, beer } = this.state;
    if (error) {
      console.log("error");
      return (
        <BeerListingWrapper>
          <Error>Error: {error}</Error>
        </BeerListingWrapper>
      );
    } else if (!isLoaded) {
      return (
        <BeerListingWrapper>
          <Loader />
        </BeerListingWrapper>
      );
    } else {
      return (
        <BeerListingWrapper>
          <Listing>
            <Link to="/beers">
              <CloseX />
            </Link>
            <Listing.Header>
              <Listing.Brewery title="{beer.brewery}">
                {beer.brewery}
              </Listing.Brewery>
              <Listing.Beer title="{beer.name}">{beer.name}</Listing.Beer>
              <Listing.Intro>
                {beer.reviews.length > 0
                  ? "has the following reviews:"
                  : "does not yet have any reviews."}
              </Listing.Intro>
            </Listing.Header>
            {beer.reviews.map((review) => (
              <Listing.Review key={review._id}>
                <Listing.Comment>
                  {
                    // eslint-disable-next-line react/no-unescaped-entities
                  }
                  "
                  {review.comments.length > 0 ? review.comments : "No comment."}
                  " -{review.reviewer}
                </Listing.Comment>
                <Listing.DrinkAgain>
                  Drink Again?: {review.drinkAgain}
                </Listing.DrinkAgain>
              </Listing.Review>
            ))}
            <Link to="/beers">
              <Button>Back to Beers</Button>
            </Link>
          </Listing>
        </BeerListingWrapper>
      );
    }
  }
}

Beer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default Beer;
