const useAuth=()=>{

    // First operation is we wil read the token from the 
    // localstorage
    const token=localStorage.getItem("token");
    return token;

}

export default useAuth;