import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms"
import { PaymentService } from "../../../views/main/payment/payment.service";

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
    private _latitude: number;
    private _longitude: number;
    public directionsService = new google.maps.DirectionsService();
    public directionsDisplay = new google.maps.DirectionsRenderer();
    @Input() paymentTab: number;
    @Input() companyId: number;
    @Input() good: any;
    @Output() changeTab: EventEmitter<number> = new EventEmitter<number>();

    constructor(private _paymentService: PaymentService) { }

    ngOnInit() {
        this._formBuilder();
        this._initMap();
        this.calcRoute();
        console.log(this.good);

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
            this._latitude = event.latLng.lat();
            this._longitude = event.latLng.lng();
            console.log(this._latitude, this._longitude);

            this._addMarker(event.latLng)


        });
        this.directionsDisplay.setMap(this._map)


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

    calcRoute() {
        var origin = new google.maps.LatLng(40.177200, 44.503490);
        var destination = new google.maps.LatLng(40.7942, 43.84528);
        var request = {
            origin: origin,
            destination: destination,
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: google.maps.TravelMode['DRIVING']
        };
        this.directionsService.route(request, (response, status) => {
            console.log(status);

            if (status == 'OK') {
                console.log(response);

                this.directionsDisplay.setDirections(response);
            }
        });
    }

    private _createOrder() {
        this._paymentService.createOrder({
            "name":"vika",
            "address": {
                "lat": this._latitude,
                "lng": this._longitude,
                "text": this.paymentForm.value.address,
            },
            "companyId": this.companyId,
            "good": {
                "id": this.good.id,
                "count": this.good.count,
                "toppings": [{
                    "id": 1,
                    "toppingValue": 0.75
                  },
                ]
            }


        }).subscribe((data) => {
            this.openPayment();
            console.log(data);

        })
    }
    public onClickSave() {
        this._createOrder()
    }

}
