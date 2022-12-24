import html2canvas from "html2canvas";
import Link from "next/link";
import { useState } from "react";
import { saveAs } from "file-saver";
import CustomModal from "../components/custom_modal";
import SelectButton from "../components/select_button";
import { UnitProps } from "../shared/interfaces/unit_props";

export default function EightLayout({ unit }: UnitProps) {
    const [showChoiaeModal, setShowChoiaeModal] = useState(false);
    const [choiaeMemberImg, setChoiaeMemberImg] = useState("");
    const [choiaeMemberName, setChoiaeMemberName] = useState("");

    const [showChaaeModal, setShowChaaeModal] = useState(false);
    const [chaaeMemberImg, setChaaeMemberImg] = useState("");
    const [chaaeMemberName, setChaaeMemberName] = useState("");

    const [showFriendModal, setShowFriendModal] = useState(false);
    const [friendMemberImg, setFriendMemberImg] = useState("");
    const [friendMemberName, setFriendMemberName] = useState("");

    const [showCoupleModal, setShowCoupleModal] = useState(false);
    const [coupleMemberImg, setCoupleMemberImg] = useState("");
    const [coupleMemberName, setCoupleMemberName] = useState("");

    const [showMarriageModal, setShowMarriageModal] = useState(false);
    const [marriageMemberImg, setMarriageMemberImg] = useState("");
    const [marriageMemberName, setMarriageMemberName] = useState("");

    const [showDivorceModal, setShowDivorceModal] = useState(false);
    const [divorceMemberImg, setDivorceMemberImg] = useState("");
    const [divorceMemberName, setDivorceMemberName] = useState("");

    const [showPersonalModal, setShowPersonalModal] = useState(false);
    const [personalMemberImg, setPersonalMemberImg] = useState("");
    const [personalMemberName, setPersonalMemberName] = useState("");

    const [showChildModal, setShowChildModal] = useState(false);
    const [childMemberImg, setChildMemberImg] = useState("");
    const [childMemberName, setChildMemberName] = useState("");

    const handleImageDownload = () => {
        try {
            const element = document.getElementById("card");

            html2canvas(element as HTMLElement, {
                useCORS: true,
                allowTaint: true,
                foreignObjectRendering: false,
            }).then((canvas) => {
                canvas.toBlob((blob) => {
                    saveAs(blob as Blob, "tbz-style");
                });
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex flex-col space-y-10 items-center justify-start w-full min-h-screen bg-white">
                <div className="p-4 w-full text-start bg-slate-50">
                    <Link href="/" className="text-xl text-gray-900 font-medium">
                        {" "}
                        ⬅️{" "}
                    </Link>
                </div>
                <div className="m-1 w-12/13 items-center justify-center">
                    <div
                        id="card"
                        className="p-1.5 w-full grid grid-cols-4 items-center justify-center border-[1px] border-gray-900 bg-white"
                    >
                        <SelectButton
                            title={"최애"}
                            setShowModal={setShowChoiaeModal}
                            memberImg={choiaeMemberImg}
                            memberName={choiaeMemberName}
                        ></SelectButton>
                        <SelectButton
                            title={"차애"}
                            setShowModal={setShowChaaeModal}
                            memberImg={chaaeMemberImg}
                            memberName={chaaeMemberName}
                        ></SelectButton>
                        <SelectButton
                            title={"친구"}
                            setShowModal={setShowFriendModal}
                            memberImg={friendMemberImg}
                            memberName={friendMemberName}
                        ></SelectButton>
                        <SelectButton
                            title={"애인"}
                            setShowModal={setShowCoupleModal}
                            memberImg={coupleMemberImg}
                            memberName={coupleMemberName}
                        ></SelectButton>
                        <SelectButton
                            title={"결혼"}
                            setShowModal={setShowMarriageModal}
                            memberImg={marriageMemberImg}
                            memberName={marriageMemberName}
                        ></SelectButton>
                        <SelectButton
                            title={"이혼"}
                            setShowModal={setShowDivorceModal}
                            memberImg={divorceMemberImg}
                            memberName={divorceMemberName}
                        ></SelectButton>
                        <SelectButton
                            title={"성격"}
                            setShowModal={setShowPersonalModal}
                            memberImg={personalMemberImg}
                            memberName={personalMemberName}
                        ></SelectButton>
                        <SelectButton
                            title={"육아"}
                            setShowModal={setShowChildModal}
                            memberImg={childMemberImg}
                            memberName={childMemberName}
                        ></SelectButton>
                        <div className="p-2">
                            <p className="text-xs text-gray-900 font-light">
                                라누타
                            </p>
                            <p className="text-xs text-gray-900 font-light">
                                @ranootaa
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleImageDownload}
                    className="mt-5 bg-red-500 hover:bg-red-500 text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:outline-none"
                >
                    다운로드
                </button>
            </div>
            {showChoiaeModal ? (
                <>
                    <CustomModal
                        unit={unit}
                        title={"최애"}
                        setShowModal={setShowChoiaeModal}
                        setMemberImg={setChoiaeMemberImg}
                        setMemberName={setChoiaeMemberName}
                    ></CustomModal>
                </>
            ) : null}
            {showChaaeModal ? (
                <>
                    <CustomModal
                        unit={unit}
                        title={"차애"}
                        setShowModal={setShowChaaeModal}
                        setMemberImg={setChaaeMemberImg}
                        setMemberName={setChaaeMemberName}
                    ></CustomModal>
                </>
            ) : null}
            {showFriendModal ? (
                <>
                    <CustomModal
                        unit={unit}
                        title={"친구"}
                        setShowModal={setShowFriendModal}
                        setMemberImg={setFriendMemberImg}
                        setMemberName={setFriendMemberName}
                    ></CustomModal>
                </>
            ) : null}
            {showCoupleModal ? (
                <>
                    <CustomModal
                        unit={unit}
                        title={"애인"}
                        setShowModal={setShowCoupleModal}
                        setMemberImg={setCoupleMemberImg}
                        setMemberName={setCoupleMemberName}
                    ></CustomModal>
                </>
            ) : null}
            {showMarriageModal ? (
                <>
                    <CustomModal
                        unit={unit}
                        title={"결혼"}
                        setShowModal={setShowMarriageModal}
                        setMemberImg={setMarriageMemberImg}
                        setMemberName={setMarriageMemberName}
                    ></CustomModal>
                </>
            ) : null}
            {showDivorceModal ? (
                <>
                    <CustomModal
                        unit={unit}
                        title={"이혼"}
                        setShowModal={setShowDivorceModal}
                        setMemberImg={setDivorceMemberImg}
                        setMemberName={setDivorceMemberName}
                    ></CustomModal>
                </>
            ) : null}
            {showPersonalModal ? (
                <>
                    <CustomModal
                        unit={unit}
                        title={"성격"}
                        setShowModal={setShowPersonalModal}
                        setMemberImg={setPersonalMemberImg}
                        setMemberName={setPersonalMemberName}
                    ></CustomModal>
                </>
            ) : null}
            {showChildModal ? (
                <>
                    <CustomModal
                        unit={unit}
                        title={"육아"}
                        setShowModal={setShowChildModal}
                        setMemberImg={setChildMemberImg}
                        setMemberName={setChildMemberName}
                    ></CustomModal>
                </>
            ) : null}

            {showChildModal ? (
                <>
                    <CustomModal
                        unit={unit}
                        title={"육아"}
                        setShowModal={setShowChildModal}
                        setMemberImg={setChildMemberImg}
                        setMemberName={setChildMemberName}
                    ></CustomModal>
                </>
            ) : null}
        </div>
    );
}
