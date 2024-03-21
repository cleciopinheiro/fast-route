import Content from "../components/Content";
import List from "../components/Content";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

function page() {
    return (
        <main className="flex flex-col">
            <Menu text='ITINERARY' />
            <Tabs />
        </main>
    );
}

export default page;