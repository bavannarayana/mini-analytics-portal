import { useSearchParams } from "react-router-dom";

export type Filters = {
  projectId: string;
  from: string;
  to: string;
  event: string;
  breakdown: string;
};

const DEFAULT_FILTERS: Filters = {
  projectId: "1",
  from: "2024-01-01",
  to: "2024-01-30",
  event: "app_open",
  breakdown: "city",
};

export function useURLFilters() {
  const [params, setParams] = useSearchParams();

  const filters: Filters = {
    projectId: params.get("projectId") || DEFAULT_FILTERS.projectId,
    from: params.get("from") || DEFAULT_FILTERS.from,
    to: params.get("to") || DEFAULT_FILTERS.to,
    event: params.get("event") || DEFAULT_FILTERS.event,
    breakdown: params.get("breakdown") || DEFAULT_FILTERS.breakdown,
  };

  const setFilters = (updated: Partial<Filters>) => {
    const newParams = {
      ...filters,
      ...updated,
    };

    setParams(newParams as any);
  };

  return { filters, setFilters };
}
