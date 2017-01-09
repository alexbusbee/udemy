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
var firebase_service_1 = require('./services/firebase.service');
var AppComponent = (function () {
    function AppComponent(_firebaseService) {
        this._firebaseService = _firebaseService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._firebaseService.getBusinesses().subscribe(function (businesses) {
            _this.businesses = businesses;
        });
        this._firebaseService.getCategories().subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    AppComponent.prototype.changeState = function (state, key) {
        console.log('Changing state to: ' + state);
        if (key) {
            console.log('Changing key: ' + key);
            this.activeKey = key;
        }
        this.appState = state;
    };
    AppComponent.prototype.filterCategory = function (category) {
        var _this = this;
        this._firebaseService.getBusinesses(category).subscribe(function (businesses) {
            _this.businesses = businesses;
        });
    };
    AppComponent.prototype.addBusiness = function (company, category, years_in_business, description, phone, email, street_address, city, state, zipcode) {
        var created_at = new Date().toString();
        var newBusiness = {
            company: company,
            category: category,
            years_in_business: years_in_business,
            description: description,
            phone: phone,
            email: email,
            street_address: street_address,
            city: city,
            state: state,
            zipcode: zipcode,
            created_at: created_at
        };
        console.log(newBusiness);
        this._firebaseService.addBusiness(newBusiness);
        this.changeState('default');
    };
    AppComponent.prototype.showEdit = function (business) {
        this.changeState('edit', business.$key);
        this.activeCompany = business.company;
        this.activeCategory = business.category;
        this.activeYearsInBusiness = business.years_in_business;
        this.activeDescription = business.description;
        this.activePhone = business.phone;
        this.activeEmail = business.email;
        this.activeStreetAddress = business.street_address;
        this.activeCity = business.city;
        this.activeState = business.state;
        this.activeZipcode = business.zipcode;
    };
    AppComponent.prototype.updateBusiness = function () {
        var updBusiness = {
            company: this.activeCompany,
            category: this.activeCategory,
            years_in_business: this.activeYearsInBusiness,
            description: this.activeDescription,
            phone: this.activePhone,
            email: this.activeEmail,
            street_address: this.activeStreetAddress,
            city: this.activeCity,
            state: this.activeState,
            zipcode: this.activeZipcode
        };
        this._firebaseService.updateBusiness(this.activeKey, updBusiness);
        this.changeState('default');
    };
    AppComponent.prototype.deleteBusiness = function (key) {
        this._firebaseService.deleteBusiness(key);
        this.changeState('default');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [firebase_service_1.FirebaseService]
        }), 
        __metadata('design:paramtypes', [firebase_service_1.FirebaseService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map