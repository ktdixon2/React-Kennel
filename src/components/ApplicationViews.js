import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalsList from './Animals'
import LocationList from './Locations'
import EmployeeList from './employee/EmployeeList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles", breed: "Dobby", ownerId: 1 },
        { id: 2, name: "Jack", breed: "Yorkie-Poo (Maniac)", ownerId: 3 },
        { id: 3, name: "Angus", breed: "American Bully", OwnerId: 5 },
        { id: 4, name: "Henley", breed: "Mut", ownerId: 5 },
        { id: 5, name: "Derkins", breed: "Pug", ownerId: 4 },
        { id: 6, name: "Checkers", breed: "Bulldog", OwnerId: 2 }
    ]

    ownersFromAPI = [
        { id: 1, name: "Sam" },
        { id: 2, name: "Tom" },
        { id: 3, name: "Tammy" },
        { id: 4, name: "Trish" },
        { id: 5, name: "Up For Adoption"}
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalsList animals={this.state.animals} owners={this.state.owners}/>
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews