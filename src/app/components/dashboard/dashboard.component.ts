import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType } from 'chart.js';
import { DeviceHandlerService } from 'src/app/services/device-handler.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	networkDeviceList:any[] = [];
	distByBrands:any = {};
	distByTypes:any = {};
	numDevices:number = 0;

	brandsChartLabel = "Distribution by brands";
	brandsChartlables:any[] = [];
	brandsChartData:any[] = [];

	typesChartLabel = "Distribution by types";
	typesChartlables:any[] = [];
	typesChartData:any[] = [];

	public chartType:ChartType = 'bar';
	public barChartOptions: any = {
		responsive: true,
		scales : {
		  yAxes: [{
			ticks: {
			  max : 60,
			  min : 0,
			}
		  }],
		  xAxes: [{
	  
	 
			}],
		},
		  plugins: {
		  datalabels: {
			display: true,
			align: 'top',
			anchor: 'end',
			//color: "#2756B3",
			color: "#222",
	
			font: {
			  family: 'FontAwesome',
			  size: 14
			},
		  
		  },
		  deferred: false
	
		},
	
	};

	constructor(private devHandler:DeviceHandlerService, private route:Router) { }

	ngOnInit(): void {
		this.networkDeviceList = this.devHandler.getDeviceList();
		this.processData();
	}

	processData(){
		this.numDevices = this.networkDeviceList.length;
		this.dataByBrands();
		this.dataByTypes();
	}

	dataByBrands(){
		for (let index = 0; index < this.networkDeviceList.length; index++) {
			const element = this.networkDeviceList[index];
			if(element.brand in this.distByBrands){
				this.distByBrands[element.brand]++;
			}else{
				this.distByBrands[element.brand] = 1;
			}
		}
		let lables = Object.keys(this.distByBrands);
		let tdata = Object.values(this.distByBrands);
		this.brandsChartlables = lables;
		this.brandsChartData = [
			{ data: tdata,
				label: this.brandsChartLabel
			  }
		]
	}

	dataByTypes(){
		for (let index = 0; index < this.networkDeviceList.length; index++) {
			const element = this.networkDeviceList[index];
			if(element.type in this.distByTypes){
				this.distByTypes[element.type]++;
			}else{
				this.distByTypes[element.type] = 1;
			}
		}
		let lables = Object.keys(this.distByTypes);
		let tdata = Object.values(this.distByTypes);
		this.typesChartlables = lables;
		this.typesChartData = [
			{ data: tdata,
				label: this.typesChartLabel
			  }
		]
	}

}
