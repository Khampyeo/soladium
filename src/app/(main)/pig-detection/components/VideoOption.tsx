import { useEffect, useRef, useState } from "react";
import {
  CaretRightOutlined,
  DownloadOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Button, Flex, message, Progress, Upload } from "antd";
import { processVideo } from "@/apis/pig-detection.api";

const VideoOption = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoProcessed, setVideoProcessed] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const wsRef = useRef<WebSocket | null>(null);
  const reconnectAttempts = useRef<number>(0);
  const maxReconnectAttempts = 5;

  const connectWebSocket = () => {
    const ws = new WebSocket(`${process.env.BASE_URL}/ws`);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket connection established");
      reconnectAttempts.current = 0; // Reset attempts on successful connection
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data) {
          setProgress(data);
        }
      } catch {
        console.error("Invalid WebSocket message:", event.data);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
      attemptReconnect();
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      ws.close(); // Ensure connection is closed before retrying
    };
  };

  const attemptReconnect = () => {
    if (reconnectAttempts.current < maxReconnectAttempts) {
      const retryDelay = Math.min(
        1000 * Math.pow(2, reconnectAttempts.current),
        30000
      ); // Exponential backoff
      reconnectAttempts.current += 1;

      console.log(`Reconnecting in ${retryDelay / 1000} seconds...`);
      setTimeout(() => {
        connectWebSocket();
      }, retryDelay);
    } else {
      console.error(
        "Max reconnect attempts reached. WebSocket connection failed."
      );
      message.error("Unable to connect to the server. Please try again later.");
    }
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      wsRef.current?.close();
    };
  }, []);

  const validateFile = (file: File): boolean => {
    const isVideo = file.type.startsWith("video/");
    if (!isVideo) {
      message.error("You can only upload video files!");
      return false;
    }

    const isLt20MB = file.size / 1024 / 1024 < 40;
    if (!isLt20MB) {
      message.error("Video must be smaller than 40MB!");
      return false;
    }

    return true;
  };

  const beforeUpload = (file: File) => {
    if (!validateFile(file)) {
      return false;
    }
    setFile(file);
    setVideoUrl(null);
    return true;
  };

  const handleUpload = ({ file }: { file: File }) => {
    const reader = new FileReader();
    reader.onload = () => {
      setVideoUrl(reader.result as string);
      message.success("Upload successful!");
    };
    reader.readAsDataURL(file);
  };

  const processVideoMutation = useMutation({
    mutationFn: async ({ file, userId }: { file: File; userId: string }) => {
      return processVideo(file, userId);
    },
    /* eslint-disable @typescript-eslint/no-explicit-any */
    onSuccess: (response: any) => {
      const url = URL.createObjectURL(response.data);
      setVideoProcessed(url);
      message.success("Video processed successfully!");
      setProgress(100);
    },
    onError: () => {
      message.error("Failed to process video.");
    },
  });

  const handleProcessVideo = () => {
    if (file && wsRef.current?.readyState === WebSocket.OPEN) {
      const randomId = `id-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
      const payload = { userId: randomId };
      wsRef.current.send(JSON.stringify(payload));

      processVideoMutation.mutate({ file, userId: randomId });
    } else {
      message.error("No video selected or WebSocket not connected.");
    }
  };

  const handleDownload = () => {
    if (!videoProcessed) {
      message.error("No processed video to download.");
      return;
    }

    const link = document.createElement("a");
    link.href = videoProcessed;
    link.download = "processed-video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Flex gap={5} className="flex-col md:flex-row">
      <div className="flex-1">
        <Upload
          accept="video/*"
          showUploadList={false}
          beforeUpload={beforeUpload}
          /* eslint-disable @typescript-eslint/no-explicit-any */
          customRequest={({ file }: any) => handleUpload({ file })}
        >
          <Button icon={<UploadOutlined />}>Upload Video</Button>
        </Upload>
        <div className="mt-4 p-1 border border-border rounded-md h-96 flex justify-center items-center">
          {videoUrl ? (
            <video
              src={videoUrl}
              controls
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <span>No video uploaded yet</span>
          )}
        </div>
      </div>
      <Flex justify="center" align="center" className="w-full p-5 md:w-32">
        {processVideoMutation.isPending ? (
          <Progress
            type="circle"
            percent={progress}
            showInfo={false}
            status="active"
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
          />
        ) : (
          <Button
            size="large"
            icon={<CaretRightOutlined />}
            onClick={handleProcessVideo}
            disabled={!videoUrl}
            loading={processVideoMutation.isPending}
            className="!absolute"
          />
        )}
      </Flex>
      <div className="flex-1">
        <Button
          icon={<DownloadOutlined />}
          disabled={!videoProcessed}
          onClick={handleDownload}
        >
          Download
        </Button>
        <div className="flex-1 flex justify-center items-center flex-col mt-4 p-1 border border-border rounded-md h-96">
          {videoProcessed ? (
            <video
              src={videoProcessed}
              controls
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <span>No processed video yet</span>
          )}
        </div>
      </div>
    </Flex>
  );
};

export default VideoOption;
