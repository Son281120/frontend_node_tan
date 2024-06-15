"use client";
import { Dispatch, SetStateAction, useEffect } from "react";

type ToastProps = {
  isOpenToast: boolean;
  setIsOpenToast: Dispatch<SetStateAction<boolean>>;
};
export default function Toast(props: ToastProps) {
  const { isOpenToast, setIsOpenToast } = props;

  useEffect(() => {
    if (isOpenToast) {
      const timer = setTimeout(() => {
        setIsOpenToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpenToast, setIsOpenToast]);

  return (
    <div
      className={`absolute z-100 w-screen h-screen bottom-0 right-0 transition-fade ${
        isOpenToast ? "block" : "hidden"
      }`}
      onClick={() => setIsOpenToast(false)}
    >
      <div className="flex justify-end items-end w-full h-full">
        <div className="bg-primary-foreground w-[500px] h-[100px] rounded-xl shadow-xl py-4 px-8 mb-4 mr-4">
          <h3 className="text-xl font-bold mb-2">Checkout successful!</h3>
          <span>Congratulations, your payment has been successful!</span>
        </div>
      </div>
    </div>
  );
}
