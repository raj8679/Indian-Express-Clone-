



function getInputValue(id){
    //we are making this function to call value from function Register to reduce code getElementBy id

    let value=document.getElementById(id).value;
    return value
}

//CF
function User(n,e,p,u,m,d){
  this.name=n;
  this.email=e;
  this.username=u;
  this.password=p;
  this.mobile=m;
  this.description=d;
}

async function Register(){
   try{
    const name=getInputValue("name");
    const email=getInputValue("email");
    const username=getInputValue("username");
    const password=getInputValue("password");
    const mobile=getInputValue("mobile");
    const description=getInputValue("description");

    //geting value from users function
    let user_data= new User(name,email,username,password,mobile,description);
    console.log("user",user_data)

    //const register_url=`https://masai-api-mocker.herokuapp.com/auth/register`


    let res=await fetch('https://masai-api-mocker.herokuapp.com/auth/register'
    ,{
        method:"POST",
        body:JSON.stringify(user_data),
        headers:{
            "Content-Type":"application/json",
        },
    });
     let data=await res.json();
     console.log("data",data) 

    // if(data){
    //     alert("signup Succesfull")
    //     window.location.href='signin.html'
    // }
   }catch(error){
    console.log(error)
   }
}

