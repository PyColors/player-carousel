import React from "react";
import HomePage from "../../../pages/HomePage";
import LiveTV from "../../../pages/LiveTVPage";
import CatchUp from "../../../pages/CatchUpPage";

import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';

const Nav = () => (
    <Tabs defaultSelectedIndex={0} className='nav'>
        <Tab value="home" label="Home"><HomePage/></Tab>
        <Tab value="live-tv-2" label="Live TV"> <LiveTV/> </Tab>
        <Tab value="catch-up" label="Catch up"><CatchUp/></Tab>
    </Tabs>
);

export default Nav;
