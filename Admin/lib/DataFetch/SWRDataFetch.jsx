import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useHeroData = () => {
  const { data, error, mutate } = useSWR(`${API_URL}/api/hero`, fetcher);
  return { data, error, isLoading: !data && !error, mutate };
};

export const useServiceData = () => {
  const { data, error, mutate } = useSWR(`${API_URL}/api/service`, fetcher);
  return { data, error, isLoading: !data && !error, mutate };
};

export const useAlbumData = () => {
  const { data, error, mutate } = useSWR(`${API_URL}/api/album`, fetcher);
  return { data, error, isLoading: !data && !error, mutate };
};

export const useAboutData = () => {
  const { data, error, mutate } = useSWR(`${API_URL}/api/about`, fetcher);
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFeatureData = () => {
  const { data, error, mutate } = useSWR(`${API_URL}/api/feature`, fetcher);
  return { data, error, isLoading: !data && !error, mutate };
};

export const usePolicyData = () => {
  const { data, error, mutate } = useSWR(`${API_URL}/api/policy`, fetcher);
  return { data, error, isLoading: !data && !error, mutate };
};

export const useMemberData = () => {
  const { data, error, mutate } = useSWR(`${API_URL}/api/member`, fetcher);
  return { data, error, isLoading: !data && !error, mutate };
};

export const usePortfolioData = () => {
  const { data, error, mutate } = useSWR(`${API_URL}/api/portfolio`, fetcher);
  return { data, error, isLoading: !data && !error, mutate };
};

export const useBlogData = () => {
  const { data, error, mutate } = useSWR(`${API_URL}/api/blog`, fetcher);
  return { data, error, isLoading: !data && !error, mutate };
};

export const usePartnerData = () => {
  const { data, error, mutate } = useSWR(`${API_URL}/api/partner`, fetcher);
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFeedbackData = () => {
  const { data, error, mutate } = useSWR(`${API_URL}/api/feedback`, fetcher);
  return { data, error, isLoading: !data && !error, mutate };
};

export const useInstagramStripData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/instagram-strip`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
