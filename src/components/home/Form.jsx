import React, { useState } from "react";

const Form = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [fullNameError, setFullNameError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  const handleFullName = (e) => {
    setFullName(e.target.value);
    setFullNameError("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName) {
      setFullNameError("please enter you name..!");
    } else if (!email) {
      setEmailError("please enter an email..!");
    } else if (!password) {
      setPasswordError("please enter the password..!");
    } else {
      console.log("submitted");
    }
  };

  return (
    <>
      <h1 className="text-6xl text-center text-stone-800 tracking-wide font-semibold mt-20">
        form validation
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" m-auto my-20 h-150 bg-stone-100 border-4 border-dashed border-black w-fit rounded-xl"
      >
        <div className="flex flex-col my-20 ">
          <p class="text-2xl font-semibold text-red-700 ml-15 tracking-wide">
            {fullNameError}
          </p>
          <input
            onChange={handleFullName}
            className="text-2xl font-semibold bg-white w-md h-14 tracking-wide p-3 mx-15 my-5 border-2 rounded-xl focus:bg-violet-200 focus:text-stone-800 focus:border-dashed"
            type="text"
            placeholder="Full Name"
          />
          <p class="text-2xl font-semibold text-red-700 ml-15 tracking-wide">
            {emailError}
          </p>
          <input
            onChange={handleEmail}
            className="text-2xl font-semibold  bg-white w-md h-14 tracking-wide p-3 mx-15 my-5 border-2 rounded-xl focus:bg-violet-200 focus:text-stone-800 focus:border-dashed"
            type="email"
            placeholder="E-mail"
          />
          <p class="text-2xl font-semibold text-red-700 ml-15 tracking-wide">
            {passwordError}
          </p>
          <input
            onChange={handlePassword}
            className="text-2xl font-semibold  bg-white w-md h-14 tracking-wide p-3 mx-15 my-5 border-2 rounded-xl focus:bg-violet-200 focus:text-stone-800  focus:border-dashed"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="w-30 h-12 border-2 text-center m-auto my-20 rounded-2xl transition-all hover:border-dashed">
          <button
            className="text-2xl font-semibold text-stone-950 w-full h-full bg-stone-50 leading transition-all hover:text-black hover:bg-violet-200 hover:rounded-2xl active:bg-violet-400 "
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
