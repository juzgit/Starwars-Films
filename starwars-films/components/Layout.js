import React from "react";
import Head from 'next/head';


//serves as the layout for the application.
//takes in a single prop called children, which represents the content that will be rendered within the layout.
const Layout = ({ children }) => (

    <div className="container">
      {/**Head component from next/head which is used to set the title, description, and favicon of the page. */}
        <Head>
            <title>Star Wars Films</title>
            <meta name="description" content="Explore Star Wars films data" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/**represents the navigation section of the header. 
         * contains a single <a> element with the text "Home" and a link to the homepage ("/").
        */}
        <header>
            <nav>
                <a href="/">Home</a>
            </nav>           
        </header>
        
        <main>{children}</main>

    <style jsx>{`
        .container {
         max-width: 800px;
         margin: 0 auto;
         padding: 20px;
        }
       
        header {
        background-color: #333;
        color: #fff;
        padding: 10px 0;
        text-align: center;
        }
  
        nav {
        margin-bottom: 20px;
        }
  
        nav a {
        color: #fff;
        margin-right: 20px;
        text-decoration: none;
        }
    `}</style>
    </div>
)

export default Layout;