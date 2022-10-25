import React, { useState, useMemo } from "react";
import Input from "../Input/Input";
import ConfigProps from "src/interfaces/config-props";
import "./style.scss";

import { invisibleIcon, visibleIcon } from "../Input/inputIcons";
import InputConfigsProps from "src/types/InputConfigs";

interface PasswordInputProps extends ConfigProps {
  onChange?: Function;
  onBlur?: Function;
  onFocus?: any;
  error?: any;

}

const PasswordInput: React.FC<PasswordInputProps> = ({
  type,
  rightIcon,
  onChange,
  onBlur,
  error,
  onFocus,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleRightIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const rightIconVisible = useMemo(() => {
    switch (inputType) {
      case "password":
        return visibleIcon;
      case "text":
        return invisibleIcon;
      default:
        return visibleIcon;
    }
  }, [inputType]);

  return (
    <>
      <Input
        toggleRightIcon={toggleRightIcon}
        rightIcon={rightIconVisible}
        {...props}
        type={inputType}
        onBlur={onBlur}
        onChange={onChange}
        error={error}
        onFocus={onFocus}
      />
    </>
  );
};

export default PasswordInput;
