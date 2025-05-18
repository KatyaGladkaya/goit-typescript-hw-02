import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import { Toaster, toast } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const ACCESS_KEY = "P8qh96HrJNRQUiFF_UH8OJ9EyDU3DHnoMRE9vKO5wXc";

export type UnsplashImage = {
  id: string;
  alt_description: string;
  description: string | null;
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
  width: number;
  height: number;
  user: {
    name: string;
  };
};

function App() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query,
              page,
              per_page: 12,
            },
            headers: {
              Authorization: `Client-ID ${ACCESS_KEY}`,
            },
          }
        );
        const newImages: UnsplashImage[] = response.data.results;
        setImages((prev) => (page === 1 ? newImages : [...prev, ...newImages]));
      } catch (err) {
        setError("Failed to fetch images. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (!newQuery.trim()) {
      toast("Please enter a search term");
      return;
    }
    setQuery(newQuery);
    setPage(1);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}

export default App;
