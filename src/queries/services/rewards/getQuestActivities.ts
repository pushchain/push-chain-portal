import axios from "axios";
import { getSeasonThreeBaseURL } from "../../baseURL";

export type QuestActivityItem = {
  activityTypeId: string;
  status: string;
  progress: number;
};

export type QuestActivitiesResponse = {
  activities: {
    appId: string;
    appName: string;
    quests: QuestActivityItem[];
  }[];
};

export const getQuestActivities = (userId: string): Promise<QuestActivitiesResponse> =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/v3/users/${userId}/activities`,
    params: { filter: "quests" },
  }).then((response) => response.data);
