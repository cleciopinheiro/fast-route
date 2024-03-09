import Image from "next/image";
import STG from "./components/STG";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main>
      <Menu />
      <STG />
    </main>
  );
}
