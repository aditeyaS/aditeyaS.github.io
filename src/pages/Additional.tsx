import { useEffect } from "react";
import AdditionalIcon from "../icons/AdditionalIcon";
import PageContainer from "../components/PageContainer";

const Additional = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <PageContainer
      title="Additional"
      icon={<AdditionalIcon size="lg" />}
      pageBody={
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 justify-center">
            <button
              className="flex items-center gap-2 px-2 py-1 border rounded-lg hover:bg-base-200"
              style={{ borderColor: "#EFCC00" }}
              onClick={() =>
                window.open("https://buymeacoffee.com/aditeyaaaa", "_blank")
              }
            >
              <img
                className="w-8 h-8"
                src={`https://cdn.simpleicons.org/buymeacoffee/EFCC00`}
              />
              <span style={{ color: "#EFCC00" }}>Buy Me A Coffee</span>
            </button>
          </div>
        </div>
      }
    />
  );
};

export default Additional;
