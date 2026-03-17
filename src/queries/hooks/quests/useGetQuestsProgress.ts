import { useQuery } from "@tanstack/react-query";
import { questsProgress } from "../../queryKeys";
import { getQuestsProgress } from "../../services";
import { GetQuestsProgressParams } from "../../types/quests";

export const useGetQuestsProgress = (params: GetQuestsProgressParams) => {
  return useQuery({
    queryKey: [questsProgress, params.appId, params.userId],
    queryFn: () => getQuestsProgress(params),
    enabled: !!params.appId && !!params.userId,
  });
};
