import { Component, Inject, OnInit , Injectable} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import { DeviceHandlerService } from 'src/app/services/device-handler.service';

@Component({
	selector: 'app-update-device',
	templateUrl: './update-device.component.html',
	styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {

	deviceDetails:any;
	deviceForm!: FormGroup;

	constructor(private  dialogRef:  MatDialogRef<UpdateDeviceComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any, private formBuilder: FormBuilder, private devHandler:DeviceHandlerService) { 
		console.log(data);
		this.deviceDetails = data.details;
	}

	ngOnInit(): void {
		this.deviceForm = this.formBuilder.group({
			name: [this.deviceDetails.name, [Validators.required]],
			version: [this.deviceDetails.version, Validators.required],
			brand: [this.deviceDetails.brand, Validators.required],
			type: [this.deviceDetails.type, Validators.required],
			location: [this.deviceDetails.location, Validators.required]
		});
	}

	public  closeMe() {
		this.dialogRef.close();
	}

	submit(){
		if (!this.deviceForm.valid) {
			alert("Please fill for correctly");
			return;
		}
		let updatedValues = this.deviceForm.value;
		console.log(updatedValues);
		updatedValues['id'] = this.deviceDetails.id;
		let res = this.devHandler.updateDeivce(updatedValues);
		this.closeMe();
	}

}
