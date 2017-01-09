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
var WorkoutService = (function () {
    function WorkoutService(http) {
        this.http = http;
        this.apiKey = 'n5IGMM5M70yvnkPFTdNgv2_tVJyrCBW6';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkouts/collections/workouts';
    }
    WorkoutService.prototype.getWorkouts = function () {
        return this.http.get(this.workoutsUrl + '?apiKey=' + this.apiKey)
            .map(function (res) { return res.json(); });
    };
    WorkoutService.prototype.addWorkout = function (workout) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.workoutsUrl + '?apiKey=' + this.apiKey, JSON.stringify(workout), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WorkoutService.prototype.deleteWorkout = function (workoutId) {
        return this.http.delete(this.workoutsUrl + '/' + workoutId + '?apiKey=' + this.apiKey)
            .map(function (res) { return res.json(); });
    };
    WorkoutService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WorkoutService);
    return WorkoutService;
}());
exports.WorkoutService = WorkoutService;
//# sourceMappingURL=workout.service.js.map