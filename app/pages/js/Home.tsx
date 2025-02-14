"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import "../css/Home.css";
import { FiSearch } from "react-icons/fi";
import Featured from "./Featured";
import Popular from "./Popular";
import { WiDayStormShowers } from "react-icons/wi";
import Team from "./Team";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import Head from "next/head";
import url from "./Host";

export default function Home() {
  const [select, setSelect] = React.useState("");
  const [models, setModels] = React.useState([{ id: 0, name: "none" }]);
  const [series, setSeries] = React.useState([{ id: 0, name: "none" }]);
  const [position, setPosition] = React.useState([{ id: 0, name: "none" }]);




  useEffect(() => {
    axios.get(`https://baracar.onrender.com/api/models/`).then((res) => {
      setModels(res.data);
    });
  }, []);
  const getSeries = (value) => {
    setSelect(value);
    console.log(value);
    var seriesData = [];
    axios.get(`https://baracar.onrender.com/api/series_get/`).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (!(res.data[i].model == null)) {
          if (res.data[i].model.id === value * 1) seriesData.push(res.data[i]);
        }
      }

      setSeries(seriesData);
    });
  };
  const getPosition = (value) => {
    console.log(value);
    var seriesData = [];
    axios.get(`https://baracar.onrender.com/api/position_get/`).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (!(res.data[i].series == null)) {
          if (res.data[i].series.id === value * 1) seriesData.push(res.data[i]);
        }
      }

      setPosition(seriesData);
    });
  };

  return (
    <div>
      <Head>
        <title>BaraCar-Hompage</title>
      </Head>
      <div className="HomeHeader">
        <Navbar />
        <div className="headerBody1">
          <div className="headerBody">
            <h1>
              Find Your <span>Perfect</span> Car
            </h1>
            <div className="header_box">
              <FormControl id="inp2" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-select-small-label">Models</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Models"
                  value={select}
                  // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {models.map((item, key) => {
                    return (
                      <MenuItem
                        key={key}
                        onClick={() => {
                          getSeries(item.id);
                        }}
                        value={item.id}
                      >
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl id="inp2" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-select-small-label">Series</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Position"
                  value={position.id}

                  // onChange={handleChange}
                >
                  <MenuItem value=""></MenuItem>
                  {series.map((item, key) => {
                    return (
                      <MenuItem
                        key={key}
                        onClick={() => {
                          getPosition(item.id);
                        }}
                        value={item.id}
                      >
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl id="inp2" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-select-small-label">Pasition</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Age"
                  value={models[0].id}

                  // onChange={handleChange}
                >
                  <MenuItem value=""></MenuItem>
                  {position.map((item, key) => {
                    return (
                      <MenuItem key={key} value={item.id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <button className="Btnbody header_btn">
                <FiSearch />
              </button>
            </div>
            <div className="header_bottom">
              <div className="header_card">
                <div className="header_card_image">
                  <path
                    id="Subtraction_30"
                    data-name="Subtraction 30"
                    d="M-13895.81,20663.1a14.9,14.9,0,0,1-10.609-4.395,14.9,14.9,0,0,1-4.393-10.607,14.9,14.9,0,0,1,4.393-10.6,14.9,14.9,0,0,1,10.609-4.395,14.889,14.889,0,0,1,10.6,4.395,14.9,14.9,0,0,1,4.393,10.6,14.9,14.9,0,0,1-4.393,10.607A14.889,14.889,0,0,1-13895.81,20663.1Zm0-24a9.009,9.009,0,0,0-9,9,9.011,9.011,0,0,0,9,9,9.009,9.009,0,0,0,9-9A9.007,9.007,0,0,0-13895.81,20639.1Z"
                    transform="translate(13925 -20599)"
                    fill="#fff"
                  ></path>
                  <path
                    id="Subtraction_29"
                    data-name="Subtraction 29"
                    d="M-13895.81,20663.1a14.9,14.9,0,0,1-10.609-4.395,14.9,14.9,0,0,1-4.393-10.607,14.9,14.9,0,0,1,4.393-10.6,14.9,14.9,0,0,1,10.609-4.395,14.889,14.889,0,0,1,10.6,4.395,14.9,14.9,0,0,1,4.393,10.6,14.9,14.9,0,0,1-4.393,10.607A14.889,14.889,0,0,1-13895.81,20663.1Zm-.5-24a8.77,8.77,0,0,0-8.5,9,8.773,8.773,0,0,0,8.5,9,8.771,8.771,0,0,0,8.5-9A8.769,8.769,0,0,0-13896.308,20639.1Z"
                    transform="translate(14029 -20599)"
                    fill="#fff"
                  ></path>
                  <path
                    id="Subtraction_28"
                    data-name="Subtraction 28"
                    d="M-13904.136,20686.107c-3.425,0-5.024-1.373-5.763-2.523a4.979,4.979,0,0,1-.79-2.52,67.152,67.152,0,0,1,.5-13.7,18.819,18.819,0,0,1,2.632-7.51c2.288-3.4,5.433-4.031,8.474-4.643l.017,0c.3-.059.6-.121.9-.184,13.069-.969,29.571-1.146,29.714-1.146a206.77,206.77,0,0,0,17.679-11.3,53.678,53.678,0,0,1,12.248-6.725c3.983-1.592,7.777-2.312,14.5-2.758a153.9,153.9,0,0,1,20.244,1.211,76.571,76.571,0,0,1,18.3,4.994,47.084,47.084,0,0,1,9.506,9.672,38.831,38.831,0,0,1,3.131,4.9h15.706a7.339,7.339,0,0,1,5.476,2.633,18.189,18.189,0,0,1,3.572,7.764,52.571,52.571,0,0,1,1.285,9.652,89.68,89.68,0,0,1-.2,11.7v.006h-12.326a30.669,30.669,0,0,0-.408-6.361c-.544-3.285-1.872-7.93-5.114-11.4-3.126-3.346-7.464-5.041-12.894-5.041-10.312,0-15.274,6.2-17.621,11.4a32.1,32.1,0,0,0-2.648,11.4h-64.184a30.162,30.162,0,0,0-.421-6.312c-.552-3.264-1.892-7.881-5.14-11.355-3.188-3.408-7.627-5.135-13.192-5.135-5.543,0-10.006,1.7-13.263,5.061-6.151,6.34-6.029,16.57-6,17.717,0,.014,0,.023,0,.025A18.617,18.617,0,0,1-13904.136,20686.107Zm46.36-31.562c.067.141,5.9.209,17.834.209,1.438,0,3.068,0,4.933-.006l6.105-15.047h0a41.4,41.4,0,0,0-14.236,4.387,63.744,63.744,0,0,0-14.631,10.453l-.006,0Zm46.291-15.639c-3.291,0-6.452.18-9.51.354l-.09.006-.187.016-6.272,15.451c2.433,0,5.121-.016,7.968-.029l.752,0,1.353,0,6.412-15.789Zm7.7.439-6.219,15.318,3.47-.02,1.088,0c4.3-.023,10.188-.053,16.615-.1.312,0,.478,0,.493,0a13.3,13.3,0,0,0-.161-5.219,10.916,10.916,0,0,0-2.123-4.371,12.332,12.332,0,0,0-5.192-3.65,32.811,32.811,0,0,0-7.97-1.953Z"
                    transform="translate(13910.81 -20633.102)"
                    fill="#fff"
                  ></path>
                  <path
                    id="Path_211"
                    data-name="Path 211"
                    d="M14227.891-17798.156c.049-.1,1.166.375,2.176,3.344a23.225,23.225,0,0,1,.9,4.076c0-.068-5.548,0-5.548,0S14219.066-17798.758,14227.891-17798.156Z"
                    transform="translate(-14071.219 17822.395)"
                    fill="#ff4605"
                  ></path>
                  <path
                    id="Path_212"
                    data-name="Path 212"
                    d="M14226.857-17795.76c-.061-.1-4.7,1.8-5.48,5.779,0-.066,10.9,0,10.9,0S14238.238-17798.965,14226.857-17795.76Z"
                    transform="translate(-14216.396 17821.074)"
                    fill="#ff4605"
                  ></path>

                  <path
                    id="Path_268"
                    data-name="Path 268"
                    d="M13596.227-20971.381l46.691,32.488-51.559.025Z"
                    transform="translate(-13541.95 20991.875)"
                    fill="#f1efef"
                  ></path>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Featured /> */}
      <Popular />
      <div className="kotta">
        <h1>Why choose us?</h1>
        <div className="ushta">
          <div className="bir">
            <WiDayStormShowers className="bxs-balloon" />
            <h2>Wide range of brands</h2>
            <h4>
              We can help with your financing plan, we can offer some tips and
              tricks. Drive off with this dream car of yours regardless of your
              credit history.
            </h4>
          </div>
          <div className="bir">
            <WiDayStormShowers className="bxs-balloon" />
            <h2>Trusted by our clients</h2>
            <h4>
              We can help with your financing plan, we can offer some tips and
              tricks. Drive off with this dream car of yours regardless of your
              credit history.
            </h4>
          </div>
          <div className="bir">
            <WiDayStormShowers className="bxs-balloon" />
            <h2>Fast & easy financing</h2>
            <h4>
              We can help with your financing plan, we can offer some tips and
              tricks. Drive off with this dream car of yours regardless of your
              credit history.
            </h4>
          </div>
        </div>
      </div>
      <Team />
    </div>
  );
}
