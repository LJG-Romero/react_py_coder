import React from 'react'

/*** Styles ****/
import "./home.css"

/*** Components ****/
import TravelSeeker from "../components/TravelSeeker";
import ListCards from "../components/ListCards";

function Home() {
    return (
        <div className="mainApp">

            <TravelSeeker
              title = "Viajamos?"
            />

            <ListCards
              title = "Destinos"
            />
      </div>
    )
}

export default Home
