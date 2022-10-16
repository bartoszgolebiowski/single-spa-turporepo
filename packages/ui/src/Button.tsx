import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: Props) => {
  return <button {...props}>Button321</button>;
};
