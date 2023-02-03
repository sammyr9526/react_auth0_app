import { useState, useEffect } from "react";
import Logout from "./Logout";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import ShowPet from "./ShowPet";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  const url = "https://api.thecatapi.com/v1/images/search";

  const [imgpet, setImgPet] = useState(
    "https://cdn2.thecatapi.com/images/8lg.gif"
  );
  const [peturl, setPeturl] = useState(url);
  const [option, setOption] = useState("cat");

  const changePet = () => {
    if (option === "cat") {
      setOption("dog");
      setPeturl("https://dog.ceo/api/breeds/image/random");
    }
    if (option === "dog") {
      setOption("cat");
      setPeturl("https://api.thecatapi.com/v1/images/search");
    }
  };

  const cleanUrl = () => {
    setOption("");
    setPeturl("");
  };
  const getUrl = async () => {
    const data = await fetch(peturl);
    const json = await data.json();
    console.log(json);

    if (option === "cat") {
      setImgPet(json[0].url);
    }
    if (option === "dog") {
      setImgPet(json.message);
    }
  };
  useEffect(() => {
    return () => {
      getUrl();
    };
  }, [peturl]);

  return (
    <div>
      <Profile />
      <ShowPet imgpet={imgpet} />
      <br />
      <br />
      <div className=" mx-10 justify-center flex">
        <button
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
          onClick={() => {
            getUrl();
          }}
        >
          i want more
        </button>
      </div>
      <div className="mx-10 justify-center flex">
        <button
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
          onClick={() => {
            changePet();
          }}
        >
          i preffer {option}
        </button>
      </div>
      <Logout />
    </div>
  );
};

export default Home;

/* 
  const changePet = () => {
    if (option === "cat") {
      setOption("dog");
      setPeturl("https://dog.ceo/api/breeds/image/random");
      getUrl2();
    }
    if (option === "dog") {
      setOption("cat");
      setPeturl("https://api.thecatapi.com/v1/images/search");
      getUrl();
    }
  };

  const getUrl = async () => {
    const data = await fetch(peturl);
    const json = await data.json();
    setImgPet(json[0].url);
    setOption("cat");
  };

  const getUrl2 = async () => {
    const data = await fetch(peturl);
    const json = await data.json();
    setImgPet(json.message);
    setOption("dog");
  };
 */
