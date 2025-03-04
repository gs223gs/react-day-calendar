import { useState } from "react";
function App() {
  const [year, setYear] = useState(new Date().getFullYear() );
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [day, setDay] = useState(new Date().getDate());

  return (
    <div>
      <p>
        {year}/{month}/{day}
      </p>
    </div>
  );
}

export default App;
