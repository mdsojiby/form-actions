
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

//   const handleSignSubmit=data =>{
//    console.log('sign up data',data)
// }

// const handleUpdateProfile= data =>{
//   console.log('update profile',data)
// }


  return (
    <>
    
      <h1>Form Sign</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm 
      formTitle={'Sign Up'}
       handleSubmit={handleSignSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Sign up for all</p>
        </div>

       </ReusableForm>
      <ReusableForm 
      formTitle={'Profile Update'} 
      submitBtnText='Update' 
       handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update Profile</h2>
          <p>Update profile of all</p>
        </div>

       </ReusableForm>
       */}
       
    </>
  )
}

export default App
