import './App.css'
import { SignOutButton, SignInButton, SignedIn, SignedOut, SignIn, SignUp, UserButton } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"
import { Link, Route, Routes } from "react-router-dom";
import SignUpPage from './components/custom/auth/SignUpPage';
import SignInPage from './components/custom/auth/SignInPage';
import Carousel from './components/custom/hero/Carousel1';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './components/custom/Loader';


import HeroPage from './components/custom/hero/HeroPage';
import Client from './components/custom/Client';



function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  


  return (
      <Client data = {data}/>

  )

{/*       
      <Loader/>
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
        <div>{JSON.stringify(data)}</div>
        <Carousel images={["dsad", "dasdas", "dsajdoiasdash"]}/> */}

}

export default App
