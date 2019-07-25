import * as actionTypes from '../actions/AssignedTasksSummaryTypes';

const  initialState = {
    
    error: '',
    loading: false,
    data: {},
    userId:'ps84361'
};

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
}

const fetchAssignedTasksSummarySuccessful=(state,action)=>{
    return updateObject( state, {
        loading: false,
        error:'',
        data:action.data,
        user:action.user
    });
};

const fetchAssignedTasksSummaryFail=(state,action)=>{

    return updateObject( state, {
        loading: false,
        error:action.error,
        data:[],
        user:action.user
    });
};

const fetchAssignedTasksSummaryStart=(state,action)=>{
    return updateObject( state, {
        loading: true,
        error:'',
        data:[],
        user:action.user
    });
};

const assignedTaskSummaryReducer=(state=initialState,action)=>{

 
    switch(action.type){
        case actionTypes.FETCH_ASSIGNED_TASKS_SUMMARY_SUCCESSFUL:return fetchAssignedTasksSummarySuccessful(state,action);
        case actionTypes.FETCH_ASSIGNED_TASKS_SUMMARY_FAIL:return fetchAssignedTasksSummaryFail(state,action);
        case actionTypes.FETCH_ASSIGNED_TASKS_SUMMARY_START:return fetchAssignedTasksSummaryStart(state,action);
        default:
            return state;
    }
};

export default assignedTaskSummaryReducer;