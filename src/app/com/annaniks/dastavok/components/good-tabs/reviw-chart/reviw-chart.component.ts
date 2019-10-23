import { Component, OnInit, HostListener } from "@angular/core"
export var single = [
    {
        "name": "5",
        "value": 8940000
    },
    {
        "name": "4",
        "value": 5000000
    },
    {
        "name": "3",
        "value": 3805000
    },
    {
        "name": "2",
        "value":  1805000
    },
    {
        "name": "1",
        "value": 850000
    }
];

export var multi = [
    // {
    //     "name": "Germany",
    //     "series": [
    //         {
    //             "name": "2010",
    //             "value": 7300000
    //         },
    //         {
    //             "name": "2011",
    //             "value": 8940000
    //         }
    //     ]
    // },

    // {
    //     "name": "USA",
    //     "series": [
    //         {
    //             "name": "2010",
    //             "value": 7870000
    //         },
    //         {
    //             "name": "2011",
    //             "value": 8270000
    //         }
    //     ]
    // },

    // {
    //     "name": "France",
    //     "series": [
    //         {
    //             "name": "2010",
    //             "value": 5000002
    //         },
    //         {
    //             "name": "2011",
    //             "value": 5800000
    //         }
    //     ]
    // },
    
    // {
    //     "name": "France",
    //     "series": [
    //         {
    //             "name": "2010",
    //             "value": 5000002
    //         },
    //         {
    //             "name": "2011",
    //             "value": 5800000
    //         }
    //     ]
    // },
    
    // {
    //     "name": "France",
    //     "series": [
    //         {
    //             "name": "2010",
    //             "value": 5000002
    //         },
    //         {
    //             "name": "2011",
    //             "value": 5800000
    //         }
    //     ]
    // }
];
@Component({
    selector: "app-revie-chart",
    templateUrl: "reviw-chart.component.html",
    styleUrls: ["reviw-chart.component.scss"]
})

export class ReviwChartComponent implements OnInit {
    @HostListener('window:resize',['$event'])
    onresize(){
        console.log(window.innerWidth);
        if(window.innerWidth<=800 && window.innerWidth>400){
            this.view[0]=300;
            this.view[1]=100;
        }

        else if(window.innerWidth<=400){
            this.view[0]=220;
            this.view[1]=100;
        }
        else{
            this.view[0]=446;
            this.view[1]=110;
        }
    }


    survey = {
        country: '',
        gender: '',
        rating: 5
    }

    view: any[] = [446, 110];

    // options
    showXAxis = false;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = '';
    showYAxisLabel = true;
    yAxisLabel = '';
    barPadding=true;
    showDataLabel=true;





    colorScheme = {
        domain: ['#87bd3c', '#3c74bd', '#bdbd3c', '#ff6f00','#bd3c3c']
    };

    constructor() {
        Object.assign(this, { single, multi })
    }

    ngOnInit() { 
        this.onresize();
    }

    onSelect(event) {
        console.log(event);
    }
}