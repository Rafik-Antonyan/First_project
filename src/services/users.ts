export function getUsers(callback: CallableFunction, setRequest: CallableFunction, setError: CallableFunction ) {
    setRequest(true);
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if(response.status === 200){
        return response.json()
      }
      throw new Error('Something went wrong');
    })
    .then((json) => {
      setRequest(false)
      callback(json);
    }).catch(() =>{
        setRequest(false)
        setError({error:'Error...'});
    })
}
