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
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var props = defineProps({
    infoCountries: {
        type: [Object, null],
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
    infoPlace: {
        type: Object,
        required: true,
    },
});
var nowDate = (0, vue_1.ref)(new Date());
var nowHours = (0, vue_1.ref)(null);
var nowSeconds = (0, vue_1.ref)(null);
var nowMinutes = (0, vue_1.ref)(null);
setInterval(function () {
    nowHours.value =
        props.infoPlace.timezone / 3600 + nowDate.value.getUTCHours();
    nowMinutes.value = nowDate.value.getMinutes();
    nowSeconds.value = nowDate.value.getSeconds();
    nowDate.value = new Date();
}, 1000);
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    {
        var __VLS_0_1 = __VLS_intrinsicElements["div"];
        var __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0_1);
        var __VLS_2_1 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onClick': {}, }, { class: ("card container") })], __VLS_functionalComponentArgsRest(__VLS_1), false));
        ({}(__assign({ 'onClick': {}, }, { class: ("card container") })));
        var __VLS_5 = { 'click': __VLS_pickEvent(__VLS_4['click'], {}.onClick) };
        __VLS_5 = { click: function ($event) {
                __VLS_ctx.$emit('showInfo', __VLS_ctx.showInfoCountry);
                // @ts-ignore
                [$emit, showInfoCountry,];
            }
        };
        {
            var __VLS_6_1 = __VLS_intrinsicElements["div"];
            var __VLS_7 = __VLS_elementAsFunctionalComponent(__VLS_6_1);
            var __VLS_8_1 = __VLS_7.apply(void 0, __spreadArray([__assign({}, { class: ("country-card") })], __VLS_functionalComponentArgsRest(__VLS_7), false));
            ({}(__assign({}, { class: ("country-card") })));
            {
                var __VLS_11_1 = __VLS_intrinsicElements["div"];
                var __VLS_12 = __VLS_elementAsFunctionalComponent(__VLS_11_1);
                var __VLS_13_1 = __VLS_12.apply(void 0, __spreadArray([__assign({}, { class: ("country-head") })], __VLS_functionalComponentArgsRest(__VLS_12), false));
                ({}(__assign({}, { class: ("country-head") })));
                {
                    var __VLS_16_1 = __VLS_intrinsicElements["div"];
                    var __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16_1);
                    var __VLS_18_1 = __VLS_17.apply(void 0, __spreadArray([__assign({}, { class: ("flag"), style: (("background-image: url(".concat(__VLS_ctx.infoCountries[__VLS_ctx.index].flags.png, ")"))) })], __VLS_functionalComponentArgsRest(__VLS_17), false));
                    ({}(__assign({}, { class: ("flag"), style: (("background-image: url(".concat(__VLS_ctx.infoCountries[__VLS_ctx.index].flags.png, ")"))) })));
                    var __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16_1, __VLS_18_1);
                }
                {
                    var __VLS_21_1 = __VLS_intrinsicElements["h2"];
                    var __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21_1);
                    var __VLS_23_1 = __VLS_22.apply(void 0, __spreadArray([__assign({}, { class: ("country-name"), style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_22), false));
                    ({}(__assign({}, { class: ("country-name"), style: ({}) })));
                    (__VLS_ctx.infoCountries[__VLS_ctx.index].name.common);
                    (__VLS_24.slots).default;
                    var __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21_1, __VLS_23_1);
                }
                (__VLS_14.slots).default;
                var __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11_1, __VLS_13_1);
            }
            {
                var __VLS_26_1 = __VLS_intrinsicElements["div"];
                var __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26_1);
                var __VLS_28_1 = __VLS_27.apply(void 0, __spreadArray([__assign({}, { class: ("country-description") })], __VLS_functionalComponentArgsRest(__VLS_27), false));
                ({}(__assign({}, { class: ("country-description") })));
                {
                    var __VLS_31_1 = __VLS_intrinsicElements["h2"];
                    var __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31_1);
                    var __VLS_33_1 = __VLS_32.apply(void 0, __spreadArray([__assign({}, { class: ("info-about-place") })], __VLS_functionalComponentArgsRest(__VLS_32), false));
                    ({}(__assign({}, { class: ("info-about-place") })));
                    {
                        var __VLS_36_1 = __VLS_intrinsicElements["img"];
                        var __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36_1);
                        var __VLS_38_1 = __VLS_37.apply(void 0, __spreadArray([__assign({}, { src: ("../assets/image/architecture-and-city.png"), alt: (""), style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_37), false));
                        ({}(__assign({}, { src: ("../assets/image/architecture-and-city.png"), alt: (""), style: ({}) })));
                        var __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36_1, __VLS_38_1);
                    }
                    (__VLS_ctx.infoCountries[__VLS_ctx.index].capital[0]);
                    (__VLS_34.slots).default;
                    var __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31_1, __VLS_33_1);
                }
                if (__VLS_ctx.infoPlace) {
                    {
                        var __VLS_41_1 = __VLS_intrinsicElements["h3"];
                        var __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41_1);
                        var __VLS_43_1 = __VLS_42.apply(void 0, __spreadArray([__assign({}, { style: ({}), class: ("info-about-place") })], __VLS_functionalComponentArgsRest(__VLS_42), false));
                        ({}(__assign({}, { style: ({}), class: ("info-about-place") })));
                        {
                            var __VLS_46_1 = __VLS_intrinsicElements["img"];
                            var __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46_1);
                            var __VLS_48_1 = __VLS_47.apply(void 0, __spreadArray([__assign({}, { src: ("../assets/image/empire-state-building.png"), alt: (""), style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_47), false));
                            ({}(__assign({}, { src: ("../assets/image/empire-state-building.png"), alt: (""), style: ({}) })));
                            var __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46_1, __VLS_48_1);
                        }
                        (__VLS_ctx.infoPlace.region);
                        (__VLS_44.slots).default;
                        var __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41_1, __VLS_43_1);
                    }
                    // @ts-ignore
                    [infoCountries, index, infoCountries, index, infoCountries, index, infoCountries, index, infoPlace, infoPlace,];
                }
                if (__VLS_ctx.infoPlace) {
                    {
                        var __VLS_51_1 = __VLS_intrinsicElements["p"];
                        var __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51_1);
                        var __VLS_53_1 = __VLS_52.apply(void 0, __spreadArray([__assign({}, { style: ({}), class: ("info-about-place") })], __VLS_functionalComponentArgsRest(__VLS_52), false));
                        ({}(__assign({}, { style: ({}), class: ("info-about-place") })));
                        {
                            var __VLS_56_1 = __VLS_intrinsicElements["img"];
                            var __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56_1);
                            var __VLS_58_1 = __VLS_57.apply(void 0, __spreadArray([__assign({}, { src: ("../assets/image/location (1).png"), alt: (""), style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_57), false));
                            ({}(__assign({}, { src: ("../assets/image/location (1).png"), alt: (""), style: ({}) })));
                            var __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56_1, __VLS_58_1);
                        }
                        (__VLS_ctx.infoPlace.name);
                        (__VLS_54.slots).default;
                        var __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51_1, __VLS_53_1);
                    }
                    // @ts-ignore
                    [infoPlace, infoPlace,];
                }
                if (__VLS_ctx.infoPlace) {
                    {
                        var __VLS_61_1 = __VLS_intrinsicElements["p"];
                        var __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61_1);
                        var __VLS_63_1 = __VLS_62.apply(void 0, __spreadArray([__assign({}, { style: ({}), class: ("info-about-place") })], __VLS_functionalComponentArgsRest(__VLS_62), false));
                        ({}(__assign({}, { style: ({}), class: ("info-about-place") })));
                        {
                            var __VLS_66_1 = __VLS_intrinsicElements["img"];
                            var __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66_1);
                            var __VLS_68_1 = __VLS_67.apply(void 0, __spreadArray([__assign({}, { src: ("../assets/image/weather-forecast.png"), alt: (""), style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_67), false));
                            ({}(__assign({}, { src: ("../assets/image/weather-forecast.png"), alt: (""), style: ({}) })));
                            var __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66_1, __VLS_68_1);
                        }
                        (__VLS_ctx.infoPlace.temperature);
                        (__VLS_64.slots).default;
                        var __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61_1, __VLS_63_1);
                    }
                    // @ts-ignore
                    [infoPlace, infoPlace,];
                }
                {
                    var __VLS_71_1 = __VLS_intrinsicElements["span"];
                    var __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71_1);
                    var __VLS_73_1 = __VLS_72.apply(void 0, __spreadArray([__assign({}, { class: ("info-about-place") })], __VLS_functionalComponentArgsRest(__VLS_72), false));
                    ({}(__assign({}, { class: ("info-about-place") })));
                    {
                        var __VLS_76_1 = __VLS_intrinsicElements["img"];
                        var __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76_1);
                        var __VLS_78_1 = __VLS_77.apply(void 0, __spreadArray([__assign({}, { src: ("../assets/image/clock (1).png"), alt: (""), style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_77), false));
                        ({}(__assign({}, { src: ("../assets/image/clock (1).png"), alt: (""), style: ({}) })));
                        var __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76_1, __VLS_78_1);
                    }
                    (__VLS_ctx.nowHours);
                    (__VLS_ctx.nowMinutes);
                    (__VLS_ctx.nowSeconds);
                    (__VLS_74.slots).default;
                    var __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71_1, __VLS_73_1);
                }
                (__VLS_29.slots).default;
                var __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26_1, __VLS_28_1);
            }
            (__VLS_9.slots).default;
            var __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_6_1, __VLS_8_1);
        }
        (__VLS_3.slots).default;
        var __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0_1, __VLS_2_1);
        var __VLS_4 = void 0;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["card"];
        __VLS_styleScopedClasses["container"];
        __VLS_styleScopedClasses["country-card"];
        __VLS_styleScopedClasses["country-head"];
        __VLS_styleScopedClasses["flag"];
        __VLS_styleScopedClasses["country-name"];
        __VLS_styleScopedClasses["country-description"];
        __VLS_styleScopedClasses["info-about-place"];
        __VLS_styleScopedClasses["info-about-place"];
        __VLS_styleScopedClasses["info-about-place"];
        __VLS_styleScopedClasses["info-about-place"];
        __VLS_styleScopedClasses["info-about-place"];
    }
    var __VLS_slots;
    // @ts-ignore
    [nowHours, nowMinutes, nowSeconds,];
    return __VLS_slots;
}
var __VLS_internalComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { nowHours: nowHours, nowSeconds: nowSeconds, nowMinutes: nowMinutes });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(props) }, props);
    },
});
