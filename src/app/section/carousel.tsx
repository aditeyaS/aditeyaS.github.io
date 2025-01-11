import { Button } from "@/components/ui/button";
import IMAGES from "@/data/images";
import { ExternalLink } from "lucide-react";

export default function Carousel() {
  return (
    <div className="relative overflow-x-scroll py-2 carousel-scrollbar">
      <div className="flex items-center gap-6">
        {IMAGES.map((image, i) => (
          <div
            key={i}
            className="group aspect-[3/4] h-96 p-6 bg-card border rounded-md relative"
          >
            <div className="h-full w-full relative">
              <img
                src={image.url}
                alt={image.name}
                className="h-full w-full object-cover"
              />
              <div className="hidden group-hover:flex flex-col gap-2 justify-center items-center p-4 absolute inset-0 bg-background/90">
                <p className="font-light">{image.name}</p>
                <a target="_blank" href={image.externalLink}>
                  <Button variant={"ghost"} size={"icon"} className="size-7">
                    <ExternalLink />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
