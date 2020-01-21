import * as TYPE from '../Type/types.js';

const initialState ={ Goals: {},Team:{},Posts:{}}
    

export default (state={initialState}, action) => {

    switch (action.type) {
        case TYPE.LOAD_GOALS:
            console.log("getting ", action.payload);
            console.log(action.payload);
            return {
                // keep the old state
                ...state,
                // add all the cards from the database
                // they will come in a json format,
                // so we need to convert them to array
                Goals: Object.values(action.payload)
            };
            case TYPE.LOAD_TEAM:
                return {
                    // keep the old state
                    ...state,
                    // add all the cards from the database
                    // they will come in a json format,
                    // so we need to convert them to array
                    Team: Object.values(action.payload)
                };

                case TYPE.LOAD_PARTNERS:
                    console.log("LOAD_PARTNERS ", action.payload);
                    console.log(action.payload);
                    return {
                        // keep the old state
                        ...state,
                        // add all the cards from the database
                        // they will come in a json format,
                        // so we need to convert them to array
                        Partners: Object.values(action.payload)
                    };
                case TYPE.LOAD_POSTS:
                return {
                    // keep the old state
                    ...state,
                    // add all the cards from the database
                    // they will come in a json format,
                    // so we need to convert them to array
                    Posts: Object.values(action.payload)
                };
                case TYPE.LOAD_POST:
                return {
                    // keep the old state
                    ...state,
                    // add all the cards from the database
                    // they will come in a json format,
                    // so we need to convert them to array
                    Post: action.payload
                };
        default:
            return state;
    }
};