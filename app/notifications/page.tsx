import FooterMenu from "../components/FooterMenu";
import Notifications from "../components/Notifications";
import TopMenu from "../components/TopMenu";

function page() {
    return (
        <main className="w-screen bg-gray-300">
            <TopMenu />
            <Notifications />
            <FooterMenu />
        </main>
    );
}

export default page;