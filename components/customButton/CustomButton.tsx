import { useEffect, useRef } from "react";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import Link from "next/link";

export const CustomButton: React.FC = () => {
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
    <Link
      href="/login"
      className="flex justify-start items-center bg-[#0d2b49] w-fit mt-4 rounded-[9px] border-2 border-[#0059b2] p-1"
    >
      <article className="">
        <LockOpenRoundedIcon
          sx={{ fontSize: 17, marginBottom: "6px", color: "#fffb00" }}
        />
      </article>
      <button ref={buttonRef} onClick={handleClick} className="p-1">
        {``}
        <span className="md:inline lg:inline xl:inline">Login</span>
        <span className="hidden sm:inline">
          {" "}
          or Press Enter key
        </span>
      </button>
    </Link>
  );
};
