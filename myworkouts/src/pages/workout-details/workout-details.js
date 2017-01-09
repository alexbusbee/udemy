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
var workouts_1 = require('../workouts/workouts');
var WorkoutDetailsPage = (function () {
    function WorkoutDetailsPage(navCtrl, params, workoutService) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.workoutService = workoutService;
        this.workout = params.get('workout');
    }
    WorkoutDetailsPage.prototype.deleteWorkout = function (workoutId) {
        var _this = this;
        this.workoutService.deleteWorkout(workoutId).subscribe(function (data) {
            _this.result = data;
        });
        this.navCtrl.push(workouts_1.WorkoutsPage);
    };
    WorkoutDetailsPage = __decorate([
        core_1.Component({
            selector: 'workout-details',
            templateUrl: 'workout-details.html'
        }), 
        __metadata('design:paramtypes', [Object, Object, workout_service_1.WorkoutService])
    ], WorkoutDetailsPage);
    return WorkoutDetailsPage;
}());
exports.WorkoutDetailsPage = WorkoutDetailsPage;
//# sourceMappingURL=workout-details.js.map