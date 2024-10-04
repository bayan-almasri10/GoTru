import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Go-Tru",
  description: "Programming Company",
  icons: {
    icon: '/assets/GT.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
