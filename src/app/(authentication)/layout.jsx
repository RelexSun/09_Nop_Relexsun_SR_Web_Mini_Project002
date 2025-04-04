import { Toaster } from "sonner";
import "../globals.css";
import Logo from "@/components/logo";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <main>
      <div className="container mx-auto my-12">
        <Logo />
        <Toaster />
      </div>

      {children}
    </main>
  );
}
