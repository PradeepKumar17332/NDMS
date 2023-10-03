import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceHandlerService } from 'src/app/services/device-handler.service';

// We can take more properties like ipAddress, macAddress, serialNumber, firmwareVersion, ports, status
export interface networkDevice {
	id: string;
	name: string;
	version: string;
	brand: string;
	type: string; 
	location: string;
}

@Component({
	selector: 'app-device-list',
	templateUrl: './device-list.component.html',
	styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

	networkDeviceList:networkDevice[] = [];
	displayedColumns: string[] = ['id', 'name', 'version', 'brand', 'type', 'location'];
	constructor(private devHandler:DeviceHandlerService, private route:Router) { }

	ngOnInit(): void {
		this.networkDeviceList = this.devHandler.getDeviceList();
		console.log(this.networkDeviceList);
	}

	deviceDetails(clickedElement:any){
		console.log("Clicked Element", clickedElement);
		this.route.navigate(['/device/'+ clickedElement.id])
	}

}
