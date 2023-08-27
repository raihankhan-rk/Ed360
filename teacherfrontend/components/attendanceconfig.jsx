
import Body from "./Body";

import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

// Textarea.defaultProps = {
//   question: "Question"
// };

export default function Attendanceform({ blok }) {
  // Array to store components
  // const [FormList, addForm] = React.useState([]);

  // //function to add components to array
  // const addElement = (item) => {
  //   addForm([...FormList, { value: item }]);
  //   console.log("List after add:", FormList);
  // };

  // //function to remove components from array
  // const remove = (index, event) => {
  //   const list = [...FormList];
  //   list.splice(index, 1);
  //   addForm(list);
  //   event.preventDefault();

  return (
    <>
      {/* body wrapper */}
      <Body title="Attendance Form" {...storyblokEditable(blok)}>

        {/* <form className="p-8 py-0" id="attsub">
          
          {FormList.map((e, index) => (
            <div key={index}>
              {e.value === "mcq" ? (
                <MCQ item={index} remove={remove} />
              ) : e.value === "scq" ? (
                <SCQ item={index} remove={remove} />
              ) : e.value === "txt" ? (
                <Textarea item={index} remove={remove} />
              ) : null}
            </div>
          ))}
        </form> */}

        <div className="flex flex-col justify-between max-md:flex-col gap-5 mx-8 my-5">
          <div className="flex flex-col justify-between max-md:flex-col gap-5">
            {blok?.elements.map((nestedBlok) => (
              <StoryblokComponent className='' blok={nestedBlok} key={nestedBlok._uid} />
            ))}
            {/* <button
              onClick={() => addElement("mcq")}
              className="bg-primary rounded-full font-[Montserrat] text-xl text-white font-medium px-10 py-3"
            >
              + MCQ
            </button>

            <button
              onClick={() => addElement("scq")}
              className="bg-primary rounded-full font-[Montserrat] text-xl text-white font-medium px-10 py-3"
            >
              + SCQ
            </button>

            <button
              onClick={() => addElement("txt")}
              className="bg-primary rounded-full font-[Montserrat] text-xl text-white font-medium px-10 py-3"
            >
              + TextArea
            </button> */}
          </div>

          <button
            type="submit"
            form="attsub"
            className="bg-accent rounded-full font-[Montserrat] text-xl text-white font-medium px-10 py-3"
          >
            Submit
          </button>
        </div>
      </Body>
    </>
  );
}
