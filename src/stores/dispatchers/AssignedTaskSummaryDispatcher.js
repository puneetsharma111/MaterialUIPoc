import * as actionTypes from '../actions/AssignedTasksSummaryTypes';
//import axios from 'axios';

const data = {

	labels: [
		'Red',
		'Green',
		'Yellow'
	],

	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]

	}]

};
export const fetchAssignedTaskSummaryStart=() => {
    return {
        type: actionTypes.FETCH_ASSIGNED_TASKS_SUMMARY_START
    };

};

export const fetchAssignedTaskSummarySuccessful=(userId,taskData) => {
    return {
        type:actionTypes.FETCH_ASSIGNED_TASKS_SUMMARY_SUCCESSFUL,
        data:taskData,
        user:userId
    };

};

export const fetchAssignedTaskSummaryFail=(error,userId)=>{

    return {
        type:actionTypes.FETCH_ASSIGNED_TASKS_SUMMARY_SUCCESSFUL,
        data:{},
        user:userId
    };
}

export const fetchAssignedTaskSummary= (userId) =>{
    return dispatch=>{
        dispatch(fetchAssignedTaskSummaryStart());
        //axios.get('http://localhost:5000/api/materices/getassignedtasksummary/'+userId)
        //.then(res => {
         // const data = res.data;    
          
         
        dispatch(fetchAssignedTaskSummarySuccessful(userId,data)) ;     
        //})
        //.catch(err=>{
          //console.log("error occured while calling get materics API" + err.stack);
          //dispatch(fetchAssignedTaskSummaryFail(err.stack));
        //});
        }
}

