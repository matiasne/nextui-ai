import http from "./api";

export function useProperties() {
  return {
    async getAll(
      publisherId: number,
      page: number,
      pageSize: number
    ): Promise<any> {
      return http.get(
        `properties/${publisherId}?page=${page}&pageSize=${pageSize}`
      );
    },
  };
}
