import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { ElementType, ReactNode } from "react";

interface Props {
    children: ReactNode;
    logo?: ElementType;
}

export default function Guest({ children, logo: Logo }: Props) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-zinc-100 dark:bg-zinc-900">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-zinc-800 shadow-md overflow-hidden sm:rounded-lg">
                <div className="flex justify-center items-center py-6">
                    <Link href="/">
                        {Logo ? (
                            <Logo className="w-20 h-20 fill-current text-zinc-500" />
                        ) : (
                            <ApplicationLogo className="w-20 h-20 fill-current text-zinc-500" />
                        )}
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
