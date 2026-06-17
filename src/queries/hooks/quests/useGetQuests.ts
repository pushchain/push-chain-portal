import { useQuery } from "@tanstack/react-query";
import { quests } from "../../queryKeys";
import { getQuests } from "../../services";
import { GetQuestsParams } from "../../types/quests";

export const useGetQuests = (params: GetQuestsParams) => {
  return useQuery({
    queryKey: [quests, params.appId],
    queryFn: () => getQuests(params),
    retry: false,
    enabled: !!params.appId,
  });
};
