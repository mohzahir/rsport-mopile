import { createRouter, createWebHistory } from "@ionic/vue-router";
import { flashSharp, flashOutline, newspaper, videocam, listSharp, imageSharp, eyeSharp, trophySharp, trophyOutline, footballSharp, timerSharp, peopleSharp, peopleOutline, settingsSharp, chevronDown, chevronForward } from "ionicons/icons";
import FeedsAll from "../views/Feeds/All.vue";
import FeedsVideos from "../views/Feeds/Videos.vue";
import FeedsPosts from "../views/Feeds/Posts.vue";
import FeedsImages from "../views/Feeds/Images.vue";
import FeedsExpectations from "../views/Feeds/Expectations.vue";

const routes = [
  { path: "/", redirect: { name: "feeds" }, name: "home",
  props: {
    mdIcon: flashSharp,
    iosIcon: flashOutline,
  }, },
  // Feeds
  {
    path: "/feeds",
    name: "feeds",
    component: FeedsAll,
    props: {
      name: "menu.feeds",
      mdIcon: newspaper,
      iosIcon: newspaper,
      chevronDown,
      chevronForward,
      isFeeds: false,
      selected: false,
      alias: "feeds_all"
    },
  },
  {
    path: "/feeds/videos",
    name: "feeds_videos",
    component: FeedsVideos,
    props: {
      name: "menu.feeds_videos",
      mdIcon: videocam,
      iosIcon: videocam,
      selected: false,
      alias: "feeds_videos"
    },
  },
  {
    path: "/feeds/posts",
    name: "feeds_posts",
    component: FeedsPosts,
    props: {
      name: "menu.feeds_posts",
      mdIcon: listSharp,
      iosIcon: listSharp,
      selected: false,
      alias: "feeds_posts"
    },
  },
  {
    path: "/feeds/posts",
    name: "feeds_images",
    component: FeedsImages,
    props: {
      name: "menu.feeds_images",
      mdIcon: imageSharp,
      iosIcon: imageSharp,
      selected: false,
      alias: "feeds_images"
    },
  },
  {
    path: "/feeds/expectations",
    name: "feeds_expectations",
    component: FeedsExpectations,
    props: {
      name: "menu.feeds_expectations",
      mdIcon: eyeSharp,
      iosIcon: eyeSharp,
      selected: false,
      alias: "feeds_expectations"
    },
  },
  // Champs
  {
    path: "/championships",
    name: "champs",
    props: {
      name: "menu.champs",
      mdIcon: trophySharp,
      iosIcon: trophySharp,
      selected: false,
    },
    component: () => import("../views/Folder.vue"),
  },
  // My Champs
  {
    path: "/my_championships",
    name: "my_champs",
    props: {
      name: "menu.my_champs",
      mdIcon: trophyOutline,
      iosIcon: trophyOutline,
      selected: false,
    },
    component: () => import("../views/Folder.vue"),
  },
  // Matches
  {
    path: "/matches",
    name: "matches",
    props: {
      name: "menu.matches",
      mdIcon: footballSharp,
      iosIcon: footballSharp,
      chevronDown,
      chevronForward,
      isMatches: false,
    },
    component: () => import("../views/Folder.vue"),
  },
  // Ongoing
  {
    path: "/ongoing",
    name: "ongoing",
    props: {
      name: "menu.ongoing",
      mdIcon: flashSharp,
      iosIcon: flashOutline,
      alias: "ongoing",
      selected: false,
    },
    component: () => import("../views/Folder.vue"),
  },
  // Upcoming
  {
    path: "/upcoming",
    name: "upcoming",
    props: {
      name: "menu.upcoming",
      mdIcon: timerSharp,
      iosIcon: timerSharp,
      alias: "upcoming",
      selected: false,
    },
    component: () => import("../views/Folder.vue"),
  },
  // Teams
  {
    path: "/teams",
    name: "teams",
    props: {
      name: "menu.teams",
      mdIcon: peopleSharp,
      iosIcon: peopleSharp,
      selected: false,
    },
    component: () => import("../views/Folder.vue"),
  },
  // My Teams
  {
    path: "/my_teams",
    name: "my_teams",
    props: {
      name: "menu.my_teams",
      mdIcon: peopleOutline,
      iosIcon: peopleOutline,
      selected: false,
    },
    component: () => import("../views/Folder.vue"),
  },
  // Settings
  {
    path: "/settings",
    name: "settings",
    props: {
      name: "menu.settings",
      mdIcon: settingsSharp,
      iosIcon: settingsSharp,
      selected: false,
    },
    component: () => import("../views/Folder.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
