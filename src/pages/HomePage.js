import React from 'react';
import HomeBanner from "../components/homepage/HomeBanner";

const HomePage = () => {
    return (
        <div>
            <HomeBanner title={{name:"Arifuzzaman",age:"32"}}  />
        </div>
    );
};

export default HomePage;