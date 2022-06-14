import classes from "./DebounceInput.module.css";
import { ChangeEvent, useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

interface Props {
    readonly onChange: Function
    readonly placeholder: string
}

export default function DebounceInput({ onChange, placeholder="" }:Props) {
  const [value, setValue] = useState<string>(""),
    debounceInput = useDebounce(value);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  useEffect(() => {
    onChange(value);
  }, [debounceInput]);

  return (
    <div className={classes.container}>
      <input className={classes.input} value={value} onChange={handleChange} placeholder={placeholder} />
      <div className={classes.cross} onClick={() => setValue("")} data-disabled={!value}/>
    </div>
  );
}
