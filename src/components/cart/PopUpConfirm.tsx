import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";

type PopUpConfirmProps = {
  isOpenConfirm: boolean;
  setIsOpenConfirm: Dispatch<SetStateAction<boolean>>;
  handleConfirm: () => void;
};

export default function PopUpConfirm(props: PopUpConfirmProps) {
  const { isOpenConfirm, setIsOpenConfirm, handleConfirm } = props;
  return (
    <div
      className={`absolute z-100 bg-primary/30 w-screen h-screen top-0 left-0 transition-fade ${
        isOpenConfirm ? "block" : "hidden"
      }`}
      onClick={() => setIsOpenConfirm(false)}
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-primary-foreground w-[400px] h-[200px] rounded-xl shadow-lg py-4 px-8">
          <h3 className="text-xl font-bold mb-4">Confirm checkout</h3>
          <span>Are you sure to confirm payment?</span>
          <div className="flex items-center justify-end py-6">
            <Button onClick={() => handleConfirm()}>Confirm</Button>
            <Button
              variant={"outline"}
              className="ml-6"
              onClick={() => setIsOpenConfirm(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
