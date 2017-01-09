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
var angularfire2_1 = require('angularfire2');
require('rxjs/add/operator/map');
var FirebaseService = (function () {
    function FirebaseService(_af) {
        this._af = _af;
    }
    FirebaseService.prototype.getBusinesses = function (category) {
        if (category === void 0) { category = null; }
        if (category != null) {
            this.businesses = this._af.database.list('/businesses', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            });
        }
        else {
            this.businesses = this._af.database.list('/businesses');
        }
        return this.businesses;
    };
    FirebaseService.prototype.getCategories = function () {
        this.categories = this._af.database.list('/categories');
        return this.categories;
    };
    FirebaseService.prototype.addBusiness = function (newBusiness) {
        return this.businesses.push(newBusiness);
    };
    FirebaseService.prototype.updateBusiness = function (key, updBusiness) {
        return this.businesses.update(key, updBusiness);
    };
    FirebaseService.prototype.deleteBusiness = function (key) {
        return this.businesses.remove(key);
    };
    FirebaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map