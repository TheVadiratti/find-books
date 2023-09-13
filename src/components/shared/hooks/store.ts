import { useAppDispatch } from "@/store/types/hooks";
import { ChangeEventHandler } from "react";

const useInputControl = (action: any) => {
  const dispatch = useAppDispatch();

  const handler: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (
    e,
  ) => {
    dispatch(action(e.target.value));
  };

  return handler;
};

export default useInputControl;
