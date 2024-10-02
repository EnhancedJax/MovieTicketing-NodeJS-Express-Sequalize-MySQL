import { LoaderPinwheel } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoaderPinwheel className="w-10 h-10 animate-spin" />
    </div>
  );
}
