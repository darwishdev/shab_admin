export default [
  {
    icon: "mdi-tablet-android",
    title: "sidebar.pages",
    children: [
      {
        icon: "mdi-home-edit-outline",
        title: "sidebar.home",
        to: `/pages/home`,
      },
      {
        icon: "mdi-wallet-membership",
        title: "sidebar.memberships",
        to: `/pages/roles`,
      },
      {
        icon: "mdi-star-circle-outline",
        title: "sidebar.features",
        to: `/pages/features`,
      },
      {
        icon: "mdi-calendar-multiselect",
        title: "sidebar.events",
        to: `/pages/events`,
      },
      
      {
        icon: "mdi-account-wrench-outline",
        title: "sidebar.services",
        to: `/services`,
      },
      {
        icon: "mdi-bank-check",
        title: "sidebar.projects",
        to: `/projects`,
      },

      {
        icon: "mdi-post-outline",
        title: "sidebar.articles",
        to: `/articles`,
      },
      {
        icon: "mdi-post-outline",
        title: "sidebar.chat",
        to: `/chat`,
      },
      
      {
        icon: "mdi-movie-open-play-outline",
        title: "sidebar.videos",
        to: `/videos`,
      }
     
    ]
  },

  {
    icon: "mdi-cog-outline",
    title: "sidebar.requests",
    children: [
      {
        icon: "mdi-account-wrench-outline",
        title: "sidebar.services_requests",
        to: `/requests/services`,
      },
      {
        icon: "mdi-account-wrench-outline",
        title: "sidebar.new_users_requests",
        to: `/requests/users`,
        
      },
      {
        icon: "mdi-account-wrench-outline",
        title: "sidebar.upgrade_users_requests",
        to: `/requests/upgrades`,
      },
      {
        icon: "mdi-account-wrench-outline",
        title: "sidebar.projects_requests",
        to: `/requests/projects`,
      },
      {
        icon: "mdi-account-wrench-outline",
        title: "sidebar.articles_requests",
        to: `/requests/articles`,
      },
      {
        icon: "mdi-account-wrench-outline",
        title: "sidebar.contact",
        to: `/requests/contact`,
      },
    ]
  },
  {
    icon: "mdi-account-outline",
    title: "sidebar.users",
    children: [
      {
        icon: "mdi-account-outline",
        title: "sidebar.users",
        to: `/users`,
      },
      {
        icon: "mdi-account-tie",
        title: "sidebar.admins",
        to: `/admins`,
      },
      {
        icon: "mdi-account-tie",
        title: "sidebar.consultutns",
        to: `/consultunts`,
      },
      {
        icon: "mdi-account-outline",
        title: "sidebar.team",
        to: `/team`,
      },
    ]
  },
  

 
  
];
