
import HomeProfile from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="z-0">
        <HomeProfile />
      </main>
      <Footer />
    </div>
  );
}
