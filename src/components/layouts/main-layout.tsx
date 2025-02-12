import { Navbar } from "@/components/navbar";
import { ScanSearch } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "../theme-switcher";

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
        <div>
            <header className="border-b">
                <div className="flex justify-between p-4 mx-auto max-w-7xl w-full">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <span className="sr-only">Go to home</span>
                            <ScanSearch />
                        </Link>
                        <Navbar />
                    </div>
                    <nav className="gap-4 flex">
                        <ThemeSwitcher />
                        <Button variant="outline">Login</Button>
                        <Button variant="default">Sign Up</Button>
                    </nav>
                </div>
            </header>
            <main className="my-4">
                <div className="mx-auto max-w-7xl p-4">
                    {children}
                </div>
            </main>
            <footer className="border-t">
                <div className="mx-auto max-w-7xl p-4">
                    <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Developed by FelipeSoft</p>
                </div>
            </footer>
        </div>
    )
}

export default MainLayout;
