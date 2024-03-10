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
var vue_1 = require("vue");
var leaflet_1 = require("leaflet");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var props = defineProps({
    capitalMarker: {
        type: [Array, null],
        required: true,
    },
    infoCountries: {
        type: [Object, null],
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
    isInput: Boolean,
});
var emit = defineEmits(["getCoordsCountries", "getDayliForecast"]);
var mapContainer = (0, vue_1.ref)(null);
var map, marker;
function mapLayout() {
    // Создаем карту
    map = leaflet_1.default.map(mapContainer.value).setView(Object.values(props.capitalMarker), 7);
    // Добавляем плитку OpenStreetMap
    leaflet_1.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
    }).addTo(map);
    // Добавляем маркер
    marker = leaflet_1.default.marker(JSON.parse(JSON.stringify(props.capitalMarker)))
        .addTo(map)
        .bindPopup("Moscow, Russia");
    map.on("click", getCoordsCountries);
}
function getCoordsCountries(e) {
    emit("getCoordsCountries", e.latlng);
}
(0, vue_1.onMounted)(mapLayout);
// onBeforeUpdate(() => {
//   L.map(mapContainer.value).setView(Object.values(props.capitalMarker), 7);
// });
(0, vue_1.onUpdated)(function () {
    if (marker) {
        map.removeLayer(marker);
    }
    marker = leaflet_1.default.marker(JSON.parse(JSON.stringify(props.capitalMarker)))
        .addTo(map)
        .bindPopup("".concat(props.infoCountries[props.index].capital[0], ", ").concat(props.infoCountries[props.index].name.common));
    if (props.isInput) {
        map.setView([props.capitalMarker[0], props.capitalMarker[1]], 7);
    }
});
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
    {
        var __VLS_0_1 = __VLS_intrinsicElements["div"];
        var __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0_1);
        var __VLS_2_1 = __VLS_1.apply(void 0, __spreadArray([__assign({}, { ref: ("mapContainer"), class: ("map") })], __VLS_functionalComponentArgsRest(__VLS_1), false));
        ({}(__assign({}, { ref: ("mapContainer"), class: ("map") })));
        // @ts-ignore
        (__VLS_ctx.mapContainer);
        var __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0_1, __VLS_2_1);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["map"];
    }
    var __VLS_slots;
    // @ts-ignore
    [mapContainer,];
    return __VLS_slots;
}
var __VLS_internalComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { $emit: emit, mapContainer: mapContainer });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { $emit: emit });
    },
});
