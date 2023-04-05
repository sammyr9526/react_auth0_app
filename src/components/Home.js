import { useState, useEffect } from "react";
import Logout from "./Logout";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import ShowPet from "./ShowPet";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  const [peturl, setPeturl] = useState(
    "https://api.thecatapi.com/v1/images/search"
  );
  const [option, setOption] = useState("cat");
  const [option2, setOption2] = useState("dog");
  const [imgpet, setImgPet] = useState();

  const changePet = async () => {
    if (option === "cat") {
      setOption("dog");
      setPeturl("https://dog.ceo/api/breeds/image/random");
      await setTimeout(() => {
        setOption2("cats");
      }, 1000);
    }
    if (option === "dog") {
      setOption("cat");
      setPeturl("https://api.thecatapi.com/v1/images/search");
      setTimeout(() => {
        setOption2("dogs");
      }, 1000);
    }
  };

  const getUrl = async () => {
    const data = await fetch(peturl);
    const json = await data.json();

    if (option === "cat") {
      const result = await json[0].url;
      setImgPet(result);
    }
    if (option === "dog") {
      const result = await json.message;
      setImgPet(result);
    }
  };
  useEffect(() => {
    getUrl();
  }, [peturl]);
  return (
    <div>
      <Profile />
      <Logout />
      <ShowPet imgpet={imgpet} />
      <div className=" mx-10 justify-center flex mt-3">
        <button
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded  "
          onClick={() => {
            getUrl();
          }}
        >
          i want more!!
        </button>
      </div>
      <div className="mx-10 justify-center flex mt-2 mb-3">
        <button
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
          onClick={() => {
            changePet();
          }}
        >
          i preffer {option2}
        </button>
      </div>
    </div>
  );
};

export default Home;
