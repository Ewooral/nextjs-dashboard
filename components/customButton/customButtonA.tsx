import { useEffect, useRef } from "react";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import Link from "next/link";

export const CustomButtonA: React.FC<MyProps> = (props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Check if the pressed key is the Enter key (key code 13)
      if (event.key === "Enter") {
        // Trigger the button's click event if buttonRef.current is not null
        buttonRef.current?.click();
      }
    };

    // Attach the event listener to the document
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const handleClick = () => {
    // Handle button click here
    console.log("Button clicked!");
  };

  return (
    
      <button ref={buttonRef} onClick={props.onClick} className="p-1">
        {``}
        <span className="md:inline lg:inline xl:inline">{props.name}</span>
        <span className="hidden sm:inline">
          {" "}
          or Press Enter key
        </span>
      </button>
  
  );
};


/**
 * 
 *     The initial count value is retrieved from localStorage when the component mounts. If the value is not present, it defaults to 0.

The useEffect hook is used to update countRef.current whenever the count state changes. Additionally, it stores the count value in localStorage, making it persistent across refreshes.
Now, the count value will be retrieved from localStorage when the component mounts, and changes to the count will be stored in localStorage, 
ensuring persistence across browser refreshes. Keep in mind that localStorage has a storage limit (usually around 5 MB), and the data is stored as a string, 
so you might need to serialize and deserialize more complex data structures if necessary.
 */