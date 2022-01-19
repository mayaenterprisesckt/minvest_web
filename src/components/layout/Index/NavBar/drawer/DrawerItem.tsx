import Link from "next/link";
import { IconType } from "react-icons";
function DrawerItem({
    name,
    desc,
    Icon,
    link,
}: {
    name: string;
    desc: string;
    Icon: IconType;
    link: string;
}) {
    return (
        <Link href={link}>
            <a className="mx-5 p-3 flex items-start rounded-lg bg-gray-100 dark:bg-primaryDark tr04 cursor-pointer">
                <Icon className="h-14 ml-1 text-[2rem]  text-lightAccent dark:text-lightAccent" />

                <div className="ml-4  px-10">
                    <p className="text-base font-medium text-black dark:text-white">{name}</p>
                    <p className="mt-1 text-sm text-black dark:text-white">{desc}</p>
                </div>
            </a>
        </Link>
    );
}

export default DrawerItem;
