import SigninScreen from "@/modules/users/screens/signin";
import { redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    redirect("/dashboard");
  }
  return <SigninScreen />;
}

export default App;
