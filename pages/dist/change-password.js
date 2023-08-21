"use strict";
exports.__esModule = true;
var React = require("react");
var useMediaQuery_1 = require("@mui/material/useMediaQuery");
var yup_1 = require("@hookform/resolvers/yup");
var react_hook_form_1 = require("react-hook-form");
var styles_1 = require("@mui/material/styles");
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var style_sign_up_form_1 = require("@/feature/sign-up/style-sign-up-form");
var style_home_1 = require("../feature/style-home");
var common_validation_1 = require("@/feature/utils/validation/common-validation");
function ChangePasswordPage() {
    var theme = styles_1.useTheme();
    var isMobile = useMediaQuery_1["default"](theme.breakpoints.down('sm'));
    var ButtonSize = isMobile ? 'small' : 'large';
    var _a = React.useState(false), showPassword = _a[0], setShowPassword = _a[1];
    var handleClickShowPassword = function () { return setShowPassword(function (show) { return !show; }); };
    var _b = React.useState(false), showRepeatPassword = _b[0], setShowRepeatPassword = _b[1];
    var handleClickShowRepeatPassword = function () {
        return setShowRepeatPassword(function (show) { return !show; });
    };
    var handleMouseDownRepeatPassword = function (event) {
        event.preventDefault();
    };
    var handleMouseDownPassword = function (event) {
        event.preventDefault();
    };
    var _c = react_hook_form_1.useForm({
        mode: 'onChange',
        resolver: yup_1.yupResolver(common_validation_1.changePasswordSchema)
    }), handleSubmit = _c.handleSubmit, control = _c.control;
    var _d = react_hook_form_1.useFormState({
        control: control
    }), errors = _d.errors, isValid = _d.isValid;
    var onSubmit = function (data) {
        if (isValidForm(data)) {
            console.log(data);
        }
        else
            errors;
    };
    var isValidForm = function (data) {
        return common_validation_1.changePasswordSchema.isValidSync(data);
    };
    return (React.createElement(style_home_1.ChangePasswordBox, null,
        React.createElement(style_home_1.ChangePasswordFormBox, null,
            React.createElement(style_home_1.ChangePasswordHeading, null, "Change password"),
            React.createElement(material_1.Box, { component: "form", autoComplete: "off", onSubmit: handleSubmit(onSubmit) },
                React.createElement(react_hook_form_1.Controller, { control: control, name: "password", render: function (_a) {
                        var _b, _c;
                        var field = _a.field, fieldState = _a.fieldState;
                        var fieldValue = field.value, onChange = field.onChange;
                        return (React.createElement(style_home_1.InputChangePassword, { id: "change-form-password", fullWidth: true, variant: "outlined", error: !!((_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message), size: isMobile ? 'small' : 'medium' },
                            React.createElement(material_1.InputLabel, { htmlFor: "auth-form-password", id: "auth-form-password" }, "Password"),
                            React.createElement(material_1.OutlinedInput, { id: "change-form-password", label: "Password", type: showPassword ? 'text' : 'password', autoComplete: "current-password", value: fieldValue || '', onChange: onChange, endAdornment: React.createElement(material_1.InputAdornment, { position: "end" },
                                    React.createElement(material_1.IconButton, { "aria-label": "toggle password visibility", onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword, edge: "end" }, showPassword ? (React.createElement(icons_material_1.VisibilityOff, { fontSize: isMobile ? 'small' : 'medium' })) : (React.createElement(icons_material_1.Visibility, { fontSize: isMobile ? 'small' : 'medium' })))) }),
                            React.createElement(style_sign_up_form_1.PasswordHelperTextRestyled, { error: false }, "The password must be more than 8 characters and contain at least one capital letter, a special sign !@#$%^&* and a number"),
                            React.createElement(style_sign_up_form_1.PasswordHelperTextRestyled, null, (_c = fieldState.error) === null || _c === void 0 ? void 0 : _c.message)));
                    } }),
                React.createElement(react_hook_form_1.Controller, { control: control, name: "repeatPassword", render: function (_a) {
                        var _b, _c;
                        var field = _a.field, fieldState = _a.fieldState;
                        var fieldValue = field.value, onChange = field.onChange;
                        return (React.createElement(style_sign_up_form_1.InputPasswordRestyled, { fullWidth: true, variant: "outlined", error: !!((_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message), size: isMobile ? 'small' : 'medium' },
                            React.createElement(material_1.InputLabel, { htmlFor: "reg-form-repeat-password" }, "Repeat Password"),
                            React.createElement(material_1.OutlinedInput, { id: "change-form-repeat-password", label: "Repeat Password", type: showRepeatPassword ? 'text' : 'password', autoComplete: "current-repeat-password", value: fieldValue || '', onChange: onChange, endAdornment: React.createElement(material_1.InputAdornment, { position: "end" },
                                    React.createElement(material_1.IconButton, { "aria-label": "toggle password visibility", onClick: handleClickShowRepeatPassword, onMouseDown: handleMouseDownRepeatPassword, edge: "end" }, showRepeatPassword ? (React.createElement(icons_material_1.VisibilityOff, { fontSize: isMobile ? 'small' : 'medium' })) : (React.createElement(icons_material_1.Visibility, { fontSize: isMobile ? 'small' : 'medium' })))) }),
                            React.createElement(style_sign_up_form_1.PasswordHelperTextRestyled, null, (_c = fieldState.error) === null || _c === void 0 ? void 0 : _c.message)));
                    } }),
                React.createElement(style_sign_up_form_1.ButtonRestyled, { type: "submit", id: "change-password-form-button", variant: "contained", fullWidth: true, size: ButtonSize, href: "change-password-message" }, "change password")))));
}
exports["default"] = ChangePasswordPage;
