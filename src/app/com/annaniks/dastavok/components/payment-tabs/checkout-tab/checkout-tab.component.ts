import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms"

declare var google;

@Component({
    selector: "app-checkout-tab",
    templateUrl: "checkout-tab.component.html",
    styleUrls: ["checkout-tab.component.scss"]
})

export class CheckoutTabComponent implements OnInit {

    public paymentForm: FormGroup;
    private _map;
    private _marker;
    @Input() paymentTab: number;
    @Output() changeTab: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
        this._formBuilder();
        this._initMap();
    }

    private _formBuilder() {
        this.paymentForm = new FormBuilder().group({
            address: ["", Validators.required],
            apartment: ["", Validators.required],
            domaphore: ["", Validators.required],
            lift: ["", Validators.required],
            comment: ["", Validators.required]
        })
    }

    public openPayment() {
        this.changeTab.emit(this.paymentTab);
    }

    private _initMap() {
        this._map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
      
        google.maps.event.addListener(this._map, 'click', (event) => {
            let lat = event.latLng.lat();
            let long = event.latLng.lng();
            this._addMarker(event.latLng)


        });

     
    }

    private _addMarker(location) {
        if (this._marker && this._marker.setMap) {
            this._marker.setMap(null);
        }
        this._marker = new google.maps.Marker({
            position: location,//tex@ nshvac
            map: this._map,

        });
    }


}