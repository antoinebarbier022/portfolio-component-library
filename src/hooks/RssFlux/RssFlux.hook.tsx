import { useState, useEffect } from "react";

const useRssFlux = (url: string, maxItems: number = 10) => {
    const rssFeed ="https://api.rss2json.com/v1/api.json?rss_url=" + url;
    const [items, setItems] = useState<Array<any>>();
    useEffect(() => {
        const loadItems = async () => {
        fetch(rssFeed, { headers: { Accept: "application/json" } })
            .then((res) => res.json())
            .then((data) => data.items.filter((item: { title: string | any[]; }) => item.title.length > 0))
            .then((newItems) => newItems.slice(0, maxItems))
            .then((items) => setItems(items))
            .catch((error) => console.log(error));
        };
        loadItems();
    }, [maxItems]);

  return items;
};

export default useRssFlux;