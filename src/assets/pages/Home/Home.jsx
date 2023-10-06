import Header from "../Shaear/Header/Header";
import Leftsidenav from "../Shaear/Lanf/Leftsidenav";
import Navbar from "../Shaear/Navbar/Navbar";
import RightSidnav from "../Shaear/Right/RightSidnav";
import Breakingnews from "./Breakingnews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Breakingnews></Breakingnews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border">
                    <Leftsidenav></Leftsidenav>
                </div>
                <div className="border md:col-span-2">
                    <h1 className="text-4xl">news come ing soon wioewourui3 4yfuijwjkd7</h1>
                </div>
                <div className="border">
                    <RightSidnav></RightSidnav>
                </div>
            </div>
            
        </div>
    );
};

export default Home;