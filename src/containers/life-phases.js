import React ,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectPhase} from './../actions/index';

class LifePhases extends Component{
    createPhases(){
        return( 
            this.props.phases.map(phase =>{
                return(
            <div>
                <h4 className="danger" key ={phase.id} onClick ={
                    ()=>this.props.phases(phase)
                }>{phase.first}{phase.last}
                </h4>
            </div>)
        })
        
        )
    }
}

function mapStateToProps (state){
    return {
        phases:state.phases
    }
}
function mapDispatchToProps (dispatch){
    return bindActionCreators(
        {
            phases:selectPhase
        }
        ,dispatch
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(LifePhases);
