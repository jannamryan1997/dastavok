import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms"
import { PaymentService } from "../../../views/main/payment/payment.service";
import { Router, ActivatedRoute } from "@angular/router";
import { PARAMETERS } from "@angular/core/src/util/decorators";
import { OrderInfo } from "../../../models/models";


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
    public ordersParams: OrderInfo;
    public domaphoreValue: boolean;
    public loading: boolean = false;
    public error:string;
    @Input() paymentTab: number;
    @Output() changeTab: EventEmitter<number> = new EventEmitter<number>();
    @Output() addressValue: EventEmitter<string> = new EventEmitter<string>();

    constructor(private _paymentService: PaymentService, private router: Router, private _activatedRoute: ActivatedRoute) {
        this._activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams.order) {
                this.ordersParams = JSON.parse(queryParams.order);
            }
        })
    }

    ngOnInit() {
        this._formBuilder();
        this._initMap();
        this.calcRoute();
        this._getOrderProcessing();
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
    public getAddresValue() {
        this.addressValue.emit(this.paymentForm.value.address);
    }

    private _initMap() {
        this._map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });

        google.maps.event.addListener(this._map, 'click', (event) => {
            this._latitude = event.latLng.lat();
            this._longitude = event.latLng.lng();
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
            travelMode: google.maps.TravelMode['DRIVING']
        };
        this.directionsService.route(request, (response, status) => {
            if (status == 'OK') {
                this.directionsDisplay.setDirections(response);
            }
        });
    }

    private _createOrder(): void {
        this.loading=true;
        this.paymentForm.disable();
        this._paymentService.createOrder({
            name: "payment",
            address: {
                lat: this._latitude,
                lng: this._longitude,
                text: this.paymentForm.value.address,
            },
            companyId: this.ordersParams.companyId,
            good: this.ordersParams.good


        }).subscribe((data) => {
            this.loading = false;
            this.paymentForm.enable();
            this.openPayment();
            this.getAddresValue();
            (data);

        });
        error=>{
            this.loading = false;
            this.paymentForm.enable();
        }
    }
    public onClickSave() {
        if (this.ordersParams.orderType == 'one') {
            this._createOrder();
        }
        if (this.ordersParams.orderType == 'basket') {
            this._changeOrderStatus();
        }

    }

    private _getOrderProcessing() {
        
        this.loading=true;
        this.paymentForm.disable();
        this._paymentService.getOrderProcessing()
            .subscribe((data) => {
                this.loading = false;
                this.paymentForm.enable();

            });
        error => {
            this.loading = false;
            this.paymentForm.enable();
        }
    }

    private _changeOrderStatus(): void {
        this.loading=true;
        this.paymentForm.disable();
        this._paymentService.putOrders(
            {
                ordersId: this.ordersParams.orders,
                address: {
                    lat: this._latitude,
                    lng: this._longitude,
                    text: this.paymentForm.value.address,
                },
                domaphore: true,
                lift: false,
                apartment: +this.paymentForm.value.apartment,
            }
        ).subscribe((data) => {
            this.loading=false;
            this.paymentForm.enable();
            this.openPayment();

        },
        err=>{
            this.error=err.error.error;
            this.loading=false;
            this.paymentForm.enable();
        }
        )
    ;
       
    }

}
