import React, { useState }  from "react";

export default function SCQ(props) {
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageChange = (event) => {
    console.log(URL.createObjectURL(event.target.files[0]));
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div className="bg-pale rounded-xl my-4 py-10">
      {/* Content Container */}
      <div className="w-11/12 m-auto">
        {/* heading, file upload, publish */}
        <div className="flex flex-row justify-between items-center w-full">
          <label
            for={`Question ${props.index}`}
            className="text-3xl font-[Montserrat] font-medium text-accent"
          >
            Question - {props.item + 1} | SCQ
          </label>
          <div className="flex flex-row gap-4 justify-center items-center">
            {/* delete button */}
            <button
              onClick={(e) => {
                props.remove(props.item, e);
              }}
              className="bg-white rounded-full w-[53px] h-[53px] flex justify-center items-center"
            >
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 22C3.0625 22 2.47417 21.7609 1.985 21.2826C1.495 20.8034 1.25 20.2278 1.25 19.5556V3.66667H0V1.22222H6.25V0H13.75V1.22222H20V3.66667H18.75V19.5556C18.75 20.2278 18.5054 20.8034 18.0163 21.2826C17.5263 21.7609 16.9375 22 16.25 22H3.75ZM6.25 17.1111H8.75V6.11111H6.25V17.1111ZM11.25 17.1111H13.75V6.11111H11.25V17.1111Z"
                  fill="#9999EE"
                />
              </svg>
            </button>

            {/* Upload Button */}
            <label for="files">
              <svg
                className="w-[53px] h-[53px] cursor-pointer"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5"
                  y="2"
                  width="20"
                  height="22"
                  rx="17"
                  fill="#E9EAFF"
                />
                <circle cx="25" cy="25" r="25" fill="white" />
                <path
                  d="M22.2182 34.7611C26.3394 30.7479 29.5631 27.5399 33.149 24.0961C34.3328 22.8854 35.0826 21.7004 35.3983 20.5411C35.9508 18.3535 35.1013 16.4592 33.6225 14.9768C32.2019 13.5857 30.6826 12.9288 29.0647 13.0061C27.4468 13.0834 25.8486 13.882 24.2702 15.4019L14.2075 25.294L15.8649 26.8783L25.9275 17.0248C26.9601 16.0635 28.1888 15.1572 29.5974 15.2859C31.7437 15.581 33.6391 18.1532 33.149 19.9615C32.5276 21.5659 31.671 22.2976 30.4854 23.4585C26.8787 26.9812 24.0666 29.7053 20.5608 33.1382C19.2433 34.3171 18.3912 34.6363 17.1672 33.5246C16.5358 32.9063 16.2595 32.3009 16.3385 31.7084C16.426 31.0171 16.8257 30.539 17.2855 30.0855L26.48 21.0821C26.9 20.67 27.8566 19.8792 28.2558 20.232C28.562 20.9276 27.7734 21.5916 27.3876 21.9708L18.9429 30.2401L20.5608 31.863L29.045 23.5938C30.5063 22.1179 31.5562 20.3144 29.9131 18.6477C28.096 17.1205 26.1816 18.1401 24.8226 19.4592L15.6281 28.4626C14.6811 29.39 14.1417 30.3947 14.0102 31.4766C13.9065 32.9934 14.6048 34.211 15.5492 35.1476C16.4369 36.012 17.3958 36.4909 18.5878 36.5C20.0208 36.4438 21.4299 35.5195 22.2182 34.7611Z"
                  fill="#9999EE"
                />
              </svg>
            </label>

            <input id="files" onChange={handleImageChange} className="hidden" type="file"></input>

            </div>
        </div>

            {/* image rendering on upload */}
            <div>
              {image ? (
                
                <img
                  src={image}
                  onClick={() => setShowModal(true)}
                  className="cursor-pointer w-full my-8 rounded-2xl hover:brightness-75 transition-all ease-out duration-200"
                  alt="uploaded"
                />
              ) : null}
            </div>

            {showModal ? (
              <>
                <div className=" fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-accentD/90 flex items-center justify-center">
                  <span
                    onClick={() => setShowModal(false)}
                    className="absolute right-10 top-5 text-3xl text-white shadow-md hover:font-semibold cursor-pointer"
                  >
                    x
                  </span>
                  <img
                    src={image}
                    className=" w-[80%] max-w-3xl "
                    alt="uploaded"
                  />
                </div>
              </>
            ) : null}
          

        <form id="ques">
          <div>
            <div className="py-2">
              <label
                for="Question"
                className="text-3xl font-[Montserrat] font-medium text-accent hidden"
              >
                Question | MCQ
              </label>
            </div>
            <textarea
              className="w-full mx-auto rounded-3xl text-lg resize-none font-[Montserrat] p-5 h-[15vw]"
              placeholder="Type Something..."
            ></textarea>
          </div>

          <div className="py-2">
            <div className="py-2">
              <label
                for="Question"
                className="text-2xl font-[Montserrat] font-medium text-accent"
              >
                Option-1
              </label>
            </div>
            <input
              type="text"
              className="w-full text-lg mx-auto rounded-3xl resize-none font-[Montserrat] p-3"
              placeholder="Type Something..."
            ></input>
          </div>

          <div className="py-2">
            <div className="py-2">
              <label
                for="Question"
                className="text-2xl font-[Montserrat] font-medium text-accent"
              >
                Option-2
              </label>
            </div>
            <input
              type="text"
              className="w-full text-lg mx-auto rounded-3xl resize-none font-[Montserrat] p-3"
              placeholder="Type Something..."
            ></input>
          </div>

          <div className="py-2">
            <div className="py-2">
              <label
                for="Question"
                className="text-2xl font-[Montserrat] font-medium text-accent"
              >
                Option-3
              </label>
            </div>
            <input
              type="text"
              className="w-full text-lg mx-auto rounded-3xl resize-none font-[Montserrat] p-3"
              placeholder="Type Something..."
            ></input>
          </div>

          <div className="py-2">
            <div className="py-2">
              <label
                for="Question"
                className="text-2xl font-[Montserrat] font-medium text-accent"
              >
                Option-4
              </label>
            </div>
            <input
              type="text"
              className="w-full text-lg mx-auto rounded-3xl resize-none font-[Montserrat] p-3"
              placeholder="Type Something..."
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
