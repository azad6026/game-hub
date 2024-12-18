import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms")
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
