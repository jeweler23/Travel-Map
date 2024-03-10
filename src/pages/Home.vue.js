"use strict";
/* __placeholder__ */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppHead_vue_1 = require("@/components/AppHead.vue");
var AppMap_vue_1 = require("@/components/AppMap.vue");
var AppCountry_vue_1 = require("@/components/AppCountry.vue");
var AppSearch_vue_1 = require("@/components/AppSearch.vue");
var CountriesStore_1 = require("../store/CountriesStore");
var index_js_1 = require("@/assets/consts/index.js");
var vue_1 = require("vue");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var countriesStore = (0, CountriesStore_1.useCountriesStore)();
var indexCountry = (0, vue_1.ref)(203);
var infoPlace = (0, vue_1.reactive)({
    region: "Moscow",
    name: "Moscow",
    temperature: null,
    timezone: 10800,
});
var capitalCoords = (0, vue_1.ref)([55.7558, 37.6176]);
var isInput = (0, vue_1.ref)(false);
function showCountry(city) {
    return __awaiter(this, void 0, void 0, function () {
        var info;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, countriesStore.searchCountryByCity(city)];
                case 1:
                    info = (_a.sent())[0];
                    getSearchCountry(info);
                    console.log(info.lat, info.lon);
                    return [2 /*return*/];
            }
        });
    });
}
function getCoordsCapital(countries, index) {
    return countries[index].capitalInfo.latlng;
}
function getSearchCountry(coord) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    isInput.value = true;
                    capitalCoords.value = [coord.lat, coord.lon];
                    //получаем инормацию о месте
                    return [4 /*yield*/, countriesStore.getInfoCountry(coord.lat, coord.lon)];
                case 1:
                    //получаем инормацию о месте
                    _b.sent();
                    return [4 /*yield*/, countriesStore.getDayliForecast(coord.lat, coord.lon)];
                case 2:
                    //получаем информацию о погоде и временной зоне
                    _a = _b.sent(), infoPlace.temperature = _a[0], infoPlace.timezone = _a[1];
                    //получаем информацию о имени места
                    infoPlace.name = countriesStore.country._value[0].name;
                    //получаем инорфмацию о области выбранного места
                    infoPlace.region = countriesStore.country._value[0].state;
                    return [2 /*return*/];
            }
        });
    });
}
function getIdCountries(coord) {
    return __awaiter(this, void 0, void 0, function () {
        var country;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    isInput.value = false;
                    //получаем инормацию о месте
                    return [4 /*yield*/, countriesStore.getInfoCountry(coord.lat, coord.lng)];
                case 1:
                    //получаем инормацию о месте
                    _b.sent();
                    return [4 /*yield*/, countriesStore.getDayliForecast(coord.lat, coord.lng)];
                case 2:
                    //получаем информацию о погоде и временной зоне
                    _a = _b.sent(), infoPlace.temperature = _a[0], infoPlace.timezone = _a[1];
                    //получаем информацию о имени места
                    infoPlace.name = countriesStore.country._value[0].name;
                    //получаем инорфмацию о области выбранного места
                    infoPlace.region = countriesStore.country._value[0].state;
                    country = countriesStore.country;
                    //получаем индекс страны
                    indexCountry.value = countriesStore.getIdCountry(country._value, index_js_1.infoCountries);
                    capitalCoords.value = getCoordsCapital(index_js_1.infoCountries, indexCountry.value);
                    return [2 /*return*/];
            }
        });
    });
}
(0, vue_1.onMounted)(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, countriesStore.getDayliForecast(capitalCoords.value[0], capitalCoords.value[1])];
            case 1:
                _a = _b.sent(), infoPlace.temperature = _a[0], infoPlace.timezone = _a[1];
                return [2 /*return*/];
        }
    });
}); });
var __VLS_modelEmitsType;
var __VLS_componentsOption = {};
var __VLS_name;
function __VLS_template() {
    var __VLS_ctx;
    /* Components */
    var __VLS_otherComponents;
    var __VLS_own;
    var __VLS_localComponents;
    var __VLS_components;
    var __VLS_styleScopedClasses;
    /* CSS variable injection */
    /* CSS variable injection end */
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.Head;
    __VLS_components.Head;
    __VLS_components.Head;
    __VLS_components.Head;
    // @ts-ignore
    [AppHead_vue_1.default, AppHead_vue_1.default,];
    __VLS_components.Search;
    __VLS_components.Search;
    // @ts-ignore
    [AppSearch_vue_1.default,];
    __VLS_components.Country;
    __VLS_components.Country;
    // @ts-ignore
    [AppCountry_vue_1.default,];
    __VLS_components.Map;
    __VLS_components.Map;
    // @ts-ignore
    [AppMap_vue_1.default,];
    {
        var __VLS_0_1 = __VLS_intrinsicElements["div"];
        var __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0_1);
        var __VLS_2_1 = __VLS_1.apply(void 0, __spreadArray([__assign({})], __VLS_functionalComponentArgsRest(__VLS_1), false));
        ({}(__assign({})));
        {
            var __VLS_5_1 = {}.Head;
            var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5_1, new __VLS_5_1(__assign({}, { title: (('Travel Map')), titleClass: ((true)) })));
            ({}.Head);
            var __VLS_7_1 = __VLS_6.apply(void 0, __spreadArray([__assign({}, { title: (('Travel Map')), titleClass: ((true)) })], __VLS_functionalComponentArgsRest(__VLS_6), false));
            ({}(__assign({}, { title: (('Travel Map')), titleClass: ((true)) })));
            var __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5_1, __VLS_7_1);
        }
        {
            var __VLS_10_1 = {}.Head;
            var __VLS_11 = __VLS_asFunctionalComponent(__VLS_10_1, new __VLS_10_1(__assign({}, { title: (('Unforgettable trips To the most amazing Places in the world')) })));
            ({}.Head);
            var __VLS_12_1 = __VLS_11.apply(void 0, __spreadArray([__assign({}, { title: (('Unforgettable trips To the most amazing Places in the world')) })], __VLS_functionalComponentArgsRest(__VLS_11), false));
            ({}(__assign({}, { title: (('Unforgettable trips To the most amazing Places in the world')) })));
            var __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10_1, __VLS_12_1);
        }
        {
            var __VLS_15_1 = {}.Search;
            var __VLS_16 = __VLS_asFunctionalComponent(__VLS_15_1, new __VLS_15_1(__assign({ 'onShowCountry': {}, })));
            ({}.Search);
            var __VLS_17_1 = __VLS_16.apply(void 0, __spreadArray([__assign({ 'onShowCountry': {}, })], __VLS_functionalComponentArgsRest(__VLS_16), false));
            ({}(__assign({ 'onShowCountry': {}, })));
            var __VLS_20 = { 'show-country': __VLS_pickEvent(__VLS_19['show-country'], {}.onShowCountry) };
            __VLS_20 = { "show-country": (__VLS_ctx.showCountry) };
            var __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15_1, __VLS_17_1);
            var __VLS_19 = void 0;
        }
        {
            var __VLS_21_1 = {}.Country;
            var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21_1, new __VLS_21_1(__assign({}, { infoCountries: ((__VLS_ctx.infoCountries)), index: ((__VLS_ctx.indexCountry)), infoPlace: ((__VLS_ctx.infoPlace)) })));
            ({}.Country);
            var __VLS_23_1 = __VLS_22.apply(void 0, __spreadArray([__assign({}, { infoCountries: ((__VLS_ctx.infoCountries)), index: ((__VLS_ctx.indexCountry)), infoPlace: ((__VLS_ctx.infoPlace)) })], __VLS_functionalComponentArgsRest(__VLS_22), false));
            ({}(__assign({}, { infoCountries: ((__VLS_ctx.infoCountries)), index: ((__VLS_ctx.indexCountry)), infoPlace: ((__VLS_ctx.infoPlace)) })));
            var __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21_1, __VLS_23_1);
        }
        {
            var __VLS_26_1 = {}.Map;
            var __VLS_27 = __VLS_asFunctionalComponent(__VLS_26_1, new __VLS_26_1(__assign({ 'onGetCoordsCountries': {}, }, { capitalMarker: ((__VLS_ctx.capitalCoords)), infoCountries: ((__VLS_ctx.infoCountries)), index: ((__VLS_ctx.indexCountry)), isInput: ((__VLS_ctx.isInput)) })));
            ({}.Map);
            var __VLS_28_1 = __VLS_27.apply(void 0, __spreadArray([__assign({ 'onGetCoordsCountries': {}, }, { capitalMarker: ((__VLS_ctx.capitalCoords)), infoCountries: ((__VLS_ctx.infoCountries)), index: ((__VLS_ctx.indexCountry)), isInput: ((__VLS_ctx.isInput)) })], __VLS_functionalComponentArgsRest(__VLS_27), false));
            ({}(__assign({ 'onGetCoordsCountries': {}, }, { capitalMarker: ((__VLS_ctx.capitalCoords)), infoCountries: ((__VLS_ctx.infoCountries)), index: ((__VLS_ctx.indexCountry)), isInput: ((__VLS_ctx.isInput)) })));
            var __VLS_31 = { 'getCoordsCountries': __VLS_pickEvent(__VLS_30['getCoordsCountries'], {}.onGetCoordsCountries) };
            __VLS_31 = { getCoordsCountries: (__VLS_ctx.getIdCountries) };
            var __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26_1, __VLS_28_1);
            var __VLS_30 = void 0;
        }
        (__VLS_3.slots).default;
        var __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0_1, __VLS_2_1);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [showCountry, index_js_1.infoCountries, indexCountry, infoPlace, index_js_1.infoCountries, indexCountry, infoPlace, index_js_1.infoCountries, indexCountry, infoPlace, capitalCoords, index_js_1.infoCountries, indexCountry, isInput, capitalCoords, index_js_1.infoCountries, indexCountry, isInput, capitalCoords, index_js_1.infoCountries, indexCountry, isInput, getIdCountries,];
    return __VLS_slots;
}
var __VLS_internalComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            Head: AppHead_vue_1.default,
            Map: AppMap_vue_1.default,
            Country: AppCountry_vue_1.default,
            Search: AppSearch_vue_1.default,
            infoCountries: index_js_1.infoCountries,
            indexCountry: indexCountry,
            infoPlace: infoPlace,
            capitalCoords: capitalCoords,
            isInput: isInput,
            showCountry: showCountry,
            getIdCountries: getIdCountries,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
