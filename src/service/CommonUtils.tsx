import jwtDecode from 'jwt-decode';


export const getErrorMessage = (error) => {
  return error
    ? error.response
      ? error.response.data
        ? error.response.data.error_description
          ? error.response.data.error_description
          : error.response.data.errors.length > 0
          ? error.response.data.errors[0].message
          : error.message
        : error.message
      : error.message
    : 'Something went wrong';
};

export const isAdmin = () => {
  const userInfoLocalStorage = localStorage.getItem('userInfo');
  if (userInfoLocalStorage) {
    const token = JSON.parse(userInfoLocalStorage).token;
    let decodedToken = jwtDecode(token);
    return decodedToken ;
  }
  return false;
};

export const isEmpty=(obj)=> {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }
  return true;
}

export const isTokenValid=()=>{
  
  const accessToken = JSON.parse(localStorage.getItem('userInfo'))?.token;
 
  if (accessToken) {
    const tokenParts = JSON.parse(atob(accessToken.split('.')[1]));
    const now = Math.ceil(Date.now() / 1000);
    if (tokenParts.exp < now) {
      localStorage.clear();
     
      return false
    } 
    return true
  }
}

export const isRoleCard = () => {
  const userInfoLocalStorage = localStorage.getItem('userInfo');
  if (userInfoLocalStorage) {
    const token = JSON.parse(userInfoLocalStorage).token;
    let decodedToken = jwtDecode(token);
    return decodedToken['authorities'].includes('ADMIN_USER');
  }
  return false;
};