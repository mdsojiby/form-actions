import { useState } from "react";


const StatefulForm = () => {

    const [email,setEmail]=useState(null)
    const [name,setName]=useState('sojib')
    const [password,setPassword]=useState(null)
    const [error,setError]=useState('')

    const handleSubmit=e=>{
        e.preventDefault();
        if(password.length<6){
            setError('this is not currect')
        }
        else{
            setError('')
        }
        console.log ( name, email,password)

        
        }

        const handleChangeName = e =>{
            setName(e.target.value)
        }

        const handleEmailChange= e =>{
            console.log(e.target.value)
            setEmail(e.target.value)
            
        }

        const handleChangePassword= e =>{
            setPassword(e.target. value)
        }



       
        


        

    
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input value={name} 
                onChange={ handleChangeName} type="text" name="name"/>
                <br />

                <input 
                onChange={handleEmailChange}
                
           
                type="email" name="email" id="" />
                <br />
                <input
                onChange={handleChangePassword} type="password" name="password" required />
                <br />

               
             
                <input type="submit" value="submit" />

            {
                error && <p>{error}</p>
            }
                
            </form>
        </div>
    );
};

export default StatefulForm;