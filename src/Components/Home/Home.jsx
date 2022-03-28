import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./home.css";

export const Home = () => {
  const [meetup, setmeetup] = useState([]);

  const getdata = () => {
    axios.get("http://localhost:8080/meetups").then((data) => {
      setmeetup(data.data);

      console.log(data.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="homeContainer">
      {
        // .filter((el) => {}) // Filter on the basis of Users interests and location (both true)
        meetup.map((el) => {
          return (
            <Link to={`add route here`} className="events">
              {
                /* add your children here (divs)
              ex : title, theme, theme, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
              
             */
                <div style={{ border: "2px solid red" }}>
                  <div className="title">{el.title}</div>
                  <div className="theme">{el.theme}</div>
                  <div className="description">{el.description}</div>

                  <div className="date">{el.date}</div>
                  <div className="time">{el.time}</div>
                  <div className="location">{el.location}</div>
                  <img src={el.image} className="" />
                </div>
              }
            </Link>
          );
        })
      }

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"} // add value here
            onChange={(e) => {}}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to="./addmeetup" className="addm">
          {" "}
          Add Meetup
        </Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {meetup.map((el) => {
            return (
              <Link to="" className="events">
                {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                <div className="title">{el.title}</div>
                <div className="theme">{el.theme}</div>
                <div className="description">{el.description}</div>

                <div className="date">{el.date}</div>
                <div className="time">{el.time}</div>
                <div className="location">{el.location}</div>
                <img src={el.image} className="" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
