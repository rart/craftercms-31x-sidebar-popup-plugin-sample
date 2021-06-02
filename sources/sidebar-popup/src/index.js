/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import App from './App';
import { render } from 'react-dom';
import { createElement } from 'react';

CStudioAuthoring.Module.moduleLoaded('popup', {
  initialize(config) {
    if (config && config.params) {
      // This is a way you could potentially have multiple widgets under the same plugin
      switch (config.params.widget) {
        case 'popup':
          render(
            createElement(App),
            config.containerEl
          );
          break;
        default:
          console.error('No widget supplied on the config. Skipping initialize request.');
      }
    } else {
      console.error('No config supplied to the sidebar plugin. Skipping initialize request.');
    }
  }
});
