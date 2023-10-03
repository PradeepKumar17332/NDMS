import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateDeviceComponent } from './components/update-device/update-device.component';

@NgModule({
	declarations: [
		AppComponent,
		DeviceListComponent,
		NavbarComponent,
		DeviceDetailsComponent,
		AddDeviceComponent,
		DashboardComponent,
  UpdateDeviceComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MatIconModule,
		MatButtonModule,
		MatToolbarModule,
		MatTableModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatInputModule,
		MatDialogModule,
		ChartsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
