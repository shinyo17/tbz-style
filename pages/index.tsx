import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 items-center justify-start w-full min-h-screen bg-white">
      <div className="py-3 w-full text-center bg-slate-50">
        <p className="text-2xl font-black  text-gray-900">
          더보이즈 취향표
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Link href="https://twitter.com/ranootaa" className="text-xl text-gray-900 font-medium">라누타 @ranootaa</Link>
        <Link href="https://twitter.com/DeveloperTyga" className="text-xs text-gray-300">(개발자 타이가 @DeveloperTyga)</Link>
      </div>
      <div className="flex space-x-3">
        <Link href="/six" className="mt-5 bg-red-500 hover:bg-red-600 text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:outline-none">6문항 버전</Link >
        <Link href="/eight" className="mt-5 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none">8문항 버전 <p className="text-center text-xs font-light">(공사 중)</p></Link >
      </div>
    </div>
  );
}
