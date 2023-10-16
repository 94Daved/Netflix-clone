import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex items-center justify-center h-[100vh] w-full  bg-[url('/images/hero.jpg')]">
      <nav className="absolute left-16 top-10 ">
        <img src="/images/logo.png" alt="" className="w-[220px] h-[50px]" />
      </nav>
      {children}
    </div>
  );
}
