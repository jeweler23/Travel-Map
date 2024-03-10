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
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var props = defineProps({
    title: String,
    titleClass: Boolean,
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    {
        var __VLS_0_1 = __VLS_intrinsicElements["div"];
        var __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0_1);
        var __VLS_2_1 = __VLS_1.apply(void 0, __spreadArray([__assign({}, { class: (({ 'card_title': __VLS_ctx.titleClass, 'card_info': !__VLS_ctx.titleClass })) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
        ({}(__assign({}, { class: (({ 'card_title': __VLS_ctx.titleClass, 'card_info': !__VLS_ctx.titleClass })) })));
        __VLS_styleScopedClasses = ({ 'card_title': titleClass, 'card_info': !titleClass });
        {
            var __VLS_5_1 = __VLS_intrinsicElements["div"];
            var __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5_1);
            var __VLS_7_1 = __VLS_6.apply(void 0, __spreadArray([__assign({})], __VLS_functionalComponentArgsRest(__VLS_6), false));
            ({}(__assign({})));
            (__VLS_ctx.title);
            (__VLS_8.slots).default;
            var __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5_1, __VLS_7_1);
        }
        (__VLS_3.slots).default;
        var __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0_1, __VLS_2_1);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [titleClass, titleClass, titleClass, titleClass, title,];
    return __VLS_slots;
}
var __VLS_internalComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(props) }, props);
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(props) }, props);
    },
});
