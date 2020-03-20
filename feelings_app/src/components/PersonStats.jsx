import React, { Component } from 'react';
import { Fragment } from 'react';

class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Age: "",
            Feeling: ""
        };
    };

    updateStateName = (event) => {
        console.log("Name Field Change");
        this.setState(
            {
                Name: event.target.value
            }
        )
    };

    updateStateAge = (event) => {
        console.log("Age Field Change");
        this.setState(
            {
                Age: event.target.value
            }
        )
    };

    updateStateFeeling = (event) => {
        console.log("Feeling Field Change");
        this.setState(
            {
                Feeling: event.target.value
            }
        )
    };

    someFormHandler = (event) => {
        event.preventDefault();
        console.log("Form Submit Button Works");
        this.props.callBackNumber(this.state);
    };

    render() {
        return (
            <Fragment>
                {/* "PersonStats is here!" */}
                <form>
                    <fieldset>
                        <legend>My Stats</legend>

                        <label htmlFor="">Name: </label>
                        <input type="text" id="nameField" placeholder="Enter Your Name" value={this.state.Name} onChange={this.updateStateName}></input>

                        <label htmlFor="">Age: </label>
                        <input type="text" id="ageField" placeholder="Enter Your Age" value={this.state.Age} onChange={this.updateStateAge}></input>

                        <label htmlFor="">Feeling: </label>
                        <input type="text" id="feelingField" placeholder="How Do You Feel" value={this.state.Feeling} onChange={this.updateStateFeeling}></input>

                        <button onClick={this.someFormHandler}>Submit</button>
                    </fieldset>
                </form>
            </Fragment>
        )
    };
};

export default PersonStats;