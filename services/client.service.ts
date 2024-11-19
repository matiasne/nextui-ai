import http from "./api";

export function useClientService() {
  return {
    async getSettings(
      publisherId: number
    ): Promise<{ data: { data: ClientSettingsDTO } }> {
      return http.get(`settings/${publisherId}`);
    },
  };
}
