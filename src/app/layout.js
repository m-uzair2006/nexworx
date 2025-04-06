import "./globals.css";



export const metadata = {
  title: "Nexworx",
  description: "Team augmentation agency you can trust on",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         className=" scroll-smooth"
      >
        {children}
      </body>
    </html>
  );
}
