import React from "react";
import { Avatar } from "antd";
import Showdown from "showdown";

type Props = {
  message: string;
};
const BotMessage = ({ message }: Props) => {
  const converter = new Showdown.Converter();
  const html = converter.makeHtml(message);
  return (
    <div className="mb-1">
      <div className="flex items-center gap-2">
        <Avatar
          size={28}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwtedDjrBUJC893Bd2HD-Ebrr2gFORsUG9gQ&s"
          }
        />
        <p className="font-semibold">Assistant</p>
      </div>
      <div className="inline-block bg-background-primary px-3 max-w-[90%] py-1.5 rounded-2xl mt-1.5">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};
export default BotMessage;
