import React, { Component } from 'react'

class AnimalsList  extends Component {
    render() {
        return (
            <section className="animals">
                <h1>Animal List</h1>
                {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        <h4>{animal.name}</h4>
                        <p>{animal.breed}</p>
                    </div>
                )
                }

            </section>
        );
    }
}

export default AnimalsList