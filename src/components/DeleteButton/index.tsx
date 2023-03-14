import React, { ButtonHTMLAttributes } from "react";

interface DeleteButtonInter {
  row_id: number;
}

const DeleteButton: React.FC<
  DeleteButtonInter & ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const { row_id, ...rest } = props;
  return (
    <>
      <button {...rest} style={{background:'red', padding:'10px'}}>
        {props.children}
      </button>
    </>
  );
};

export default DeleteButton;
