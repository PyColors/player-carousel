import React from "react";
import Header from "../components/organisms/Header";
import Nav from "../components/organisms/Nav";
import Footer from "../components/organisms/Footer";

// muicss
import Container from "muicss/lib/react/container";

import './App.scss';

const App = () => (
    <main>
        <Container>
            <Header/>
            <Nav/>
            <Footer/>
        </Container>
    </main>
);
export default App;
