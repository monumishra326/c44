import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";

export const LoginSignUp = () => {
  // const dispatch = useDispatch();
  // const user = useSelector((store) => store.user);
  const [loginData, setloginData] = useState({
    name: "",
    password: "",
  });

  const loginHndler = (e) => {
    e.preventDefault();
    let array;
    axios.get("http://localhost:8080/users").then(({ data }) => {
      array = data;
      let check = false;
      array = array.filter((user, i) => {
        if (
          loginData.name == user.name &&
          loginData.password == user.password
        ) {
          check = true;
          return user;
        }
      });

      if (check == true) {
        localStorage.setItem("userlogindetails", JSON.stringify(array));
        // dispatch(array);
      } else {
        alert("invalid credential");
      }
    });
  };

  const [userdata, setuserdata] = useState({
    name: "",
    password: "",
    location: "",
    intrests: [],
    image: "",
    subscribed: [],
  });

  // const { name, password, location, image } = user;

  const inputHndler = (e) => {
    const { className, value } = e.target;

    let array = userdata.intrests;

    if (
      className == "technology" ||
      className == "food" ||
      className == "movies" ||
      className == "culture" ||
      className == "art" ||
      className == "drama"
    ) {
      array.push(className);
      setuserdata({ ...userdata, intrests: array });
    } else {
      setuserdata({ ...userdata, [className]: value });
    }
  };

  const submitHandle = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/users", userdata).then(() => {
      alert("submitted");
      setuserdata({
        name: "",
        password: "",
        location: "",
        intrests: [],
        subscribed: [],
        image: "",
      });
    });
  };

  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={submitHandle}>
        <h1>SignUp</h1>
        <label>name</label>
        <br />
        <input
          type="text"
          className="name"
          id="name"
          onChange={inputHndler}
          required
        />
        <br />
        <label>password</label>
        <br />
        <input
          type="text"
          className="password"
          id="password"
          onChange={inputHndler}
          required
        />
        <br />
        <select
          value={""}
          className="location"
          id="location"
          onChange={inputHndler}
        >
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={(event) => {
            inputHndler(event);
          }}
        />
        <br />
        <label>food</label>
        <input
          type="checkbox"
          className="food"
          onChange={(event) => {
            inputHndler(event);
          }}
        />
        <br />
        <label>movies</label>
        <input
          type="checkbox"
          className="movies"
          onChange={(event) => {
            inputHndler(event);
          }}
        />
        <br />
        <label>culture</label>
        <input
          type="checkbox"
          className="culture"
          onChange={(event) => {
            inputHndler(event);
          }}
        />
        <br />
        <label>art</label>
        <input
          type="checkbox"
          className="art"
          onChange={(event) => {
            inputHndler(event);
          }}
        />
        <br />
        <label>drama</label>
        <input
          type="checkbox"
          className="drama"
          onChange={(event) => {
            inputHndler(event);
          }}
        />
        <br />
        <label>image</label>
        <br />
        <input
          type="text"
          className="image"
          id="image"
          onChange={inputHndler}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <hr />
      <form className="login" onSubmit={loginHndler}>
        <h1>Login</h1>
        <label>name</label>
        <br />
        <input type="text" className="name" onChange={(event) => {}} required />
        <br />
        <label>password</label>
        <br />
        <input
          type="text"
          className="password"
          onChange={(event) => {}}
          required
        />
        <br />
        <input
          type="submit"
          className="submitLoginForm"
          onClick={submitHandle}
        />
      </form>
    </div>
  );
};
