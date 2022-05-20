const userReducer = (state, action) => {
    switch (action.type) {
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
    }
}
export default userReducer;