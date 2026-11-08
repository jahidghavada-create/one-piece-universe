import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Piece Universe | The Grand Line Atlas",
  description: "A fan-made atlas exploring the world, characters, crews, islands, abilities and mysteries of One Piece.",
  applicationName: "The Grand Line Atlas",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
