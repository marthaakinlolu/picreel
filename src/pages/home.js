import React from "react"
import data from "../Data"
import { Container } from "@mui/material"
import Card from '../Components/Card'


export default function Home() {
    const cards = data.map(item => {
        return(
        <Card 
            avatar = {item.avatar}
            name = {item.name}
            image= {item.image}
        />
        )
    })

    return(
        <Container className="cards">
            <div className="card-segment">
                {cards}
            </div>
        </Container>
    )
}