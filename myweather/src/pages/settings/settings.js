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
var weather_1 = require('../weather/weather');
var SettingsPage = (function () {
    function SettingsPage(navCtrl, weatherService) {
        this.navCtrl = navCtrl;
        this.weatherService = weatherService;
    }
    SettingsPage.prototype.getQuery = function () {
        var _this = this;
        this.weatherService.searchCities(this.searchStr)
            .subscribe(function (res) {
            _this.results = res.RESULTS;
        });
    };
    SettingsPage.prototype.ngOnInit = function () {
        this.getDefaultLocation();
    };
    SettingsPage.prototype.getDefaultLocation = function () {
        if (localStorage.getItem('location') !== undefined) {
            this.defaultLocation = JSON.parse(localStorage.getItem('location')).name;
        }
        else {
            this.defaultLocation = '10001.11.99999';
        }
    };
    SettingsPage.prototype.setDefaultLocation = function (location) {
        this.results = [];
        localStorage.setItem('location', JSON.stringify(location));
        this.searchStr = location.name;
        this.getDefaultLocation();
    };
    SettingsPage.prototype.saveChanges = function () {
        this.navCtrl.push(weather_1.WeatherPage);
    };
    SettingsPage = __decorate([
        core_1.Component({
            selector: 'settings',
            templateUrl: 'settings.html'
        }), 
        __metadata('design:paramtypes', [Object, weather_service_1.WeatherService])
    ], SettingsPage);
    return SettingsPage;
}());
exports.SettingsPage = SettingsPage;
//# sourceMappingURL=settings.js.map