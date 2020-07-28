import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { NewsComponent } from "../../pages/news/news.component";
import { PlayerSearchComponent } from '../../pages/player-search/player-search.component'; 
import { PlayerSeasonAvgComponent } from '../../pages/player-season-avg/player-season-avg.component';
import { TeamScheduleComponent } from "../../pages/team-schedule/team-schedule.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';

const mat = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatCardModule,
  MatTableModule,
  MatToolbarModule,
  MatBadgeModule,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ...mat,
  ],
  exports: [
    ...mat,
  ],
  declarations: [
    DashboardComponent,
    NewsComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    PlayerSearchComponent,
    PlayerSeasonAvgComponent,
    TeamScheduleComponent,
  ]
})
export class AdminLayoutModule {}
