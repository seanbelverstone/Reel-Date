import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./style.css";

class DeleteButton extends Component {

    render () {
        return (
            <div>
                <Button 
                    onClick={this.onSubmit}
                    id="delete-button">DELETE</Button>
            </div>
        )
    }
}

export default DeleteButton;
