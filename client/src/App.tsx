import './App.css'
import { SignOutButton, SignInButton, SignedIn, SignedOut, SignIn, SignUp, UserButton } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"
import { Link, Route, Routes } from "react-router-dom";
import SignUpPage from './components/custom/auth/SignUpPage';
import SignInPage from './components/custom/auth/SignInPage';

function App() {

  return (
    
    <div className=''>
      <SignedOut>
        <Link to="/sign-in">Sign In</Link> <br />
        <Link to="/sign-up">Sign Up</Link>
        <Routes>
          <Route path='/sign-in' element={<SignInPage/>}/>
          <Route path='/sign-up' element={<SignUpPage/>}/>
        </Routes>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl='/'/>
      </SignedIn>
    </div>
  )
}

export default App
