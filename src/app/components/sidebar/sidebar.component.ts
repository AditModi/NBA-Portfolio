import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "fa-list-ul",
    class: "fa"
  },
  {
    path: "/news",
    title: "News",
    icon: "fa-newspaper",
    class: "fa"
  },
  {
    path: "/schedule",
    title: "Team Schedule",
    icon: "fa-calendar-alt",
    class: "fa"
  },
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   icon: "fa-map-marker",
  //   class: "fa" },
  // {
  //   path: "/notifications",
  //   title: "Notifications",
  //   icon: "icon-bell-55",
  //   class: ""
  // },

  // {
  //   path: "/user",
  //   title: "User Profile",
  //   icon: "icon-single-02",
  //   class: ""
  // },
  // {
  //   path: "/tables",
  //   title: "Table List",
  //   icon: "icon-puzzle-10",
  //   class: ""
  // },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   icon: "icon-align-center",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
