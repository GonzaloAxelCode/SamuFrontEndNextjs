import { useEffect, useState } from "react";

const useRender = () => {
  const [render,setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  },[]);

  return render
};

export default useRender;
