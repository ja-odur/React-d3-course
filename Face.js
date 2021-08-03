import React from "react";
import { FaceContainer}  from "./FaceContainer";
import { BackgroundCircle } from "./BackgroundCricle";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";


export const Face = ({
      width,
      height,
      centerX,
      centerY,
      strokeWidth,
      eyeOffSetX,
      eyeOffSetY,
      eyeRadius,
      mouthRadius,
      mouthWidth,
  }) => {
    return (
        <FaceContainer
            width={width}
            height={height}
            centerX={centerX}
            centerY={centerY}
        >
            <BackgroundCircle
                radius={centerY - strokeWidth / 2}
                strokeWidth={strokeWidth}
            />
            <Eyes
                eyeOffsetX={eyeOffSetX}
                eyeOffsetY={eyeOffSetY}
                eyeRadius={eyeRadius}
            />
            <Mouth
                mouthRadius={mouthRadius}
                mouthWidth={mouthWidth}
            />
        </FaceContainer>
    )
}