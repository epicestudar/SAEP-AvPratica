import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "My App",
  description: "My Next.js application with Bootstrap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
