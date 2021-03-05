import { useRef, useState } from "react";

const useStateRef = (value) => {

  const [state, setState] = useState(value)
  const ref = useRef(state)

  const setStateRef = (value) => {
    setState(value)
    ref.current = value
  }

  return [ref, state, setStateRef]

}

export default useStateRef;