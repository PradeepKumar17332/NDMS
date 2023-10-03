import { Injectable } from '@angular/core';

// We can take more properties like ipAddress, macAddress, serialNumber, firmwareVersion, ports, status
export interface networkDevice {
	id: string;
	name: string;
	version: string;
	brand: string;
	type: string; 
	location: string;
}

@Injectable({
	providedIn: 'root'
})
export class DeviceHandlerService {

	constructor() { }

	getDeviceList(){
		if(localStorage.getItem('networkDeviceList')){
			return JSON.parse(<string>localStorage.getItem('networkDeviceList'))
		}else{// returning default values
			let details =  [
				{
					id: '1', 
					name: 'Router001', 
					version: 'v2.0', 
					brand: 'Cisco', 
					type: 'Router', 
					location: 'Server Room'
				}, {
					id: '2', 
					name: 'Switch001', 
					version: 'v1.2', 
					brand: 'HP', 
					type: 'Switch', 
					location: 'Networking Rack'
				}
			]
			localStorage.setItem('networkDeviceList', <string>JSON.stringify(details));
			return details;
		}
	}

	getDeviceDetails(id:string){
		let details = this.getDeviceList();
		for (let index = 0; index < details.length; index++) {
			const element = details[index];
			if(element.id == id) return element;
		}
		return {};
	}

	addDevice(info:any){
		let details = this.getDeviceList();
		console.log("details", details);
		
		let count = Number(details[details.length - 1].id);
		count = (count) + 1;
		info['id'] = count.toString();
		details.push(info);
		console.log("details", details);
		localStorage.setItem('networkDeviceList', <string>JSON.stringify(details));
		return true;
	}

	updateDeivce(info:any){
		let details = this.getDeviceList();

		let newDetails = [];
		for (let index = 0; index < details.length; index++) {
			const element = details[index];
			if(info.id == element.id){
				newDetails.push(info);
			}else{
				newDetails.push(element);
			}
		}
		localStorage.setItem('networkDeviceList', <string>JSON.stringify(newDetails));
		return true;
	}

	deleteDevice(info:any){
		let details = this.getDeviceList();

		let newDetails = [];
		for (let index = 0; index < details.length; index++) {
			const element = details[index];
			if(info.id != element.id){
				newDetails.push(element);
			}
		}
		localStorage.setItem('networkDeviceList', <string>JSON.stringify(newDetails));
		return true;
	}
}
