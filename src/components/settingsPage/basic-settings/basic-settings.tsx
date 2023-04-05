import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'basic-settings',
  styleUrl: 'basic-settings.css',
  scoped: true,
})
export class BasicSettings {
  @State() darkMode: boolean = false;
  @State() isEditorAccordianOpen: boolean = false;
  @State() isOtherAccordianOpen: boolean = false;
  @State() accordianState: Object = {
    isEditorAccordianOpen: {
      name: 'Editor',
      currentState: false,
    },
    isOtherAccordianOpen: {
      name: 'Others',
      currentState: false,
    },
  };

  @State() editorSettingsState: Object = {
    themesArray: {
      label: 'Editor Theme',
      type: 'dropDown',
      dropDownOpen: false,
      currentState: localStorage.getItem('themesArray') || 'light',
      options: ['light', 'dark'],
      // options: [
      //   '3024-night',
      //   'abcdef',
      //   'ambiance',
      //   'base16-dark',
      //   'bespin',
      //   'blackboard',
      //   'cobalt',
      //   'colorforth',
      //   'dracula',
      //   'erlang-dark',
      //   'hopscotch',
      //   'icecoder',
      //   'isotope',
      //   'lesser-dark',
      //   'liquibyte',
      //   'material',
      //   'mbo',
      //   'mdn-like',
      //   'monokai',
      // ],
    },
    isLineNumberEnabled: {
      label: 'Line Number',
      type: 'toggle',
      currentState: localStorage.getItem('isLineNumberEnabled') || false,
    },
    isHigglightActiveLine: {
      label: 'Highlight Active Line',
      type: 'toggle',
      currentState: localStorage.getItem('isHigglightActiveLine') || false,
    },
    isAutoCloseBracket: {
      label: 'Auto Close Brackets',
      type: 'toggle',
      currentState: localStorage.getItem('isAutoCloseBracket') || false,
    },
    ishighlightSelectionMatches: {
      label: 'Highlight Selection Matches',
      type: 'toggle',
      currentState: localStorage.getItem('highlightSelectionMatches') || false,
    },
    isbracketMatchingEnabled: {
      label: 'Bracket Matching',
      type: 'toggle',
      currentState: localStorage.getItem('isbracketMatchingEnabled') || false,
    },
  };

  darkModeHandler = () => {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkmode', this.darkMode.toString());
  };

  accordianHandler(keyState) {
    const accordianState = { ...this.accordianState };
    accordianState[keyState]['currentState'] = !this.accordianState[keyState]['currentState'];
    this.accordianState = accordianState;
  }

  editorStateToggleHandler = editorToggleKey => {
    const editorState = { ...this.editorSettingsState };
    editorState[editorToggleKey]['currentState'] = !editorState[editorToggleKey]['currentState'];
    localStorage.setItem(editorToggleKey, editorState[editorToggleKey]['currentState']);
    this.editorSettingsState = editorState;
  };

  editorSettingsDropDownHandler(item) {
    const editorState = { ...this.editorSettingsState };
    editorState[item]['dropDownOpen'] = !this.editorSettingsState[item]['dropDownOpen'];
    this.editorSettingsState = editorState;
  }
  selectHandler(selectedOption, key) {
    const editorState = { ...this.editorSettingsState };
    editorState[key]['currentState'] = selectedOption;
    localStorage.setItem(key, editorState[key]['currentState']);
    this.editorSettingsDropDownHandler(key);
    this.editorSettingsState = editorState;
  }

  viewClasses = {
    true: '',
    false: 'hidden',
  };

  accordianClasses = {
    firstHeading:
      'flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
    midHeading:
      'flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
    lastHeading:
      'flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
    midDiv: 'p-5 pb-0 pl-8 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 divide-y',
    lastDiv: 'p-5 border border-t-0 border-gray-200 dark:border-gray-700',
  };

  render() {
    return (
      <Host>
        <div class="w-full shadow-md sm:rounded-lg p-4 my-2">
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <div class={this.accordianClasses.firstHeading} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span>Dark Mode</span>
                <toggle-button isDisabled={true} isSelected={this.darkMode} toggleButtonHandler={this.darkModeHandler}></toggle-button>
              </div>
            </h2>

            {Object.keys(this.accordianState).map((accordian, index) => {
              return (
                <div>
                  <h2 id="accordion-collapse-heading-2">
                    <button
                      type="button"
                      class={index === Object.keys(this.accordianState).length ? this.accordianClasses.midHeading : this.accordianClasses.lastHeading}
                      data-accordion-target="#accordion-collapse-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-collapse-body-1"
                      onClick={() => this.accordianHandler(accordian)}
                    >
                      <span>{this.accordianState[accordian]['name']}</span>
                      {this.accordianState[accordian]['currentState'] ? (
                        <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      ) : (
                        <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      )}
                    </button>
                  </h2>
                  <div id="accordion-collapse-body-2" class={this.viewClasses[`${this.accordianState[accordian]['currentState']}`]} aria-labelledby="accordion-collapse-heading-1">
                    <div class={index === Object.keys(this.accordianState).length - 1 ? this.accordianClasses.lastDiv : this.accordianClasses.midDiv}>
                      {this.accordianState[accordian]['name'] === 'Editor' &&
                        Object.keys(this.editorSettingsState).map(item => {
                          return (
                            <div>
                              {this.editorSettingsState[item]['type'] === 'dropDown' && (
                                <div class="pb-4 flex justify-between items-center">
                                  <h1 class="font-normal text-left text-gray-500 dark:text-gray-400">{this.editorSettingsState[item]['label']}</h1>
                                  <div class="h-11 w-44 z-10">
                                    <button
                                      onClick={() => this.editorSettingsDropDownHandler(item)}
                                      id="dropdownDefaultButton"
                                      data-dropdown-toggle="dropdown"
                                      class="w-full justify-between text-md text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                      type="button"
                                    >
                                      <div class="overflow-hidden overflow-ellipsis">{this.editorSettingsState[item].currentState.toUpperCase() || 'Themes'}</div>
                                      {this.editorSettingsState[item]['dropDownOpen'] ? (
                                        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                      ) : (
                                        <svg data-accordion-icon class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                          ></path>
                                        </svg>
                                      )}
                                    </button>
                                    <div
                                      id="dropdown"
                                      class={`z-50 max-h-80 overflow-auto custom-scrollbar bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
                                        this.viewClasses[`${this.editorSettingsState[item]['dropDownOpen']}`]
                                      }`}
                                    >
                                      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        {this.editorSettingsState[item]['options'].map(selectedOption => {
                                          return (
                                            <li>
                                              <button
                                                onClick={() => this.selectHandler(selectedOption, item)}
                                                class="w-full font-medium block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white overflow-hidden overflow-ellipsis"
                                              >
                                                {selectedOption.toUpperCase()}
                                              </button>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {this.editorSettingsState[item]['type'] === 'toggle' && (
                                <div class="py-4 flex justify-between items-center">
                                  <h1 class="font-normal text-left text-gray-500 dark:text-gray-400 ">{this.editorSettingsState[item]['label']}</h1>
                                  <toggle-button
                                    isSelected={this.editorSettingsState[item]['currentState']}
                                    toggleButtonHandler={() => this.editorStateToggleHandler(item)}
                                  ></toggle-button>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      {this.accordianState[accordian]['name'] === 'Others' && <div class="w-full font-semibold text-gray-400 text-center">Comming Soon !!! &#128521;</div>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Host>
    );
  }
}
