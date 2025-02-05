import React from "react";

type Props = {
  message: string;
};
const UserMessage = ({ message }: Props) => {
  return (
    <div className="w-full flex justify-end mb-1">
      <div className="px-3 py-1.5 bg-primary rounded-2xl max-w-[90%] text-white">
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};
export default UserMessage;
