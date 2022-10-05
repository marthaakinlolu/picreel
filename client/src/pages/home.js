import React from "react"
import { Container } from "@mui/material"
import Card from '../Components/card'


export default function Home(props) {
    const {filteredData} = props;
   
    return(
        <Container className="cards">
            <div className="card-segment">
             
                {filteredData.map(item => (  <Card 
                    avatar = {item.avatar}
                    name = {item.name}
                    image= {item.image}
                    />))

                }
            </div>
        </Container>
    )
}