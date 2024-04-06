import Link from "next/link"

export default function Heading(props){
    return(
        <div>
            <div className="container mx-auto mt-10">
                <h1 className="text-3xl font-bold text-center">これは{props.title}です</h1>
                <div className="flex w-full justify-evenly mt-10">
                    <Link href="/">
                        <p>トップページ</p>
                    </Link>
                    <Link href="/patients">
                        <p>患者</p>
                    </Link>
                    <Link href="/staff">
                        <p>スタッフ</p>
                    </Link>
                    <Link href="/places">
                        <p>施設</p>
                    </Link>
                    <Link href="/fees">
                        <p>料金</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}