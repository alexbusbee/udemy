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
var workout_service_1 = require('../../app/services/workout.service');
var ionic_angular_1 = require('ionic-angular');
var AddWorkoutPage = (function () {
    function AddWorkoutPage(navCtrl, workoutService) {
        this.navCtrl = navCtrl;
        this.workoutService = workoutService;
    }
    AddWorkoutPage.prototype.onSubmit = function () {
        var _this = this;
        var workout = {
            title: this.title,
            note: this.note,
            type: this.type
        };
        // Add workout
        this.workoutService.addWorkout(workout).subscribe(function (data) {
            _this.result = data;
        });
        this.navCtrl.push('WorkoutsPage');
    };
    AddWorkoutPage = __decorate([
        core_1.Component({
            selector: 'add-workout',
            templateUrl: 'add-workout.html'
        }), 
        __metadata('design:paramtypes', [Object, workout_service_1.WorkoutService])
    ], AddWorkoutPage);
    return AddWorkoutPage;
}());
exports.AddWorkoutPage = AddWorkoutPage;
//# sourceMappingURL=add-workout.js.map