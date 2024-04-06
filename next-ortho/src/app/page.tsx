import Heading from "@/components/Heading"
import {Navigation} from "@/components/Navigation"

export default function Home() {
  return (
      <>
        <main className="w-full flex flex-col md:flex-row">
            <Navigation />
            <div className="main-contents bg-white w-full md:w-5/6">
                <h2 className="text-2xl font-bold p-3">本日の予定</h2>
                <div className="place__information p-3">
                    <span className="mr-1 md:mr-10">業務施設</span>
                    <span className="border border-gray-400 bg-gray-300 p-1 md:p-2 inline-block w-3/5 md:w-2/5 text-sm md:text-md">サンプル施設A</span>
                </div>
            </div>
        </main>
      </>
  );
}
