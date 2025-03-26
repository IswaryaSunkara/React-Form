import { useState } from "react";
import "./App.css"; // Import the CSS file
const App = () => {
  const [data, setData] = useState({
    username: "",
    Mobileno:"",
    email: "",
    password: "",
    confirmpassword: "",
  });

  let { username,Mobileno, email, password, confirmpassword } = data;

  let changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !username.trim() ||
      !Mobileno.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmpassword.trim()
    ) {
      alert("Please fill all the details.");
      return; // Stop form submission
    }

    if(password!==confirmpassword){
      alert("Please Enter Correct Password");
      return;
    }
    console.log("Submitted Data:", data);

    setData({
      username: "",
      Mobileno: "", 
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  return (
    <>

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onChange={changeHandler} placeholder="Enter your username" />
        </div>

        <div className="form-group"> 
          <label htmlFor="Mobileno">Mobile No:</label>
          <input type="text" id="Mobileno" name="Mobileno" value={Mobileno} onChange={changeHandler} placeholder="Enter your Mobileno" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={changeHandler} placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={changeHandler} placeholder="Enter your password" />
        </div>

        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input type="password" id="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={changeHandler} placeholder="Re-enter your password" />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default App;

