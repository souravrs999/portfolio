import React from "react";
import * as icons from "simple-icons/icons";

interface SimpleIconProps {
  iconName: string;
  size?: number;
  color?: string;
}

const SimpleIcon: React.FC<SimpleIconProps> = ({
  iconName,
  size = 24,
  color = "#000",
}) => {
  const icon =
    icons[
      `si${
        iconName.charAt(0).toUpperCase() + iconName.slice(1)
      }` as keyof typeof icons
    ];

  if (!icon) {
    return <span>Icon not found</span>;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
};

export default SimpleIcon;
