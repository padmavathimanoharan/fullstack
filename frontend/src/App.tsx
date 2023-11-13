import { useState } from "react";
import AddStudent from "./pages/AddStudent";

const App = () => {
  const [student, setStudent] = useState();
  return <AddStudent />;
};

export default App;
