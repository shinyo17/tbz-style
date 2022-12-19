import html2canvas from "html2canvas";
import Link from "next/link";
import { useState, useRef } from "react";
import { saveAs } from 'file-saver';

export default function Eight() {

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


    const imgResult = useRef<HTMLDivElement>(null);

    const handleImageDownload = () => {
        try {
            const element = document.getElementById('card');


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
            console.log(error)
        }
    };


    return (
        <div>
            <div className="flex flex-col space-y-10 items-center justify-start w-full min-h-screen bg-white">
                <div className="p-4 w-full text-start bg-slate-50">
                    <Link href="/" className="text-xl text-gray-900 font-medium"> ⬅️ </Link>
                </div>
                <div className="m-1 w-12/13 items-center justify-center">
                    <div ref={imgResult} id="card" className="p-1.5 w-full grid grid-cols-4 items-center justify-center border-[1px] border-gray-900 bg-white">
                        <button onClick={() => setShowChoiaeModal(true)} className="flex flex-col items-center p-4 space-y-2 cursor-pointer text-gray-600 hover:border-red-500 hover:text-red-500 justify-center">
                            <p className="text-gray-900 text-sm font-semibold">최애</p>
                            {
                                choiaeMemberImg !== "" && choiaeMemberName !== "" ?
                                    <div>
                                        <img className="object-cover object-center rounded-md aspect-square" src={choiaeMemberImg} />
                                        <p className="my-2 text-gray-900 text-xs font-bold">{choiaeMemberName}</p>
                                    </div>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                            }
                        </button>
                        <button onClick={() => setShowChaaeModal(true)} className="flex flex-col items-center p-4 space-y-2 cursor-pointer text-gray-600 hover:border-red-500 hover:text-red-500 justify-center">
                            <p className="text-gray-900 text-sm font-semibold">차애</p>
                            {
                                chaaeMemberImg !== "" && chaaeMemberName !== "" ?
                                    <div>
                                        <img className="object-cover object-center rounded-md aspect-square" src={chaaeMemberImg} />
                                        <p className="my-2 text-gray-900 text-xs font-bold">{chaaeMemberName}</p>
                                    </div>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                            }
                        </button>
                        <button onClick={() => setShowFriendModal(true)} className="flex flex-col items-center p-4 space-y-2 cursor-pointer text-gray-600 hover:border-red-500 hover:text-red-500 justify-center">
                            <p className="text-gray-900 text-sm font-semibold">친구</p>
                            {
                                friendMemberImg !== "" && friendMemberName !== "" ?
                                    <div>
                                        <img className="object-cover object-center rounded-md aspect-square" src={friendMemberImg} />
                                        <p className="my-2 text-gray-900 text-xs font-bold">{friendMemberName}</p>
                                    </div>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                            }
                        </button>
                        <button onClick={() => setShowCoupleModal(true)} className="flex flex-col items-center p-4 space-y-2 cursor-pointer text-gray-600 hover:border-red-500 hover:text-red-500 justify-center">
                            <p className="text-gray-900 text-sm font-semibold">애인</p>
                            {
                                coupleMemberImg !== "" && coupleMemberName !== "" ?
                                    <div>
                                        <img className="object-cover object-center rounded-md aspect-square" src={coupleMemberImg} />
                                        <p className="my-2 text-gray-900 text-xs font-bold">{coupleMemberName}</p>
                                    </div>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                            }
                        </button>
                        <button onClick={() => setShowMarriageModal(true)} className="flex flex-col items-center p-4 space-y-2 cursor-pointer text-gray-600 hover:border-red-500 hover:text-red-500 justify-center">
                            <p className="text-gray-900 text-sm font-semibold">결혼</p>
                            {
                                marriageMemberImg !== "" && marriageMemberName !== "" ?
                                    <div>
                                        <img className="object-cover object-center rounded-md aspect-square" src={marriageMemberImg} />
                                        <p className="my-2 text-gray-900 text-xs font-bold">{marriageMemberName}</p>
                                    </div>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                            }
                        </button>
                        <button onClick={() => setShowDivorceModal(true)} className="flex flex-col items-center p-4 space-y-2 cursor-pointer text-gray-600 hover:border-red-500 hover:text-red-500 justify-center">
                            <p className="text-gray-900 text-sm font-semibold">이혼</p>
                            {
                                divorceMemberImg !== "" && divorceMemberName !== "" ?
                                    <div>
                                        <img className="object-cover object-center rounded-md aspect-square" src={divorceMemberImg} />
                                        <p className="my-2 text-gray-900 text-xs font-bold">{divorceMemberName}</p>
                                    </div>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                            }
                        </button>
                        <button onClick={() => setShowPersonalModal(true)} className="flex flex-col items-center p-4 space-y-2 cursor-pointer text-gray-600 hover:border-red-500 hover:text-red-500 justify-center">
                            <p className="text-gray-900 text-sm font-semibold">성격</p>
                            {
                                personalMemberImg !== "" && personalMemberName !== "" ?
                                    <div>
                                        <img className="object-cover object-center rounded-md aspect-square" src={personalMemberImg} />
                                        <p className="my-2 text-gray-900 text-xs font-bold">{personalMemberName}</p>
                                    </div>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                            }
                        </button>
                        <button onClick={() => setShowChildModal(true)} className="flex flex-col items-center p-4 space-y-2 cursor-pointer text-gray-600 hover:border-red-500 hover:text-red-500 justify-center">
                            <p className="text-gray-900 text-sm font-semibold">육아</p>
                            {
                                childMemberImg !== "" && childMemberName !== "" ?
                                    <div>
                                        <img className="object-cover object-center rounded-md aspect-square" src={childMemberImg} />
                                        <p className="my-2 text-gray-900 text-xs font-bold">{childMemberName}</p>
                                    </div>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                            }
                        </button>
                        <div className="p-2">
                            <p className="text-xs text-gray-900 font-light">라누타 @ranootaa</p>
                        </div>
                    </div>
                </div>
                <button onClick={handleImageDownload} className="mt-5 bg-red-500 hover:bg-red-600 text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:outline-none">다운로드</button >
            </div>
            {showChoiaeModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowChoiaeModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="mt-2 text-start sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            최애
                                        </h4>
                                        <div className="grid grid-cols-3">
                                            {
                                                [[1, "상연"], [2, "제이콥"], [3, "영훈"], [4, "현재"], [5, "주연"], [6, "케빈"], [7, "뉴"], [8, "큐"], [9, "주학년"], [10, "선우"], [11, "에릭"]].map((value, i) => (
                                                    <button key={i} onClick={() => {
                                                        setShowChoiaeModal(false)
                                                        setChoiaeMemberImg(`/images/tbz-${value[0]}.JPG`)
                                                        setChoiaeMemberName(`${value[1]}`)
                                                    }} className="flex flex-col items-center p-4 space-y-2 cursor-pointer justify-center">
                                                        <img className="object-cover object-center rounded-md aspect-square" src={`/images/tbz-${value[0]}.JPG`} />
                                                        <p className="text-gray-900 text-sm font-semibold">{`${value[1]}`}</p>
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {showChaaeModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowChaaeModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="mt-2 text-start sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            차애
                                        </h4>
                                        <div className="grid grid-cols-3">
                                            {
                                                [[1, "상연"], [2, "제이콥"], [3, "영훈"], [4, "현재"], [5, "주연"], [6, "케빈"], [7, "뉴"], [8, "큐"], [9, "주학년"], [10, "선우"], [11, "에릭"]].map((value, i) => (
                                                    <button key={i} onClick={() => {
                                                        setShowChaaeModal(false)
                                                        setChaaeMemberImg(`/images/tbz-${value[0]}.JPG`)
                                                        setChaaeMemberName(`${value[1]}`)
                                                    }} className="flex flex-col items-center p-4 space-y-2 cursor-pointer justify-center">
                                                        <img className="object-cover object-center rounded-md aspect-square" src={`/images/tbz-${value[0]}.JPG`} />
                                                        <p className="text-gray-900 text-sm font-semibold">{`${value[1]}`}</p>
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {showFriendModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowFriendModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="mt-2 text-start sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            친구
                                        </h4>
                                        <div className="grid grid-cols-3">
                                            {
                                                [[1, "상연"], [2, "제이콥"], [3, "영훈"], [4, "현재"], [5, "주연"], [6, "케빈"], [7, "뉴"], [8, "큐"], [9, "주학년"], [10, "선우"], [11, "에릭"]].map((value, i) => (
                                                    <button key={i} onClick={() => {
                                                        setShowFriendModal(false)
                                                        setFriendMemberImg(`/images/tbz-${value[0]}.JPG`)
                                                        setFriendMemberName(`${value[1]}`)
                                                    }} className="flex flex-col items-center p-4 space-y-2 cursor-pointer justify-center">
                                                        <img className="object-cover object-center rounded-md aspect-square" src={`/images/tbz-${value[0]}.JPG`} />
                                                        <p className="text-gray-900 text-sm font-semibold">{`${value[1]}`}</p>
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {showCoupleModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowCoupleModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="mt-2 text-start sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            애인
                                        </h4>
                                        <div className="grid grid-cols-3">
                                            {
                                                [[1, "상연"], [2, "제이콥"], [3, "영훈"], [4, "현재"], [5, "주연"], [6, "케빈"], [7, "뉴"], [8, "큐"], [9, "주학년"], [10, "선우"], [11, "에릭"]].map((value, i) => (
                                                    <button key={i} onClick={() => {
                                                        setShowCoupleModal(false)
                                                        setCoupleMemberImg(`/images/tbz-${value[0]}.JPG`)
                                                        setCoupleMemberName(`${value[1]}`)
                                                    }} className="flex flex-col items-center p-4 space-y-2 cursor-pointer justify-center">
                                                        <img className="object-cover object-center rounded-md aspect-square" src={`/images/tbz-${value[0]}.JPG`} />
                                                        <p className="text-gray-900 text-sm font-semibold">{`${value[1]}`}</p>
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {showMarriageModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowMarriageModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="mt-2 text-start sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            결혼
                                        </h4>
                                        <div className="grid grid-cols-3">
                                            {
                                                [[1, "상연"], [2, "제이콥"], [3, "영훈"], [4, "현재"], [5, "주연"], [6, "케빈"], [7, "뉴"], [8, "큐"], [9, "주학년"], [10, "선우"], [11, "에릭"]].map((value, i) => (
                                                    <button key={i} onClick={() => {
                                                        setShowMarriageModal(false)
                                                        setMarriageMemberImg(`/images/tbz-${value[0]}.JPG`)
                                                        setMarriageMemberName(`${value[1]}`)
                                                    }} className="flex flex-col items-center p-4 space-y-2 cursor-pointer justify-center">
                                                        <img className="object-cover object-center rounded-md aspect-square" src={`/images/tbz-${value[0]}.JPG`} />
                                                        <p className="text-gray-900 text-sm font-semibold">{`${value[1]}`}</p>
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {showDivorceModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowDivorceModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="mt-2 text-start sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            이혼
                                        </h4>
                                        <div className="grid grid-cols-3">
                                            {
                                                [[1, "상연"], [2, "제이콥"], [3, "영훈"], [4, "현재"], [5, "주연"], [6, "케빈"], [7, "뉴"], [8, "큐"], [9, "주학년"], [10, "선우"], [11, "에릭"]].map((value, i) => (
                                                    <button key={i} onClick={() => {
                                                        setShowDivorceModal(false)
                                                        setDivorceMemberImg(`/images/tbz-${value[0]}.JPG`)
                                                        setDivorceMemberName(`${value[1]}`)
                                                    }} className="flex flex-col items-center p-4 space-y-2 cursor-pointer justify-center">
                                                        <img className="object-cover object-center rounded-md aspect-square" src={`/images/tbz-${value[0]}.JPG`} />
                                                        <p className="text-gray-900 text-sm font-semibold">{`${value[1]}`}</p>
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {showPersonalModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowPersonalModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="mt-2 text-start sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            성격
                                        </h4>
                                        <div className="grid grid-cols-3">
                                            {
                                                [[1, "상연"], [2, "제이콥"], [3, "영훈"], [4, "현재"], [5, "주연"], [6, "케빈"], [7, "뉴"], [8, "큐"], [9, "주학년"], [10, "선우"], [11, "에릭"]].map((value, i) => (
                                                    <button key={i} onClick={() => {
                                                        setShowPersonalModal(false)
                                                        setPersonalMemberImg(`/images/tbz-${value[0]}.JPG`)
                                                        setPersonalMemberName(`${value[1]}`)
                                                    }} className="flex flex-col items-center p-4 space-y-2 cursor-pointer justify-center">
                                                        <img className="object-cover object-center rounded-md aspect-square" src={`/images/tbz-${value[0]}.JPG`} />
                                                        <p className="text-gray-900 text-sm font-semibold">{`${value[1]}`}</p>
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {showChildModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowChildModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="mt-2 text-start sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            육아
                                        </h4>
                                        <div className="grid grid-cols-3">
                                            {
                                                [[1, "상연"], [2, "제이콥"], [3, "영훈"], [4, "현재"], [5, "주연"], [6, "케빈"], [7, "뉴"], [8, "큐"], [9, "주학년"], [10, "선우"], [11, "에릭"]].map((value, i) => (
                                                    <button key={i} onClick={() => {
                                                        setShowChildModal(false)
                                                        setChildMemberImg(`/images/tbz-${value[0]}.JPG`)
                                                        setChildMemberName(`${value[1]}`)
                                                    }} className="flex flex-col items-center p-4 space-y-2 cursor-pointer justify-center">
                                                        <img className="object-cover object-center rounded-md aspect-square" src={`/images/tbz-${value[0]}.JPG`} />
                                                        <p className="text-gray-900 text-sm font-semibold">{`${value[1]}`}</p>
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
}