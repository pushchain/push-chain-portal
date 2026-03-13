import { useQuery } from "@tanstack/react-query";
import { quests } from "../../queryKeys";
import { getQuests } from "../../services";
import { AuthHeaders } from "../../types";
import { GetQuestsParams } from "../../types/quests";

export const useGetQuests = (params: GetQuestsParams, authHeaders?: AuthHeaders) => {
  return useQuery({
    queryKey: [quests, params.appId],
    queryFn: () => getQuests(params, authHeaders),
    retry: false,
    enabled: !!params.appId,
  });
};
