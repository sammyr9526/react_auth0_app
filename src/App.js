import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="App h-screen justify-center text-center flex ">
      <div className="mt-8 mb-4">
        <h1 className="text-slate-50">App</h1>
        <button
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
