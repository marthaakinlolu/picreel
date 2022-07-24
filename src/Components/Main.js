import React from "react"
import Card from './Card'


export default function Main() {
    return(
        <div className="cards">
            <div className="card-segment">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="card-segment">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="card-segment">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}