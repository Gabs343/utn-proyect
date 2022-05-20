const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                data: action.payload
            }
        case 'SET_MAIL':
            return{
                ...state,
                mail: action.payload
            }
        case 'SET_PSW':
            return{
                ...state,
                psw: action.payload
            }
        case 'SET_LOG':
            return{
                ...state,
                logged: action.payload
            }

        default:
            return(state);
    }
}
export default userReducer;