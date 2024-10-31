import { useEffect, useState } from "react";
import { TXT2 } from "../../components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { USER_LINKEDIN_URL } from "../../user-data";

export const NewUserMessage = () => {
  const [isMac, setIsMac] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsMac(navigator.userAgent.toUpperCase().includes("MAC"));
    const hide = localStorage.getItem("hide-new-user-message");
    if (!hide) {
      setOpen(true);
    }
  }, []);

  const onHide = () => {
    localStorage.setItem("hide-new-user-message", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hello!</DialogTitle>
          <DialogDescription>
            Welcome to{" "}
            <a
              className="underline underline-offset-2 hover:text-primary"
              target="_blank"
              href={USER_LINKEDIN_URL}
            >
              my
            </a>{" "}
            Portfolio
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 tracking-widest text-sm">
          <TXT2>
            🌓 Change <span className="text-foreground">theme</span>,{" "}
            <span className="text-primary">accent color</span>,{" "}
            <span className="font-bold text-foreground">wallpaper</span> form
            top right.
          </TXT2>
          <TXT2>
            🔍{" "}
            <span className="font-bold text-foreground">
              {isMac ? "⌘" : "⌃"}K
            </span>{" "}
            to search
          </TXT2>
        </div>
        <DialogFooter>
          <button
            className="text-sm border border-primary text-foreground-2 px-2 py-1 rounded hover:bg-primary/50"
            onClick={onHide}
          >
            Don't show again
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
