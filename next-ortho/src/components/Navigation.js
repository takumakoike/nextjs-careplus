import Link from "next/link";

export function Navigation(){
    return(
        <div className="navigation bg-gray-700 w-full md:w-1/6 text-white flex flex-col h-2/4 md:h-screen">
            <div className="user__information">
                <h2 className="text-center p-3 font-bold">
                    <a href="/top">トップページ</a>
                </h2>
                <p className="text-center font-bold">userName<span className="text-sm ml-2">様</span></p>
            </div>
            <div className="flex flex-col justify-between h-full p-3">
                <div className="navigation__contents flex flex-row md:flex-col flex-wrap md:flex-nowrap">
                    <div className="basis-2/4">
                        <p className="text-blue-300 font-bold mt-5">患者情報</p>
                        <Link href="/patients">
                            <p>新規患者登録</p>
                        </Link>
                    </div>
                    <div className="basis-2/4">
                        <p className="text-blue-300 font-bold mt-5">スタッフ情報</p>
                        <Link href="/staff">
                            <p>スタッフマスタ編集</p>
                        </Link>
                    </div>
                    <div className="basis-2/4">
                        <p className="text-blue-300 font-bold mt-5">施設情報</p>
                        <Link href="/places">
                            <p>施設マスタ編集</p>
                        </Link>
                    </div>
                    <div className="basis-2/4">
                        <p className="text-blue-300 font-bold mt-5">施術情報</p>
                        <Link href="">
                            <p>施術マスタ登録</p>
                        </Link>
                    </div>
                </div>
                <div className="navigation__end flex flex-row md:flex-col gap-3 mt-10 justify-evenly md:justify-start">
                    <p>自分の情報</p>
                    <p>ログアウト</p>
                </div>
            </div>
        </div>
    )
}