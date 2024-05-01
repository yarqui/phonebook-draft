import Label from "../Label/Label";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slices/filterSlice";
import { useEffect, useState } from "react";

const Filter = () => {
  const [filterValue, setFilterValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(setFilter(filterValue));
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [filterValue, dispatch]);

  return (
    <div className="relative mb-10 flex flex-col-reverse gap-1">
      <Input
        type="text"
        name="filter"
        title="Filter"
        value={filterValue}
        onChange={handleChange}
        className="peer placeholder-transparent"
        placeholder="Find contacts"
      />
      <Label
        htmlFor="filter"
        label="Find contacts"
        className="pointer-events-none absolute -top-3.5 left-0 text-sm font-semibold text-slate-600 transition-all hover:cursor-text peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
        peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-slate-600"
      />
    </div>
  );
};

export default Filter;
