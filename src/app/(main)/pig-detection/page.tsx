"use client";

import { useState } from "react";
import { Radio } from "antd";
import ImageOption from "./components/ImageOption";
import VideoOption from "./components/VideoOption";

const PigDetection = () => {
  const [option, setOption] = useState(1);

  return (
    <div className="p-5">
      <Radio.Group
        size="large"
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <Radio.Button value={0}>Image</Radio.Button>
        <Radio.Button value={1}>Video</Radio.Button>
      </Radio.Group>
      <div className="mt-5">
        {option === 0 && <ImageOption />}
        {option === 1 && <VideoOption />}
      </div>
    </div>
  );
};

export default PigDetection;
