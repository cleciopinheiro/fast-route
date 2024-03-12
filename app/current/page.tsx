import List from "../components/List";
import Menu from "../components/Menu";
import SubMenu from "../components/SubMenu";

function page() {
    return (
        <main className="flex flex-col">
            <Menu text='ITINERARY' />
            <SubMenu />
            <List />
        </main>
    );
}

export default page;