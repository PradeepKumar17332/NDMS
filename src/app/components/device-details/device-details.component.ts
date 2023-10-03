import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceHandlerService } from 'src/app/services/device-handler.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UpdateDeviceComponent } from '../update-device/update-device.component';

@Component({
	selector: 'app-device-details',
	templateUrl: './device-details.component.html',
	styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
	// @Input('id') deviceID = '';
	deviceId  = this.actRoute.snapshot.params['id'];
	deviceDetails:any = {};
	constructor(private actRoute: ActivatedRoute, private devHandler:DeviceHandlerService, private route:Router, private  dialog:  MatDialog) { }

	ngOnInit(): void {
		console.log("deivce id", this.deviceId);
		this.deviceDetails = this.devHandler.getDeviceDetails(this.deviceId);
	}

	deleteDevice(){
		let res = this.devHandler.deleteDevice(this.deviceDetails);
		if(res) this.route.navigate(['/']);
	}

	update(){
		console.log("update");
		// this.matDialog.open(UpdateDeviceComponent, {
		// 	"width": '6000px',
		// 	"maxHeight": '90vh',
		// 	"data": this.deviceDetails,
		// 	"autoFocus": false
		//   });
		let dialogRef = this.dialog.open(UpdateDeviceComponent,{ 
			height: '600px',
  			width: '600px',
			data: {
            	details:  this.deviceDetails
        	}
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
			this.deviceDetails = this.devHandler.getDeviceDetails(this.deviceId);
		});
	}
}
