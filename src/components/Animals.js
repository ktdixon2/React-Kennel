import React, { Component } from 'react'
import { finished } from 'stream';

class AnimalsList  extends Component {
    animalOwner(ownersId) {
        let owner = this.props.owners.find(owners => owners.id === ownersId)
    }
    render() {
        return (
            <section className="animals">
                <h1>Animal List</h1>
                {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        <h4>{animal.name}</h4>
                        <p>{animal.breed}</p>
                        <p>{this.animalOwner(animal.ownerID)}</p>
                    </div>
                )
                }

            </section>
        );
    }
}

export default AnimalsList