import axios from "axios";
import { useEffect, useState } from "react"


const useApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios('../appData.json')
            .then(data => setApps(data.data))
            .finally(() => setLoading(false))
    }, []);

    return { apps, loading };
}

export default useApps;