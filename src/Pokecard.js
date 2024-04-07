import React, { Component } from "react";
import './Pokecard.css';

// const img_api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const img_api = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padtothree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
    render() {

        const id = this.props.id
        const imgsrc = `${img_api}${padtothree(id)}.png`
        return (
            <div>
                <div className="Pokecard">
                    <h3 className="Pokecard-title">{this.props.Name}</h3>
                    <div className="Pokecard-img">
                        <img src={imgsrc}/>
                    </div>
                    <div className="Pokecard-data">Type: {this.props.type}</div>
                    <div className="Pokecard-data">EXP: {this.props.exp}</div>
                </div>
            </div>
        )
    }
}

export default Pokecard;