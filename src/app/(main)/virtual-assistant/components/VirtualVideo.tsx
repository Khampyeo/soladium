"use client";

import { LegacyRef } from "react";
import { Button, Flex } from "antd";

type Props = {
  isLoading: boolean;
  isOpen: boolean;
  startSession: () => void;
  stopSession: () => void;
  myAvatarVideoEleRef: LegacyRef<HTMLVideoElement>;
};
const VirtualVideo = ({
  isLoading,
  isOpen,
  startSession,
  stopSession,
  myAvatarVideoEleRef,
}: Props) => {
  return (
    <>
      <Flex justify="space-between">
        <Flex gap={8}>
          <Button
            onClick={() => startSession()}
            loading={isLoading}
            disabled={isOpen}
          >
            Start
          </Button>
          <Button onClick={() => stopSession()} disabled={!isOpen}>
            Stop
          </Button>
        </Flex>
      </Flex>
      <div className="xl:w-[30rem] xl:h-[30rem] w-[25rem] h-[25rem] overflow-hidden rounded-xl bg-black mt-4 border-2 border-border">
        <video id="video" ref={myAvatarVideoEleRef} />
      </div>
    </>
  );
};
export default VirtualVideo;
