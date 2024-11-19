import http from "./api";

export function usePinsService() {
  return {
    async getAll(publisherId: number): Promise<PinDTO[]> {
      return http.get(
        `pins/${publisherId}?maxLongitude=180&minLongitude=-180&maxLatitude=90&minLatitude=-90&affiliate=aff_123xyz`
      );
    },
    async getByZone(
      publisherId: number,
      minLatitude: number,
      maxLatitude: number,
      minLongitude: number,
      maxLongitude: number,
      signal: AbortSignal
    ): Promise<PinDTO[]> {
      return http.get(
        `pins/${publisherId}?maxLongitude=${maxLongitude}&minLongitude=${minLongitude}&maxLatitude=${maxLatitude}&minLatitude=${minLatitude}&affiliate=aff_123xyz`,
        {
          signal: signal,
        }
      );
    },
  };
}
