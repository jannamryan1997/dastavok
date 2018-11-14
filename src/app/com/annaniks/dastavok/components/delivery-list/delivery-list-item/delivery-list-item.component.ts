import { Component, OnInit, Input } from "@angular/core"
import { ProfileService } from "../../../views/main/profile/profile.service";

declare var google;

@Component({
    selector: "app-delivery-list-item",
    templateUrl: "delivery-list-item.component.html",
    styleUrls: ["delivery-list-item.component.scss"]
})

export class DeliveryListItemComponent implements OnInit {
    @Input() index: number;
    private _map;
    private _marker;
    public showDetails: boolean = false;
    public detailsinfoheigth: string;
    public directionsService = new google.maps.DirectionsService();
    public directionsDisplay = new google.maps.DirectionsRenderer();
    constructor(private _profileService: ProfileService) { }

    ngOnInit() {
        this._initMap();
        this.setDetailsHeight();
        this.calcRoute();
    }

    private _initMap() {
        this._map = new google.maps.Map(document.getElementsByClassName('flan')[this.index], {
            center: { lat: 55.751244, lng: 37.618423 },
            zoom: 8
        });
        google.maps.event.addListener(this._map, 'click', (event) => {
            let lat = event.latLng.lat();
            let long = event.latLng.lng();
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

    public showMap() {
        this.showDetails = !this.showDetails;
        this.setDetailsHeight();

    }

    public setDetailsHeight() {
        if (this.showDetails) {
            this.detailsinfoheigth = document.getElementById('1').scrollHeight + 'px';
        }
        else {
            this.detailsinfoheigth = '0px';
        }
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




}