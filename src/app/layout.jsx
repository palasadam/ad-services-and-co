import RootLayout from "../components/RootLayout"; // Assuming RootLayout is defined in RootLayout.js
import "./globals.css";

export const metadata = {
  title: {
    template: "Ad_Services_And_Co",
    default: " Ad Services and Co - to make your Ad Services",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
