"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var weather_service_1 = require('../../app/services/weather.service');
var WeatherPage = (function () {
    function WeatherPage(navCtrl, weatherService) {
        this.navCtrl = navCtrl;
        this.weatherService = weatherService;
    }
    WeatherPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getDefaultLocation();
        this.weatherService.getWeather(this.zmw)
            .subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
    };
    WeatherPage.prototype.getDefaultLocation = function () {
        if (localStorage.getItem('location') !== undefined) {
            this.zmw = JSON.parse(localStorage.getItem('location')).zmw;
        }
        else {
            this.zmw = '10001.11.99999';
        }
    };
    WeatherPage.prototype.getQuery = function () {
        var _this = this;
        this.weatherService.searchCities(this.searchStr)
            .subscribe(function (res) {
            _this.results = res.RESULTS;
        });
    };
    WeatherPage.prototype.chooseLocation = function (location) {
        var _this = this;
        this.results = [];
        this.weatherService.getWeather(location.zmw)
            .subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
    };
    WeatherPage = __decorate([
        core_1.Component({
            selector: 'weather',
            templateUrl: 'weather.html'
        }), 
        __metadata('design:paramtypes', [Object, weather_service_1.WeatherService])
    ], WeatherPage);
    return WeatherPage;
}());
exports.WeatherPage = WeatherPage;
//# sourceMappingURL=weather.js.map