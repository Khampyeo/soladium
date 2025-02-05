"use client";

import { useEffect, useState } from "react";
import { Button, Flex } from "antd";
import useAvatar from "@/hooks/useVirtualAssistant";
import { Message } from "@/types/realtime-assistant";
import Subtitle from "./components/Subtitle";
import VirtualVideo from "./components/VirtualVideo";

const GeneraticAi = () => {
  const [isSubtitle, setIsSubtitle] = useState(true);
  const {
    startSession,
    stopSession,
    isLoading,
    isProcessing,
    isOpen,
    myAvatarVideoEleRef,
    pcId,
    sendMessage,
    messageReceived,
  } = useAvatar();

  const [conversation, setConversation] = useState<Message[]>([]);

  useEffect(() => {
    if (!messageReceived) return;
    const newConversation = [...conversation];
    newConversation.push({
      message: messageReceived,
      actor: "bot",
    });
    setConversation(newConversation);
  }, [messageReceived]);

  return (
    <div className="pt-4">
      <Flex gap={16} justify="center">
        <div className="relative flex items-center flex-col text-text-primary">
          <div className="">
            <VirtualVideo
              isLoading={isLoading}
              isOpen={isOpen}
              startSession={startSession}
              stopSession={() => {
                stopSession();
              }}
              myAvatarVideoEleRef={myAvatarVideoEleRef}
            />
          </div>
          <div className="mt-5"></div>
        </div>
        <div className="">
          <Button
            type={isSubtitle ? "primary" : "default"}
            onClick={() => setIsSubtitle(!isSubtitle)}
          >
            Subtitle
          </Button>
          {isSubtitle && (
            <div className="mt-4">
              <Subtitle
                conversation={conversation}
                isProcessing={isProcessing}
                isStartVirtual={isOpen}
                sendMessage={(text: string) => {
                  sendMessage({
                    pc_id: pcId!,
                    input_text: text,
                    use_gpt: "true",
                    conversation_histories: [],
                    request_type: "question",
                  });
                  const newConversation = [...conversation];
                  newConversation.push({
                    message: text,
                    actor: "user",
                  });
                  setConversation(newConversation);
                }}
              />
            </div>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default GeneraticAi;
