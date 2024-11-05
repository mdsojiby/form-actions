import { useInputState } from "react";
import UseInputState from "../../hooks/useinputState";

const HookForm = () => {

    // const [name,handleChangeName]=useInputState('rojoni kante')
    const emailState=UseInputState('my@sojib.com')

    const handleSubmit = e=>{
        console.log('hook data ',emailState.value)
        e.preventDefault()
       
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleChangeName} type="text" name="name"/> */}
                <br />

                <input  {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />

               
             
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;