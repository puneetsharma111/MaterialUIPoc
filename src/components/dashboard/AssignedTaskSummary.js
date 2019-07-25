import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import * as actions from '../../stores/dispatchers/index';
import { connect } from 'react-redux';
import {Pie} from 'react-chartjs-2';


class AssignedTaskSummary extends Component {
    constructor(props)
    {
        super(props);
        this.state={userId:'ps84361'};
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.userId){
            this.setState({userId:nextProps.userId});
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.userId){
            this.setState({userId:nextProps.userId});
        }
    }
    componentDidMount(){
        if(this.state.userId){
            this.props.onFetchData(this.state.userId);
        }
    }
   
    render()
    {
        return(<div class="container-fluid"><Pie  height="235" responsive="true" options={{maintainAspectRatio:false,display:true}} data={this.props.data}/></div>);
    }


}

const mapStateToProps = (state,props) => {
    
    return {
        loading: state.data.loading,
        error: state.data.error,
        recordFound: state.data.data&& state.data.data.length > 0,
        data:state.data.data,
        userId:state.data.userId
         
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onFetchData: ( userId ) => dispatch(actions.fetchAssignedTaskSummary( userId))
        
    };
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AssignedTaskSummary));