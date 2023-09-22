import { createContext, useContext, useReducer} from "react";
 const AuthContext = createContext()
    const reducer = (state,action)=>{
        switch (action.type) {
            case 'fullName':
                return {...state,fullName: action.payload }
            case 'email': 
                return {...state, email: action.payload}
            case 'userId': 
                return {...state, userId: action.payload}
            default:
                return state
        }

    }
export default function MyAuthContext(Props){
 const {children} = Props
    const userData = {
        fullName: '',
        email: '',
        password: '',
        userId: ''
    }
    const [state, dispatch] = useReducer(reducer, userData)
    
    return(
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext(){


    return useContext(AuthContext)
}