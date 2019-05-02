import React, {Component} from 'react';
import {connect} from 'react-redux';

class PhaseDetails extends Component {
    render() {
        if (!this.props.phase) {
            return (<h3>Select a Phase ...</h3>);
        }
        return (
        <div>
            <img src={this.props.phase.thumbnail} />
            <h2>{this.props.phase.first} 
                {this.props.phase.last}
            </h2>
            <h3>Age: {this.props.phase.age}</h3>
            <h3>Description: {this.props.phase.description}</h3>
        </div>
        );
    }
}

// "activePhase" is set in reducers/index.js
function mapStateToProps(state) {
    return {
       trainer: state.activePhase
    };
}
export default connect(mapStateToProps)(PhaseDetails);
