import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-red-600">
        traning
        <i class="pi pi-check"></i>
        <i class="pi pi-times"></i>
        <span class="pi pi-search"></span>
        <span class="pi pi-user"></span>
      </div>
    </>
  );
}

export default App;
