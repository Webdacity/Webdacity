import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head"


const NotFound = () => {
    return (
        <Layout
            pageMeta={{
                title: "Page not Found | Webdacity",
                description: "Page not Found",
            }}
        >

            <h1>Page not Found</h1>
        </Layout>
    )
}

export default NotFound