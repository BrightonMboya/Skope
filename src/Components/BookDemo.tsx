import React, { useState } from "react";

const BookDemo = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const nameChangeHandler = (event: any) => {
    setEnteredName(event.target.value);
  };

  const passwordChangeHandler = (event: any) => {
    setEnteredPassword(event.target.value);
  };

  const messageChangeHandler = (event: any) => {
    setEnteredMessage(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="md:flex items-center justify-center mb-[4rem]">
      <div>
        <div className="mt-7 flex justify-center items-center">
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-center md:text-xl">
              Book a Demo
            </h3>
            <p className="text-center mt-2 md:text-lg">
              Get in touch with us to book a demo or for media queries
            </p>
          </div>
        </div>
        <div className="w-full max-w-xs mt-8">
          <form
            onSubmit={submitHandler}
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <input
                type="text"
                value={enteredName}
                onChange={nameChangeHandler}
                placeholder="Enter Your Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={passwordChangeHandler}
                placeholder="EnterYourPassword"
                value={enteredPassword}
              />
            </div>

            <div>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full h-[20vh] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type Your message here"
                value={enteredMessage}
                onChange={messageChangeHandler}
              />
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="mr-2 leading-tigh" />
              <span className="text-sm text-center">
                I Consent to get news, product and service updates from skope.
              </span>
            </div>

            <div className="mt-5 flex items-center justify-center">
              <button className="shadow bg-[#5568FE] focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded">
                Submit
              </button>
            </div>

            <div className="flex items-center ">
              <h3 className="text-center mt-5 text-sm mb-5 md:text-lg">
                By signing up, you accept our{" "}
                <span className="font-semibold">privacy policy.</span> Your
                contact information will only be used within Skope and will
                never be shared with third parties.{" "}
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
