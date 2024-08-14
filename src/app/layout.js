import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ weight: ['100','200','300', '400','500','600', '700','800'], subsets: ['latin'] });
const poppins = Poppins({ weight: ['100','200','300', '400','500','600', '700','800'], subsets: ['latin'] });

export const metadata = {
  icon: '/../../../public/assets/GT.svg',
  title: "Go-Tur",
  description: "Programming Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${poppins.className}`}>{children}</body>
    </html>
  );
}

