/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import { Flex } from "antd";
import ArrowIcon from "@/../public/icons/icon_arrow__up-right.svg";

const FeatureItem = ({ name, description, img, link }: any) => {
  const router = useRouter();

  return (
    <Flex
      justify="center"
      align="center"
      className="w-[280px] h-[208px] bg-background-primary rounded-xl border-2 border-border cursor-pointer select-none"
      onClick={link && (() => router.push(link))}
    >
      <div className="relative w-[270px] h-[198px] p-4 bg-gradient-to-tr from-background-secondary to-gray-200 dark:to-gray-800 rounded-lg hover:from-background-primary hover:to-gray-200 hover:dark:to-gray-800 transition-all">
        <div className="overflow-hidden w-14 h-14 rounded-lg inline-block">
          <img src={img} alt="AI Technology" width={60} />
        </div>
        <Flex align="center" gap={2}>
          <p className="text-lg font-medium">{name}</p>
          <ArrowIcon className="-translate-y-1" />
        </Flex>
        <p className="text-text-secondary text-sm">{description}</p>
        {!link && (
          <Flex
            justify="center"
            align="center"
            className="absolute rounded-xl w-full h-full left-0 top-0 bg-black/15 dark:bg-black/40 cursor-default backdrop-blur-sm"
          >
            <p className="font-medium text-lg">Comming soon</p>
          </Flex>
        )}
      </div>
    </Flex>
  );
};
export default FeatureItem;
