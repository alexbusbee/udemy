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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.apiKey = '44d5111015f19aa6';
        this.conditionsUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
        this.searchUrl = 'http://localhost:8100/search/aq?query=';
    }
    WeatherService.prototype.getWeather = function (zmw) {
        return this.http.get(this.conditionsUrl + '/zmw:' + zmw + '.json')
            .map(function (res) { return res.json(); });
    };
    WeatherService.prototype.searchCities = function (searchStr) {
        return this.http.get(this.searchUrl + searchStr)
            .map(function (res) { return res.json(); });
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map