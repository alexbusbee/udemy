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
var workout_service_1 = require('../../app/services/workout.service');
var workout_details_1 = require('../workout-details/workout-details');
var WorkoutsPage = (function () {
    function WorkoutsPage(navCtrl, workoutService) {
        this.navCtrl = navCtrl;
        this.workoutService = workoutService;
    }
    WorkoutsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.workoutService.getWorkouts().subscribe(function (workouts) {
            _this.workouts = workouts;
        });
    };
    WorkoutsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.workoutService.getWorkouts().subscribe(function (workouts) {
            _this.workouts = workouts;
        });
    };
    WorkoutsPage.prototype.workoutSelected = function (event, workout) {
        this.navCtrl.push(workout_details_1.WorkoutDetailsPage, {
            workout: workout
        });
    };
    WorkoutsPage = __decorate([
        core_1.Component({
            selector: 'workouts',
            templateUrl: 'workouts.html'
        }), 
        __metadata('design:paramtypes', [Object, workout_service_1.WorkoutService])
    ], WorkoutsPage);
    return WorkoutsPage;
}());
exports.WorkoutsPage = WorkoutsPage;
//# sourceMappingURL=workouts.js.map