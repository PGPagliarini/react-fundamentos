import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function() {
    return (
        <Link href="/" className="flex items-center px-5 gap-2.5 font-black text-slate-100 h-16 bg-purple-700">
            <span><IconBrandReact size={30} stroke={1}/></span>
            <span className="text-2xl">React</span>
        </Link>
    )
}