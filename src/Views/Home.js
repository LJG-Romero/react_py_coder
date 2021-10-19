import React from 'react'
import "./home.css"

/*** Components ****/
import TravelSeeker from "../components/TravelSeeker";
import ListCards from "../components/ListCards";

function Home() {
    return (
        <div className="mainApp">

            <TravelSeeker
              title = "Viajamos?"
              origin = "Origen"
              destiny = "Destino"
            />

            <ListCards
              title = "Destinos"
            />
      </div>
    )
}

export default Home
