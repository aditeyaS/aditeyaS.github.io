import { useEffect } from "react";
import AdditionalIcon from "../icons/AdditionalIcon";

const Additional = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="py-10">
      <div className="flex justify-center flex flex-col items-center py-10 gap-4">
        <div className="motion-safe:animate-bounce">
          <AdditionalIcon size="lg" />
        </div>
        <h1 className="text-primary text-4xl font-bold md:text-8xl">
          Additional
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 justify-center">
          <button
            className="flex items-center gap-2 px-2 py-1 border rounded-lg"
            style={{ borderColor: "#FFDD00" }}
          >
            <img
              className="w-8 h-8"
              src={`https://cdn.simpleicons.org/buymeacoffee`}
            />
            <span style={{ color: "#FFDD00" }}>Buy Me A Coffee</span>
          </button>
          <button
            className="flex items-center gap-2 px-2 py-1 border rounded-lg"
            style={{ borderColor: "#FF5E5B" }}
          >
            <img className="w-8 h-8" src={`https://cdn.simpleicons.org/kofi`} />
            <span style={{ color: "#FF5E5B" }}>Ko-fi</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Additional;
