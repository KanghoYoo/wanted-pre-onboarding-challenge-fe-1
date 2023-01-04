import { useState, useCallback } from "react";

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange, setValue];
};

export default useInput;
