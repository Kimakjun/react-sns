const initalState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpdata: {},
        loginData: {}
    },
    post: {
        mainPosts: [],
    }
}
// async action creater : later
// action creater
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () =>{
    return{
        type: 'LOG_OUT',
    }
}


// (이전상태, 액션) => 다음상태
const rootReducer = (state = initalState, action) => {
    switch(action.type){
        case 'LOG_IN':
            return {
                ...state,
                user:{
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data
                }
            }
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            }
    }
};

export default rootReducer;

  
