
import Head from "next/head"
import Link from "next/link"

export default function Heading(props){
    return(
        <>
            <Head>
                <title>{props.title}っです</title>
            </Head>
            <header>
                <div className="container mx-auto mt-10">
                    <h1 className="text-3xl font-bold text-center">情報管理サイト</h1>
                    <div className="flex w-full justify-evenly mt-6">
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
            </header>
        </>
    )
}