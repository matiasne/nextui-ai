import { PropertyDTO } from "@/services/dtos/property-dto";
import http from "./api";

export function usePropertiesService() {
  return {
    async getAll(
      publisherId: number,
      page: number,
      pageSize: number
    ): Promise<{
      properties: PropertyDTO[];
      record: number;
      totalPages: number;
      totals: number;
    }> {
      return http.get(
        `properties/${publisherId}?page=${page}&pageSize=${pageSize}`
      );
    },

    async getByZone(
      publisherId: number,
      minLatitude: number,
      maxLatitude: number,
      minLongitude: number,
      maxLongitude: number,
      signal: AbortSignal
    ): Promise<{
      properties: PropertyDTO[];
      record: number;
      totalPages: number;
      totals: number;
    }> {
      return http.get(
        `properties/${publisherId}?maxLongitude=${maxLongitude}&minLongitude=${minLongitude}&maxLatitude=${maxLatitude}&minLatitude=${minLatitude}`,
        {
          signal: signal,
        }
      );
    },
  };
}
