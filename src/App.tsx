import { useState } from "react";
import { Router } from "./routes/Router";

function App() {
    const [user, setUser] = useState<{ name: string; login: string } | undefined>(undefined);

    return (
        <>
            <Router />
        </>
    );
}

export default App;
