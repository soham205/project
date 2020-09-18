 export const getDetails = () => {
     return fetch(`https://api.blockcypher.com/v1/eth/main`, { method: "GET" })
       .then(response => {
         return response.json();
      })
       .catch(err => console.log(err));
  };
  export const getBalance = (addr) => {
    return fetch(`https://api.blockcypher.com/v1/eth/main/addrs/${addr}`, { method: "GET" })
      .then(response => {
        return response.json();
     })
      .catch(err => console.log(err));
 };
//  738d145faabb1e00cf5a017588a9c0f998318012