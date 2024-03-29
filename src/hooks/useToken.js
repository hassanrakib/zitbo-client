import React from "react";

const useToken = (userFromFirebase) => {
  const [currentToken, setCurrentToken] = React.useState("");

  React.useEffect(() => {
    // useToken is invoked by the userFromFirebase state change in withMultiStepAuthentication hoc
    // if userFromFirebase has it's emailVerified to true
    // then we "setUserFromFirebase(userFromFirebase)" in sign in handler 
    
    // at first userFromFirebase is null
    // so check is needed
    if (userFromFirebase) {
      fetch(
        `${import.meta.env.VITE_LOCAL_HOST}/jwt?username=${userFromFirebase.displayName}`
      )
        .then((res) => res.json())
        .then(result => {
            // set to localStorage
            localStorage.setItem("token", result.token);

            // set token state
            setCurrentToken(result.token);
        });
    }
  }, [userFromFirebase]);

  // provides the latest token
  return {currentToken};
};

export default useToken;
