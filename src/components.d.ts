/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CheckBox {
        "name": string;
    }
    interface ChipsList {
        "removeSearchChip": any;
        "removeSortChip": any;
        "searchChips": {};
        "sortchips": {};
        "togglesort": any;
    }
    interface CodeEditor {
        "doc": any;
        "url": string;
    }
    interface CodeEditorUpdated {
        "onClickRun": Function;
    }
    interface CustomTable {
        "clearSearch": any;
        "currentPage": number;
        "dataLength": string;
        "isLoading": boolean;
        "isLoadingError": boolean;
        "limit": number;
        "next": any;
        "prev": any;
        "rows": number[];
        "rowsHandler": any;
        "searchMethod": any;
        "tableBody": object[];
        "tableHeader": object[];
        "toggleSortMethod": any;
    }
    interface DataTable {
        "doc": object[];
    }
    interface DataTableUpdated {
        "doc": object[];
    }
    interface DialogComponent {
        "url": string;
    }
    interface DropDown {
        "alias": string;
        "clearSearch": any;
        "searchMethod": any;
    }
    interface EditUser {
        "ismodelopen": boolean;
        "submiturl": string;
        "toggle": () => void;
        "url": string;
        "userid": number;
        "value": string;
    }
    interface EditorPage {
        "url": string;
    }
    interface EditorRes {
        "headerList": any;
    }
    interface EditorResUpdated {
    }
    interface FluidContainer {
    }
    interface IconButton {
        "addClass": string;
        "btnLabel": string;
        "iconPosition": 'right' | 'left';
        "type": 'outlined' | 'contained';
    }
    interface InviteComponent {
        "apiurl": string;
        "email": string;
        "url": string;
    }
    interface LoaderComponent {
    }
    interface MainComponent {
    }
    interface MenuDown {
        "email": string;
        "option": string[];
        "submiturl": string;
        "url": string;
        "userId": number;
    }
    interface MenuDropDown {
        "fetchData": any;
        "list": string[];
        "listTitle": string;
    }
    interface MenuItems {
    }
    interface MultiSelect {
        "handleselect": any;
        "items": string[];
        "roles": any;
        "submiturl": string;
        "toggle": () => void;
        "url": string;
        "userid": number;
        "value": string;
    }
    interface MultiSelectt {
        "roles": string[];
        "selected": string[];
    }
    interface NavBar {
    }
    interface NodeItem {
    }
    interface PermissionEditor {
        "fetchrole": string;
        "url": string;
    }
    interface PlainButton {
        "addClass": string;
        "clickHandler": any;
        "color": string;
        "disabledHandler": boolean;
        "hoverColor": string;
        "type": 'contained' | 'outlined' | 'text';
        "width": 'full' | 'auto';
    }
    interface QueryLogs {
    }
    interface RadioButton {
        "align": 'vertical' | 'horizontal';
        "name": string;
    }
    interface RadioButtonMultiple {
        "align": 'vertical' | 'horizontal';
        "checked": string;
        "clickHandler": any;
        "labels": string[];
        "name": string;
    }
    interface ResEditor {
        "doc": any;
        "responseLabel": 'result' | 'error';
    }
    interface SettingsNavigator {
        "navigators": any;
    }
    interface SideBar {
    }
    interface TabComponent {
        "doc": any;
        "responseLabel": any;
    }
    interface TabComponentUpdated {
        "doc": any;
        "responseLabel": any;
    }
    interface TableSearchModal {
        "alias": string;
        "clearSearch": any;
        "icon": any;
        "refresh": any;
        "searchMethod": any;
        "type": string;
        "url": string;
    }
    interface TableWrapper {
        "api": any;
        "autocompute": boolean;
        "headerList": object[];
        "rowPerPage": number[];
    }
    interface TableWrapperUpdated {
        "api": any;
        "autocompute": boolean;
        "data": object[];
        "headerList": object[];
        "rowPerPage": number[];
    }
    interface TabsComponent {
        "activeIndex": number;
        "tabClickHandler": any;
        "tabslist": { name: string; className: string }[];
    }
    interface TextField {
        "addClass": string;
        "eye": boolean;
        "name": string;
        "onChange": any;
        "onClick": any;
        "placeholder": string;
        "type": 'email' | 'password' | 'text' | 'search';
    }
    interface TextFieldArea {
        "addClass": string;
        "width": 'full' | 'auto';
    }
    interface UsersComponent {
        "submiturl": string;
        "url": string;
        "users": any;
    }
}
declare global {
    interface HTMLCheckBoxElement extends Components.CheckBox, HTMLStencilElement {
    }
    var HTMLCheckBoxElement: {
        prototype: HTMLCheckBoxElement;
        new (): HTMLCheckBoxElement;
    };
    interface HTMLChipsListElement extends Components.ChipsList, HTMLStencilElement {
    }
    var HTMLChipsListElement: {
        prototype: HTMLChipsListElement;
        new (): HTMLChipsListElement;
    };
    interface HTMLCodeEditorElement extends Components.CodeEditor, HTMLStencilElement {
    }
    var HTMLCodeEditorElement: {
        prototype: HTMLCodeEditorElement;
        new (): HTMLCodeEditorElement;
    };
    interface HTMLCodeEditorUpdatedElement extends Components.CodeEditorUpdated, HTMLStencilElement {
    }
    var HTMLCodeEditorUpdatedElement: {
        prototype: HTMLCodeEditorUpdatedElement;
        new (): HTMLCodeEditorUpdatedElement;
    };
    interface HTMLCustomTableElement extends Components.CustomTable, HTMLStencilElement {
    }
    var HTMLCustomTableElement: {
        prototype: HTMLCustomTableElement;
        new (): HTMLCustomTableElement;
    };
    interface HTMLDataTableElement extends Components.DataTable, HTMLStencilElement {
    }
    var HTMLDataTableElement: {
        prototype: HTMLDataTableElement;
        new (): HTMLDataTableElement;
    };
    interface HTMLDataTableUpdatedElement extends Components.DataTableUpdated, HTMLStencilElement {
    }
    var HTMLDataTableUpdatedElement: {
        prototype: HTMLDataTableUpdatedElement;
        new (): HTMLDataTableUpdatedElement;
    };
    interface HTMLDialogComponentElement extends Components.DialogComponent, HTMLStencilElement {
    }
    var HTMLDialogComponentElement: {
        prototype: HTMLDialogComponentElement;
        new (): HTMLDialogComponentElement;
    };
    interface HTMLDropDownElement extends Components.DropDown, HTMLStencilElement {
    }
    var HTMLDropDownElement: {
        prototype: HTMLDropDownElement;
        new (): HTMLDropDownElement;
    };
    interface HTMLEditUserElement extends Components.EditUser, HTMLStencilElement {
    }
    var HTMLEditUserElement: {
        prototype: HTMLEditUserElement;
        new (): HTMLEditUserElement;
    };
    interface HTMLEditorPageElement extends Components.EditorPage, HTMLStencilElement {
    }
    var HTMLEditorPageElement: {
        prototype: HTMLEditorPageElement;
        new (): HTMLEditorPageElement;
    };
    interface HTMLEditorResElement extends Components.EditorRes, HTMLStencilElement {
    }
    var HTMLEditorResElement: {
        prototype: HTMLEditorResElement;
        new (): HTMLEditorResElement;
    };
    interface HTMLEditorResUpdatedElement extends Components.EditorResUpdated, HTMLStencilElement {
    }
    var HTMLEditorResUpdatedElement: {
        prototype: HTMLEditorResUpdatedElement;
        new (): HTMLEditorResUpdatedElement;
    };
    interface HTMLFluidContainerElement extends Components.FluidContainer, HTMLStencilElement {
    }
    var HTMLFluidContainerElement: {
        prototype: HTMLFluidContainerElement;
        new (): HTMLFluidContainerElement;
    };
    interface HTMLIconButtonElement extends Components.IconButton, HTMLStencilElement {
    }
    var HTMLIconButtonElement: {
        prototype: HTMLIconButtonElement;
        new (): HTMLIconButtonElement;
    };
    interface HTMLInviteComponentElement extends Components.InviteComponent, HTMLStencilElement {
    }
    var HTMLInviteComponentElement: {
        prototype: HTMLInviteComponentElement;
        new (): HTMLInviteComponentElement;
    };
    interface HTMLLoaderComponentElement extends Components.LoaderComponent, HTMLStencilElement {
    }
    var HTMLLoaderComponentElement: {
        prototype: HTMLLoaderComponentElement;
        new (): HTMLLoaderComponentElement;
    };
    interface HTMLMainComponentElement extends Components.MainComponent, HTMLStencilElement {
    }
    var HTMLMainComponentElement: {
        prototype: HTMLMainComponentElement;
        new (): HTMLMainComponentElement;
    };
    interface HTMLMenuDownElement extends Components.MenuDown, HTMLStencilElement {
    }
    var HTMLMenuDownElement: {
        prototype: HTMLMenuDownElement;
        new (): HTMLMenuDownElement;
    };
    interface HTMLMenuDropDownElement extends Components.MenuDropDown, HTMLStencilElement {
    }
    var HTMLMenuDropDownElement: {
        prototype: HTMLMenuDropDownElement;
        new (): HTMLMenuDropDownElement;
    };
    interface HTMLMenuItemsElement extends Components.MenuItems, HTMLStencilElement {
    }
    var HTMLMenuItemsElement: {
        prototype: HTMLMenuItemsElement;
        new (): HTMLMenuItemsElement;
    };
    interface HTMLMultiSelectElement extends Components.MultiSelect, HTMLStencilElement {
    }
    var HTMLMultiSelectElement: {
        prototype: HTMLMultiSelectElement;
        new (): HTMLMultiSelectElement;
    };
    interface HTMLMultiSelecttElement extends Components.MultiSelectt, HTMLStencilElement {
    }
    var HTMLMultiSelecttElement: {
        prototype: HTMLMultiSelecttElement;
        new (): HTMLMultiSelecttElement;
    };
    interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {
    }
    var HTMLNavBarElement: {
        prototype: HTMLNavBarElement;
        new (): HTMLNavBarElement;
    };
    interface HTMLNodeItemElement extends Components.NodeItem, HTMLStencilElement {
    }
    var HTMLNodeItemElement: {
        prototype: HTMLNodeItemElement;
        new (): HTMLNodeItemElement;
    };
    interface HTMLPermissionEditorElement extends Components.PermissionEditor, HTMLStencilElement {
    }
    var HTMLPermissionEditorElement: {
        prototype: HTMLPermissionEditorElement;
        new (): HTMLPermissionEditorElement;
    };
    interface HTMLPlainButtonElement extends Components.PlainButton, HTMLStencilElement {
    }
    var HTMLPlainButtonElement: {
        prototype: HTMLPlainButtonElement;
        new (): HTMLPlainButtonElement;
    };
    interface HTMLQueryLogsElement extends Components.QueryLogs, HTMLStencilElement {
    }
    var HTMLQueryLogsElement: {
        prototype: HTMLQueryLogsElement;
        new (): HTMLQueryLogsElement;
    };
    interface HTMLRadioButtonElement extends Components.RadioButton, HTMLStencilElement {
    }
    var HTMLRadioButtonElement: {
        prototype: HTMLRadioButtonElement;
        new (): HTMLRadioButtonElement;
    };
    interface HTMLRadioButtonMultipleElement extends Components.RadioButtonMultiple, HTMLStencilElement {
    }
    var HTMLRadioButtonMultipleElement: {
        prototype: HTMLRadioButtonMultipleElement;
        new (): HTMLRadioButtonMultipleElement;
    };
    interface HTMLResEditorElement extends Components.ResEditor, HTMLStencilElement {
    }
    var HTMLResEditorElement: {
        prototype: HTMLResEditorElement;
        new (): HTMLResEditorElement;
    };
    interface HTMLSettingsNavigatorElement extends Components.SettingsNavigator, HTMLStencilElement {
    }
    var HTMLSettingsNavigatorElement: {
        prototype: HTMLSettingsNavigatorElement;
        new (): HTMLSettingsNavigatorElement;
    };
    interface HTMLSideBarElement extends Components.SideBar, HTMLStencilElement {
    }
    var HTMLSideBarElement: {
        prototype: HTMLSideBarElement;
        new (): HTMLSideBarElement;
    };
    interface HTMLTabComponentElement extends Components.TabComponent, HTMLStencilElement {
    }
    var HTMLTabComponentElement: {
        prototype: HTMLTabComponentElement;
        new (): HTMLTabComponentElement;
    };
    interface HTMLTabComponentUpdatedElement extends Components.TabComponentUpdated, HTMLStencilElement {
    }
    var HTMLTabComponentUpdatedElement: {
        prototype: HTMLTabComponentUpdatedElement;
        new (): HTMLTabComponentUpdatedElement;
    };
    interface HTMLTableSearchModalElement extends Components.TableSearchModal, HTMLStencilElement {
    }
    var HTMLTableSearchModalElement: {
        prototype: HTMLTableSearchModalElement;
        new (): HTMLTableSearchModalElement;
    };
    interface HTMLTableWrapperElement extends Components.TableWrapper, HTMLStencilElement {
    }
    var HTMLTableWrapperElement: {
        prototype: HTMLTableWrapperElement;
        new (): HTMLTableWrapperElement;
    };
    interface HTMLTableWrapperUpdatedElement extends Components.TableWrapperUpdated, HTMLStencilElement {
    }
    var HTMLTableWrapperUpdatedElement: {
        prototype: HTMLTableWrapperUpdatedElement;
        new (): HTMLTableWrapperUpdatedElement;
    };
    interface HTMLTabsComponentElement extends Components.TabsComponent, HTMLStencilElement {
    }
    var HTMLTabsComponentElement: {
        prototype: HTMLTabsComponentElement;
        new (): HTMLTabsComponentElement;
    };
    interface HTMLTextFieldElement extends Components.TextField, HTMLStencilElement {
    }
    var HTMLTextFieldElement: {
        prototype: HTMLTextFieldElement;
        new (): HTMLTextFieldElement;
    };
    interface HTMLTextFieldAreaElement extends Components.TextFieldArea, HTMLStencilElement {
    }
    var HTMLTextFieldAreaElement: {
        prototype: HTMLTextFieldAreaElement;
        new (): HTMLTextFieldAreaElement;
    };
    interface HTMLUsersComponentElement extends Components.UsersComponent, HTMLStencilElement {
    }
    var HTMLUsersComponentElement: {
        prototype: HTMLUsersComponentElement;
        new (): HTMLUsersComponentElement;
    };
    interface HTMLElementTagNameMap {
        "check-box": HTMLCheckBoxElement;
        "chips-list": HTMLChipsListElement;
        "code-editor": HTMLCodeEditorElement;
        "code-editor-updated": HTMLCodeEditorUpdatedElement;
        "custom-table": HTMLCustomTableElement;
        "data-table": HTMLDataTableElement;
        "data-table-updated": HTMLDataTableUpdatedElement;
        "dialog-component": HTMLDialogComponentElement;
        "drop-down": HTMLDropDownElement;
        "edit-user": HTMLEditUserElement;
        "editor-page": HTMLEditorPageElement;
        "editor-res": HTMLEditorResElement;
        "editor-res-updated": HTMLEditorResUpdatedElement;
        "fluid-container": HTMLFluidContainerElement;
        "icon-button": HTMLIconButtonElement;
        "invite-component": HTMLInviteComponentElement;
        "loader-component": HTMLLoaderComponentElement;
        "main-component": HTMLMainComponentElement;
        "menu-down": HTMLMenuDownElement;
        "menu-drop-down": HTMLMenuDropDownElement;
        "menu-items": HTMLMenuItemsElement;
        "multi-select": HTMLMultiSelectElement;
        "multi-selectt": HTMLMultiSelecttElement;
        "nav-bar": HTMLNavBarElement;
        "node-item": HTMLNodeItemElement;
        "permission-editor": HTMLPermissionEditorElement;
        "plain-button": HTMLPlainButtonElement;
        "query-logs": HTMLQueryLogsElement;
        "radio-button": HTMLRadioButtonElement;
        "radio-button-multiple": HTMLRadioButtonMultipleElement;
        "res-editor": HTMLResEditorElement;
        "settings-navigator": HTMLSettingsNavigatorElement;
        "side-bar": HTMLSideBarElement;
        "tab-component": HTMLTabComponentElement;
        "tab-component-updated": HTMLTabComponentUpdatedElement;
        "table-search-modal": HTMLTableSearchModalElement;
        "table-wrapper": HTMLTableWrapperElement;
        "table-wrapper-updated": HTMLTableWrapperUpdatedElement;
        "tabs-component": HTMLTabsComponentElement;
        "text-field": HTMLTextFieldElement;
        "text-field-area": HTMLTextFieldAreaElement;
        "users-component": HTMLUsersComponentElement;
    }
}
declare namespace LocalJSX {
    interface CheckBox {
        "name"?: string;
    }
    interface ChipsList {
        "removeSearchChip"?: any;
        "removeSortChip"?: any;
        "searchChips"?: {};
        "sortchips"?: {};
        "togglesort"?: any;
    }
    interface CodeEditor {
        "doc"?: any;
        "url"?: string;
    }
    interface CodeEditorUpdated {
        "onClickRun"?: Function;
    }
    interface CustomTable {
        "clearSearch"?: any;
        "currentPage"?: number;
        "dataLength"?: string;
        "isLoading"?: boolean;
        "isLoadingError"?: boolean;
        "limit"?: number;
        "next"?: any;
        "prev"?: any;
        "rows"?: number[];
        "rowsHandler"?: any;
        "searchMethod"?: any;
        "tableBody"?: object[];
        "tableHeader"?: object[];
        "toggleSortMethod"?: any;
    }
    interface DataTable {
        "doc"?: object[];
    }
    interface DataTableUpdated {
        "doc"?: object[];
    }
    interface DialogComponent {
        "url"?: string;
    }
    interface DropDown {
        "alias"?: string;
        "clearSearch"?: any;
        "searchMethod"?: any;
    }
    interface EditUser {
        "ismodelopen"?: boolean;
        "submiturl"?: string;
        "toggle"?: () => void;
        "url"?: string;
        "userid"?: number;
        "value"?: string;
    }
    interface EditorPage {
        "url"?: string;
    }
    interface EditorRes {
        "headerList"?: any;
    }
    interface EditorResUpdated {
    }
    interface FluidContainer {
    }
    interface IconButton {
        "addClass"?: string;
        "btnLabel"?: string;
        "iconPosition"?: 'right' | 'left';
        "type"?: 'outlined' | 'contained';
    }
    interface InviteComponent {
        "apiurl"?: string;
        "email"?: string;
        "url"?: string;
    }
    interface LoaderComponent {
    }
    interface MainComponent {
    }
    interface MenuDown {
        "email"?: string;
        "option"?: string[];
        "submiturl"?: string;
        "url"?: string;
        "userId"?: number;
    }
    interface MenuDropDown {
        "fetchData"?: any;
        "list"?: string[];
        "listTitle"?: string;
    }
    interface MenuItems {
    }
    interface MultiSelect {
        "handleselect"?: any;
        "items"?: string[];
        "roles"?: any;
        "submiturl"?: string;
        "toggle"?: () => void;
        "url"?: string;
        "userid"?: number;
        "value"?: string;
    }
    interface MultiSelectt {
        "roles"?: string[];
        "selected"?: string[];
    }
    interface NavBar {
    }
    interface NodeItem {
    }
    interface PermissionEditor {
        "fetchrole"?: string;
        "url"?: string;
    }
    interface PlainButton {
        "addClass"?: string;
        "clickHandler"?: any;
        "color"?: string;
        "disabledHandler"?: boolean;
        "hoverColor"?: string;
        "type"?: 'contained' | 'outlined' | 'text';
        "width"?: 'full' | 'auto';
    }
    interface QueryLogs {
    }
    interface RadioButton {
        "align"?: 'vertical' | 'horizontal';
        "name"?: string;
    }
    interface RadioButtonMultiple {
        "align"?: 'vertical' | 'horizontal';
        "checked"?: string;
        "clickHandler"?: any;
        "labels"?: string[];
        "name"?: string;
    }
    interface ResEditor {
        "doc"?: any;
        "responseLabel"?: 'result' | 'error';
    }
    interface SettingsNavigator {
        "navigators"?: any;
    }
    interface SideBar {
    }
    interface TabComponent {
        "doc"?: any;
        "responseLabel"?: any;
    }
    interface TabComponentUpdated {
        "doc"?: any;
        "responseLabel"?: any;
    }
    interface TableSearchModal {
        "alias"?: string;
        "clearSearch"?: any;
        "icon"?: any;
        "refresh"?: any;
        "searchMethod"?: any;
        "type"?: string;
        "url"?: string;
    }
    interface TableWrapper {
        "api"?: any;
        "autocompute"?: boolean;
        "headerList"?: object[];
        "rowPerPage"?: number[];
    }
    interface TableWrapperUpdated {
        "api"?: any;
        "autocompute"?: boolean;
        "data"?: object[];
        "headerList"?: object[];
        "rowPerPage"?: number[];
    }
    interface TabsComponent {
        "activeIndex"?: number;
        "tabClickHandler"?: any;
        "tabslist"?: { name: string; className: string }[];
    }
    interface TextField {
        "addClass"?: string;
        "eye"?: boolean;
        "name"?: string;
        "onChange"?: any;
        "onClick"?: any;
        "placeholder"?: string;
        "type"?: 'email' | 'password' | 'text' | 'search';
    }
    interface TextFieldArea {
        "addClass"?: string;
        "width"?: 'full' | 'auto';
    }
    interface UsersComponent {
        "submiturl"?: string;
        "url"?: string;
        "users"?: any;
    }
    interface IntrinsicElements {
        "check-box": CheckBox;
        "chips-list": ChipsList;
        "code-editor": CodeEditor;
        "code-editor-updated": CodeEditorUpdated;
        "custom-table": CustomTable;
        "data-table": DataTable;
        "data-table-updated": DataTableUpdated;
        "dialog-component": DialogComponent;
        "drop-down": DropDown;
        "edit-user": EditUser;
        "editor-page": EditorPage;
        "editor-res": EditorRes;
        "editor-res-updated": EditorResUpdated;
        "fluid-container": FluidContainer;
        "icon-button": IconButton;
        "invite-component": InviteComponent;
        "loader-component": LoaderComponent;
        "main-component": MainComponent;
        "menu-down": MenuDown;
        "menu-drop-down": MenuDropDown;
        "menu-items": MenuItems;
        "multi-select": MultiSelect;
        "multi-selectt": MultiSelectt;
        "nav-bar": NavBar;
        "node-item": NodeItem;
        "permission-editor": PermissionEditor;
        "plain-button": PlainButton;
        "query-logs": QueryLogs;
        "radio-button": RadioButton;
        "radio-button-multiple": RadioButtonMultiple;
        "res-editor": ResEditor;
        "settings-navigator": SettingsNavigator;
        "side-bar": SideBar;
        "tab-component": TabComponent;
        "tab-component-updated": TabComponentUpdated;
        "table-search-modal": TableSearchModal;
        "table-wrapper": TableWrapper;
        "table-wrapper-updated": TableWrapperUpdated;
        "tabs-component": TabsComponent;
        "text-field": TextField;
        "text-field-area": TextFieldArea;
        "users-component": UsersComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "check-box": LocalJSX.CheckBox & JSXBase.HTMLAttributes<HTMLCheckBoxElement>;
            "chips-list": LocalJSX.ChipsList & JSXBase.HTMLAttributes<HTMLChipsListElement>;
            "code-editor": LocalJSX.CodeEditor & JSXBase.HTMLAttributes<HTMLCodeEditorElement>;
            "code-editor-updated": LocalJSX.CodeEditorUpdated & JSXBase.HTMLAttributes<HTMLCodeEditorUpdatedElement>;
            "custom-table": LocalJSX.CustomTable & JSXBase.HTMLAttributes<HTMLCustomTableElement>;
            "data-table": LocalJSX.DataTable & JSXBase.HTMLAttributes<HTMLDataTableElement>;
            "data-table-updated": LocalJSX.DataTableUpdated & JSXBase.HTMLAttributes<HTMLDataTableUpdatedElement>;
            "dialog-component": LocalJSX.DialogComponent & JSXBase.HTMLAttributes<HTMLDialogComponentElement>;
            "drop-down": LocalJSX.DropDown & JSXBase.HTMLAttributes<HTMLDropDownElement>;
            "edit-user": LocalJSX.EditUser & JSXBase.HTMLAttributes<HTMLEditUserElement>;
            "editor-page": LocalJSX.EditorPage & JSXBase.HTMLAttributes<HTMLEditorPageElement>;
            "editor-res": LocalJSX.EditorRes & JSXBase.HTMLAttributes<HTMLEditorResElement>;
            "editor-res-updated": LocalJSX.EditorResUpdated & JSXBase.HTMLAttributes<HTMLEditorResUpdatedElement>;
            "fluid-container": LocalJSX.FluidContainer & JSXBase.HTMLAttributes<HTMLFluidContainerElement>;
            "icon-button": LocalJSX.IconButton & JSXBase.HTMLAttributes<HTMLIconButtonElement>;
            "invite-component": LocalJSX.InviteComponent & JSXBase.HTMLAttributes<HTMLInviteComponentElement>;
            "loader-component": LocalJSX.LoaderComponent & JSXBase.HTMLAttributes<HTMLLoaderComponentElement>;
            "main-component": LocalJSX.MainComponent & JSXBase.HTMLAttributes<HTMLMainComponentElement>;
            "menu-down": LocalJSX.MenuDown & JSXBase.HTMLAttributes<HTMLMenuDownElement>;
            "menu-drop-down": LocalJSX.MenuDropDown & JSXBase.HTMLAttributes<HTMLMenuDropDownElement>;
            "menu-items": LocalJSX.MenuItems & JSXBase.HTMLAttributes<HTMLMenuItemsElement>;
            "multi-select": LocalJSX.MultiSelect & JSXBase.HTMLAttributes<HTMLMultiSelectElement>;
            "multi-selectt": LocalJSX.MultiSelectt & JSXBase.HTMLAttributes<HTMLMultiSelecttElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
            "node-item": LocalJSX.NodeItem & JSXBase.HTMLAttributes<HTMLNodeItemElement>;
            "permission-editor": LocalJSX.PermissionEditor & JSXBase.HTMLAttributes<HTMLPermissionEditorElement>;
            "plain-button": LocalJSX.PlainButton & JSXBase.HTMLAttributes<HTMLPlainButtonElement>;
            "query-logs": LocalJSX.QueryLogs & JSXBase.HTMLAttributes<HTMLQueryLogsElement>;
            "radio-button": LocalJSX.RadioButton & JSXBase.HTMLAttributes<HTMLRadioButtonElement>;
            "radio-button-multiple": LocalJSX.RadioButtonMultiple & JSXBase.HTMLAttributes<HTMLRadioButtonMultipleElement>;
            "res-editor": LocalJSX.ResEditor & JSXBase.HTMLAttributes<HTMLResEditorElement>;
            "settings-navigator": LocalJSX.SettingsNavigator & JSXBase.HTMLAttributes<HTMLSettingsNavigatorElement>;
            "side-bar": LocalJSX.SideBar & JSXBase.HTMLAttributes<HTMLSideBarElement>;
            "tab-component": LocalJSX.TabComponent & JSXBase.HTMLAttributes<HTMLTabComponentElement>;
            "tab-component-updated": LocalJSX.TabComponentUpdated & JSXBase.HTMLAttributes<HTMLTabComponentUpdatedElement>;
            "table-search-modal": LocalJSX.TableSearchModal & JSXBase.HTMLAttributes<HTMLTableSearchModalElement>;
            "table-wrapper": LocalJSX.TableWrapper & JSXBase.HTMLAttributes<HTMLTableWrapperElement>;
            "table-wrapper-updated": LocalJSX.TableWrapperUpdated & JSXBase.HTMLAttributes<HTMLTableWrapperUpdatedElement>;
            "tabs-component": LocalJSX.TabsComponent & JSXBase.HTMLAttributes<HTMLTabsComponentElement>;
            "text-field": LocalJSX.TextField & JSXBase.HTMLAttributes<HTMLTextFieldElement>;
            "text-field-area": LocalJSX.TextFieldArea & JSXBase.HTMLAttributes<HTMLTextFieldAreaElement>;
            "users-component": LocalJSX.UsersComponent & JSXBase.HTMLAttributes<HTMLUsersComponentElement>;
        }
    }
}
