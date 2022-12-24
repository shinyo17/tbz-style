import { Dispatch, SetStateAction } from "react";
import { Artist } from "../shared/interfaces/artist";

interface ModalProps {
  title: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setMemberImg: Dispatch<SetStateAction<string>>;
  setMemberName: Dispatch<SetStateAction<string>>;
  unit: Artist[];
}

export default function CustomModal({
  title,
  setShowModal,
  setMemberImg,
  setMemberName,
  unit,
}: ModalProps) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3 sm:flex">
            <div className="mt-2 text-start sm:ml-4 sm:text-left">
              <span className="mx-3 text-white bg-red-500 px-3 py-1.5 rounded-2xl text-sm font-bold">
                {title}
              </span>
              <div className="grid grid-cols-3">
                {unit.map((value, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setShowModal(false);
                      setMemberImg(`/images/${value.img}`);
                      setMemberName(`${value.name}`);
                    }}
                    className="flex flex-col items-center p-4 space-y-2 cursor-pointer justify-center"
                  >
                    <img
                      className="object-cover object-center rounded-md aspect-square"
                      src={`/images/${value.img}`}
                    />
                    <p className="text-gray-900 text-sm font-semibold">{`${value.name}`}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
