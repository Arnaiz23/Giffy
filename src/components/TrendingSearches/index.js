import Category from "components/Category";
import React, { useEffect, useState } from "react";
import getTrendingTerms from "services/getTrendingTermsService";

export default function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category options={trends} name='Tendencias' />
}