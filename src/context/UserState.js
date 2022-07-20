import userContext from "./UserContext";
import { useState } from "react";
import { toast } from "react-toastify";
let intial = { stat: false, user: null };

const UserState = (props) => {

  const [user, setuser] = useState(intial);
  const host = "http://localhost:5000";

  const logIn = async (email, password) => {
    try {
      const response = await fetch(`${host}/api/mauth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.status === 401) {
        toast.error("Check email or password.");
        return;
      }
      if (response.status === 500) {
        toast.error("Sorry! Internal problem.");
        return;
      }
      if (response.status === 200) {
        const json = await response.json();
        setuser({ stat: true, user: json.user, jwt :json.jwtData });
        localStorage.setItem("cbookuserid", json.jwtData);
        // console.log(user);
        toast.success("Logging in successfull");
        return;
      }
      toast.error("Something went wrong.");
    } catch {
      toast.error("Something went wrong.");
    }
  };

  const resendo = async (email) => {
    try {
      const response = await fetch(`${host}/api/mauth/resend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
      if (response.status === 401) {
        toast.error("Check email");
        return;
      }
      if (response.status === 500) {
        toast.error("Sorry! Internal problem.");
        return;
      }
      if (response.status === 200) {
        toast.success("Otp has sent.")
        return
      }
      toast.error("Something went wrong.")

    } catch (error) {
      toast.error("Something went wrong.")
    }
  }

  const signUp = async (name, email, password, cpassword) => {
    if (password !== cpassword) {
      toast.error("Password and Confirm password is not same.")
      return false;
    }
    try {
      const response = await fetch(`${host}/api/mauth/mcreateuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.status === 405) {
        toast.error("User already exist.");
        return false;
      }
      if (response.status === 500) {
        toast.error("Sorry! try after sometime.");
        return false;
      }
      if (response.status === 200) {
        toast.success("Account has created. please! activate Your account.")
        // const json = await response.json();
        return true;
      }

      toast.error("Something went wrong.");
      return false;

    } catch (error) { toast.error("Something went wrong."); return false; }
  };


  const activate = async (email, otp) => {
    try {
      const response = await fetch(`${host}/api/mauth/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });
      if (response.status === 400) {
        toast.error("Enter Valid Email or Otp");
        return;
      }
      if (response.status === 401) {
        toast.error("Please! signup first.");
        return;
      }
      if (response.status === 402) {
        toast.error("Wrong otp");
        return;
      }
      if (response.status === 500) {
        toast.error("Sorry! try after sometime.");
        return;
      }
      if (response.status === 200) {
        toast.success("Hurrah! Account has activated. You can login.")
        return;
      }
      toast.error("Something went wrong.");

    } catch { toast.error("Something went wrong."); }
  }

  const signout = () => {
    setuser(intial);
    localStorage.removeItem("cbookuserid");
    toast.success("Sign Out Successfully");
  }

  const checkuserinlocal = async () => {
    try {


      const temp = localStorage.getItem("cbookuserid");
      if (temp) {
        const response = await fetch(`${host}/api/mauth/getuser`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": temp
          }
        });
        if (response.status === 500) {
          toast.error("Internal server error!");
          return;
        }
        if (response.status === 200) {
          const json = await response.json();
          setuser({ stat: true, user: json ,jwt:temp});
          console.log(json)
          return;
        }
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  }
  const changepass = async (email, password, otp) => {
    try {
      const response = await fetch(`${host}/api/mauth/forpass`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password , otp}),
      });
      console.log(response.json)
      if(response.status === 400 ||  response.status === 401){
        toast.error("Enter valid data.");
        return;
      }
      if(response.status === 402){
        toast.error("Verify Your id first.");
        return;
      }
      if(response.status === 403){
        toast.error("Enter valid otp.");
        return;
      }
      if(response.status === 200){
        toast.success("Password changed");
      }
    } catch (error) {
      toast.error("Something went worng.");
    }
  }
  return (
    <userContext.Provider
      value={{
        logIn,
        signUp,
        user,
        activate,
        signout,
        resendo,
        checkuserinlocal,
        changepass
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};
export default UserState;
