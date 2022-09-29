//login

async function Login(){
    let login_data={
      username:document.getElementById("login-username").value,
      password:document.getElementById("login-password").value,
    }
   
    const login_url=`https://masai-api-mocker.herokuapp.com/auth/login`
  
    let res=await fetch(login_url,{
      method:"POST",
          body:JSON.stringify(login_data),
          headers:{
              "Content-Type":"application/json",
          },
    });
    
    let data =await res.json();
    //console.log("data",data) 
    let token=data.token;
    getProfile(login_data.username,token)
  }
  
  //get profile
  async function getProfile(username,token){
      //url,username ,token
      let api=`https://masai-api-mocker.herokuapp.com/user/${username}`;
  
      let res=await fetch(api,{
        headers:{
          "Content-Type":"application/json",
  
          Authorization: `Bearer ${token}`
      },
      })

      if(token){
        window.location.href='index.html';
      }

      let data =await res.json();
      console.log("data",data) 
  }
 