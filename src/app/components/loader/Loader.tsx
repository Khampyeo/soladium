import { clsx } from "clsx";

type Size = "xl" | "l" | "m";
type Props = {
  type?: "screen" | "component";
  size?: Size;
};
const Loader = ({ type = "screen", size = "xl" }: Props) => {
  const sizeLoader: Record<Size, string> = {
    xl: "h-16 w-16 border-4",
    l: "h-10 w-10 border-[3px]",
    m: "h-5 w-5 border-2",
  };
  return (
    <div
      className={clsx("flex items-center justify-center bg-transparent ", {
        "h-dvh": type === "screen",
        "h-full": type !== "screen",
      })}
    >
      <div
        className={clsx(
          "rounded-full border-[#3c50e0] border-t-transparent animate-spin",
          sizeLoader[size]
        )}
      ></div>
    </div>
  );
};

export default Loader;
