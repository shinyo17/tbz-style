import { Dispatch, SetStateAction } from "react";

interface ButtonProps {
  title: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  memberImg: string;
  memberName: string;
}

export default function SelectButton({
  title,
  setShowModal,
  memberImg,
  memberName,
}: ButtonProps) {
  return (
    <button
      onClick={() => setShowModal(true)}
      className="flex flex-col items-center p-4 space-y-3 cursor-pointer text-gray-600 hover:border-red-600 justify-center"
    >
      <p className="text-gray-900 text-sm font-bold">{title}</p>
      {memberImg !== "" && memberName !== "" ? (
        <div>
          <img
            className="object-cover object-center rounded-md aspect-square"
            src={memberImg}
          />
          <p className="my-2 text-gray-900 text-xs font-semibold">
            {memberName}
          </p>
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      )}
    </button>
  );
}
