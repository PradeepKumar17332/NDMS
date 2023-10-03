import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceHandlerService } from 'src/app/services/device-handler.service';


@Component({
	selector: 'app-add-device',
	templateUrl: './add-device.component.html',
	styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
	deviceForm!: FormGroup;

	constructor(private formBuilder: FormBuilder, private route:Router, private devHandler:DeviceHandlerService) { }

	ngOnInit(): void {
		this.deviceForm = this.formBuilder.group({
			name: [null, [Validators.required]],
			version: [null, Validators.required],
			brand: [null, Validators.required],
			type: [null, Validators.required],
			location: [null, Validators.required]
		});
	}

	submit(){
		if (!this.deviceForm.valid) {
			alert("Please fill for correctly");
			return;
		}
		console.log(this.deviceForm.value);
		let res = this.devHandler.addDevice(this.deviceForm.value);
		if(res){
			this.route.navigate(['/'])
		}
	}

}
