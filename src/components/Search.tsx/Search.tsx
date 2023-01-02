import * as React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useKeyPress } from "ahooks";

import { BiX } from "react-icons/bi";

type SearchProps = {
  children?: React.ReactNode;
};

type Inputs = {
  searchText: string;
};

const Search: React.FC<SearchProps> = () => {
  const { register, handleSubmit, setFocus, resetField, watch } =
    useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const textInput = watch("searchText");

  const registerHandle = () => {
    resetField("searchText");
    setFocus("searchText");
  };

  useKeyPress(
    ["ctrl.decimalpoint"],
    () => {
      setFocus("searchText");
    },
    {
      exactMatch: true,
    }
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex w-72 items-center"
    >
      <input
        type="text"
        placeholder="Search..."
        {...register("searchText")}
        className="input-bordered input h-10 w-full max-w-xs"
      />
      {textInput == undefined ? (
        <div className="pointer-events-none absolute right-2 top-2 hidden gap-1 opacity-50 lg:flex">
          <kbd className="kbd kbd-xs">ctrl</kbd>+
          <kbd className="kbd kbd-xs">.</kbd>
        </div>
      ) : (
        <span
          className="absolute right-2 top-2 hidden cursor-pointer gap-1 opacity-50 lg:flex"
          onClick={() => {
            registerHandle();
          }}
        >
          <BiX className="h-6 w-6" />
        </span>
      )}
    </form>
  );
};

export default Search;
