function areCredentialValid(userName, password) {
  if(typeof userName !== 'string' || typeof password !== 'string') return false;
  if(userName.trim().length == 0 || password.trim().length == 0) return false;
  return true;
}

export const useRegisterUser = async function(userName, password) {
  if(!areCredentialValid(userName, password)) throw new Error('Please provide valid user name and password for registration');
  try {
   const response = await fetch('http://localhost:3000/auth/register', {
      method: 'post', 
      headers: {
        "Content-Type":"application/json" 
      },
      body: JSON.stringify({username: userName, password})
    })
    
    if(!response.ok || response.status !== 200) throw new Error('Registration not successful', response.status);

    const data  = await response.json();
    console.log('new user registration =>',data);
  } catch(error) {
    console.warn('something went wrong during new user registration', error);
  }
}


export const useSignInUser = async function(userName, password) {
  if(!areCredentialValid(userName, password)) throw new Error('Please provide valid user name and password for signing in');
  try {
    const response = await fetch('http://localhost:3000/auth/signin', {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({username: userName, password})
    });
    
    if(!response.ok || response.status !== 200) throw new Error('Sign in not successful', response.status);
    
    const data = await response.json();
    console.log('sign in =>', data);
    return data;
  } catch(err) {
    console.warn('something went wrong during sign in', err);
    throw err;
  }
}


export const useFetchPosts = async function() {
  try {
    const response = await fetch('http://localhost:3000/protected/posts', {
      method: 'get',
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer 32750ad9744591b89586d56bd01181b78ed434b732cbd1a243e64cc146a570cb"
      }
    });

    const data = await response.json();
    return data;

  } catch(err) {
    console.warn('error while fetching posts => ',err);
  }
}


