import {ServiceHub} from "@next-service-hub/core";
import React from "react";

export default function Home() {

    ServiceHub.init({
        auth: {
            provider: {
                name: 'auth0'
            },
        },
        email: {
            provider: {
                name: 'mailgun'
            },
        },
    });

    return (
        <main>
            <h1>🧪 ServiceHub Test App 1</h1>
        </main>
    );
}
