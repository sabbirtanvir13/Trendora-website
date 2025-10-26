// import React from 'react';
// import Header from '../components/Header';
// import { Outlet } from 'react-router';
// import Footer from '../components/Footer';
// import '../App.css';
// const HomeLayout = () => {
//     return (
//         <div>
//           <header>
//             <Header></Header>
//           </header>
//             <main>
//                 <Outlet></Outlet>
//             </main>
//             <footer>
//                 <Footer></Footer>
//             </footer>
//         </div>
//     );
// };

// export default HomeLayout;

import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import '../App.css';
import Banner from '../components/Banner';

const HomeLayout = () => {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <header>
            <Header />
          </header>

          <main style={{ flex: 1 }}>
            <Outlet>
              
            </Outlet>
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
    );
};

export default HomeLayout;
