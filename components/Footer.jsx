import Link from "next/link";
import Image from "next/image";
import { DollarSign, GamepadIcon, ShieldCheck, Users } from "lucide-react";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer bg-black text-gray-400">
      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-8 border-b border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <DollarSign className="w-8 h-8 text-gray-500" />
            <div>
              <h3 className="text-white font-medium">Arzon narxlar</h3>
              <p className="text-sm">Eng arzon narxlar faqatgina bizda</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <GamepadIcon className="w-8 h-8 text-gray-500" />
            <div>
              <h3 className="text-white font-medium">Ommabop o&apos;yinlar</h3>
              <p className="text-sm">Eng ommabop o&apos;yinlar to&apos;plami</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-gray-500" />
            <div>
              <h3 className="text-white font-medium">Yuqori xavfsizlik</h3>
              <p className="text-sm">Ishonchli va xavfsiz xizmatlar</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Users className="w-8 h-8 text-gray-500" />
            <div>
              <h3 className="text-white font-medium">Ishonchli hamkor</h3>
              <p className="text-sm">Uzoq yillik hamkorlik va qulay servis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/logoFooter.svg"
                alt="target icon"
                width={160}
                height={30}
                className="ml-1"
              />
            </Link>
            <div className="mt-[150px]">
              <div className="flex space-x-12">
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
              </div>
            </div>
          </div>
          <div></div>
          {/* Games Links */}
          <div>
            <h3 className="text-white font-medium mb-4">
              Barcha o&apos;yinlar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/games/pubg-mobile"
                  className="hover:text-white transition-colors"
                >
                  PUBG Mobile
                </Link>
              </li>
              <li>
                <Link
                  href="/games/free-fire"
                  className="hover:text-white transition-colors"
                >
                  Free Fire
                </Link>
              </li>
              <li>
                <Link
                  href="/games/steam"
                  className="hover:text-white transition-colors"
                >
                  STEAM
                </Link>
              </li>
              <li>
                <Link
                  href="/games/sm-coin"
                  className="hover:text-white transition-colors"
                >
                  SM-Coin
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Bo&apos;limlar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/asosiy"
                  className="hover:text-white transition-colors"
                >
                  Asosiy
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="hover:text-white transition-colors"
                >
                  Barcha o&apos;yinlar
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="hover:text-white transition-colors"
                >
                  Yordam
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="hover:text-white transition-colors"
                >
                  Tizimga kirish
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Biz bilan bog&apos;lanish
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">Barcha huquqlar himoyalangan.</p>
          <p className="text-sm mt-2 md:mt-0">
            Made by{" "}
            <Link
              href="https://upgrow.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FDB000] hover:text-[#FDB000]/80 transition-colors"
            >
              Upgrow.uz
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
