import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios('../heroAppData.json')
            .then(data => setProducts(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));

    }, [])

    return { products, loading, error }
}

export default useProducts
