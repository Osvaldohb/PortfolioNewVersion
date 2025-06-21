
import "./globals.css";
import { inter } from "./Fonts/font";
import NavBar from "./components/NavBar/NavBar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${inter.className} antialiased`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
