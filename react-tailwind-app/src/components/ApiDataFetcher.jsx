import React, { useState, useEffect } from "react";
import Button from "./ui/Button";

export default function ApiDataFetcher() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ITEMS_PER_PAGE = 10;

  // Fetch data from JSONPlaceholder
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json);
        setFilteredData(json.slice(0, ITEMS_PER_PAGE));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle search
  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered.slice(0, page * ITEMS_PER_PAGE));
  }, [search, data, page]);

  // Load more (pagination)
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">📦 API Data (JSONPlaceholder)</h2>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search posts..."
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Loading State */}
      {loading && (
        <p className="text-center text-blue-500 font-medium">Loading...</p>
      )}

      {/* Error State */}
      {error && (
        <p className="text-center text-red-500 font-medium">
          ❌ {error}
        </p>
      )}

      {/* Data Grid */}
      {!loading && !error && (
        <>
          {filteredData.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredData.map((post) => (
                <div
                  key={post.id}
                  className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 hover:shadow-md transition"
                >
                  <h3 className="font-semibold mb-2 text-lg">{post.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {post.body}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No results found.</p>
          )}

          {/* Load More Button */}
          {filteredData.length < data.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          ).length && (
            <div className="text-center mt-6">
              <Button variant="primary" onClick={loadMore}>
                Load More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
