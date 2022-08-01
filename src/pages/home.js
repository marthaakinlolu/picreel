import React from "react"
import {data} from "../Data"
import { Container } from "@mui/material"
import Card from '../Components/card'


export default function Home() {
    // const cards = data.map(item => {
    //     return(
    //     <Card 
    //         avatar = {item.avatar}
    //         name = {item.name}
    //         image= {item.image}
    //     />
    //     )
    // })
    return(
        <Container className="cards">
            <div className="card-segment">
                {/* {cards} */}
                {data.map(res =>
                    (<Card 
                                avatar = {res.avatar}
                                name = {res.name}
                                image= {res.image}
                            />)
                )}
                
            </div>
        </Container>
    )
}