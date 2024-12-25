import Link from "next/link";
import Image from "next/image";
import { DollarSign, GamepadIcon, ShieldCheck, Users } from "lucide-react";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer bg-black text-gray-400">
      <div className="max-w-7xl mx-auto py-8 border-b border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 max-sm:flex-col">
            <Image src={"/icons/wallet.svg"} width={33} height={33} alt="img" />
            <div className="max-sm:text-center">
              <h3 className="text-[#ACACAC] font-medium">Arzon narxlar</h3>
              <p className="text-sm text-[#ACACAC] font-[300]">
                Eng arzon narxlar faqatgina bizda
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 max-sm:flex-col">
            <Image src={"/icons/game.svg"} width={33} height={33} alt="img" />
            <div className="max-sm:text-center">
              <h3 className="text-[#ACACAC] font-medium">
                Ommabop o&apos;yinlar
              </h3>
              <p className="text-sm text-[#ACACAC] font-[300]">
                Eng ommabop o&apos;yinlar to&apos;plami
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 max-sm:flex-col">
            <Image
              src={"/icons/shield-tick.svg"}
              width={33}
              height={33}
              alt="img"
            />
            <div className="text-center">
              <h3 className="text-[#ACACAC] font-medium">Yuqori xavfsizlik</h3>
              <p className="text-sm text-[#ACACAC] font-[300]">
                Ishonchli va xavfsiz xizmatlar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 max-sm:flex-col">
            <Image
              src={"/icons/like-shapes.svg"}
              width={33}
              height={33}
              alt="img"
            />
            <div className="text-center">
              <h3 className="text-[#ACACAC] font-medium">Ishonchli hamkor</h3>
              <p className="text-sm text-[#ACACAC] font-[300]">
                Uzoq yillik hamkorlik va qulay servis
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-sm:grid-cols-2">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/logoFooter.svg"
                alt="target icon"
                width={162}
                height={30}
                className="ml-1 max-sm:max-w-[108px] max-sm:max-h-5"
              />
            </Link>
            <div className="mt-[150px] max-sm:mt-[30px]">
              <div className="flex space-x-12 max-sm:space-x-[120px]">
                <Link
                  href="https://t.me/uzpin"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2 text-lg">
                    <FaInstagram />
                    Uzpin
                  </span>
                </Link>
                <Link
                  href="https://instagram.com/uzpin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2 text-lg">
                    <RiTelegram2Fill />
                    Uzpin
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <h3 className="text-[#ACACAC] font-bold mb-[30px]">
              Barcha o&apos;yinlar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/games/pubg-mobile"
                  className="text-[#ACACAC] transition-colors"
                >
                  PUBG Mobile
                </Link>
              </li>
              <li>
                <Link
                  href="/games/free-fire"
                  className="text-[#ACACAC] transition-colors"
                >
                  Free Fire
                </Link>
              </li>
              <li>
                <Link
                  href="/games/steam"
                  className="text-[#ACACAC] transition-colors"
                >
                  STEAM
                </Link>
              </li>
              <li>
                <Link
                  href="/games/sm-coin"
                  className="text-[#ACACAC] transition-colors"
                >
                  SM-Coin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#ACACAC] font-bold mb-[30px]">
              Bo&apos;limlar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/asosiy"
                  className="text-[#ACACAC] transition-colors"
                >
                  Asosiy
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-[#ACACAC] transition-colors"
                >
                  Barcha o&apos;yinlar
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-[#ACACAC] transition-colors">
                  Yordam
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-[#ACACAC] transition-colors"
                >
                  Tizimga kirish
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#ACACAC] transition-colors"
                >
                  Biz bilan bog&apos;lanish
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=" pt-8 flex flex-col md:flex-row justify-center gap-[52px] items-center max-sm:flex-row">
          <p className="text-sm text-[#ACACAC] max-sm:text-[10px]">
            Barcha huquqlar himoyalangan.
          </p>
          <p className="text-sm text-[#ACACAC] mt-2 md:mt-0 max-sm:text-[10px] max-sm:mt-0">
            Made by{" "}
            <Link
              href="https://upgrow.uz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upgrow.uz
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
