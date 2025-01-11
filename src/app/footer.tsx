import USER from "@/data/user";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 p-6">
      <span className="font-thin z-10">
        &copy; {USER.name}, {new Date().getFullYear()}
      </span>
    </footer>
  );
}
