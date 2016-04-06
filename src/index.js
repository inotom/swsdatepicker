/*!
 * SwsDatePicker
 *
 * @author iNo <wdf7322@yahoo.co.jp>
 * @version 1.0.0
 * @license MIT
 */

import m from 'mithril';
import SwsDatePicker from './swsdatepicker/SwsDatePicker';

window.addEventListener('DOMContentLoaded', function() {
  let date = '2016-03-14';
  m.mount(document.getElementById('app'), m.component(SwsDatePicker, {initialValue: date}));
}, false);
