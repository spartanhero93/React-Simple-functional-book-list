//State arg is not app state, only state this reducer is responsible for
//REDUX doesnt allow you to return an UNDEFINED value, therfore (state=null, action)
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }

    
    return state
}