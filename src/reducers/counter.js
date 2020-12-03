//create reducer (Describe how your action will transform your state to the next state)
// : Depending upon action you called it modifies our store (update my state)
// two arguments: intial state, action

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

export default counterReducer;