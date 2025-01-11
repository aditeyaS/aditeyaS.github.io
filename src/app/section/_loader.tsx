import { Skeleton } from "@/components/ui/skeleton";

export default function Loader() {
  return (
    <Skeleton className="p-4 h-96 lg:p-6 rounded-md bg-card border z-10 opacity-95" />
  );
}
