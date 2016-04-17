import m from 'mithril';
import SwsDate from './SwsDate';
import SwsCalendar from './SwsCalendar';
import weekNames from './weekNames';
import isUndefined from 'swsutils/src/isUndefined';
import isEmpty from 'swsutils/src/isEmpty';

// view model
const vm = {
  init: (opts) => {
    let now = new Date();
    let _initVal = '';
    if (!isUndefined(opts.initialValue) && !isEmpty(opts.initialValue)) {
      _initVal = opts.initialValue;
      now = new Date(_initVal);
    }
    vm.value(_initVal);
    vm.cal(new SwsCalendar(now));
  },
  overlayClassName: () => {
    let className = vm.isActive() ? 'show' : 'hide';
    return `sws-date-picker-overlay ${className}`;
  },
  calendarName: () => {
    return `${vm.cal().getFullYear()}年${vm.cal().getMonth() + 1}月`;
  },
  dayClassName: (date, index) => {
    let todayClassName = date.isToday(new Date()) ? ' is-today' : '';
    let selectedClassName = date.isSelected(vm.selectedDate()) ? ' is-selected' : '';
    return `week-${index % 7}${todayClassName}${selectedClassName}`;
  },
  select: (date) => {
    vm.selectedDate(date);
  },
  activate: () => {
    vm.isActive(true);
    if (!isEmpty(vm.value())) {
      vm.selectedDate(new SwsDate(new Date(vm.value())));
    }
  },
  deactivate: () => {
    vm.isActive(false);
    if (isUndefined(vm.selectedDate())) {
      vm.value('');
    } else {
      vm.value(vm.selectedDate().toFormattedString());
    }
  },
  cancel: () => {
    vm.isActive(false);
  },
  clear: () => {
    vm.selectedDate(void(0));
  },
  today: () => {
    let now = new Date();
    vm.selectedDate(new SwsDate(now));
    vm.cal().set(now);
  },
  value: m.prop(),
  selectedDate: m.prop(),
  isActive: m.prop(false),
  cal: m.prop()
};

export default {
  controller: (opts) => {
    vm.init(opts);
  },
  view: () => {
    return m('div.sws-date-picker-component', [
      m('div.sws-date-picker-field', [
        m('input[type=text]', {
          onclick: vm.activate,
          value: vm.value()
        })
      ]),
      m('div', {
        className: vm.overlayClassName(),
        onclick: (e) => {
          if (e.target.className.indexOf('sws-date-picker-overlay') !== -1) {
            vm.cancel();
          }
        }
      }, [
        m('div.calendar', [
          m('div.cal-header', [
            m('div.nav.nav-prev', [
              m('a.prev', {
                href: '#',
                onclick: (e) => {
                  e.preventDefault();
                  vm.cal().prev();
                }
              }, '＜')
            ]),
            m('div.calendar-name', [
              m('div.year', vm.calendarName())
            ]),
            m('div.nav.nav-next', [
              m('a.next', {
                href: '#',
                onclick: (e) => {
                  e.preventDefault();
                  vm.cal().next();
                }
              }, '＞')
            ])
          ]),
          m('div.cal-body', [
            weekNames.map((weekName, index) => {
              return m('div', {
                className: `week-${index}`
              }, weekName);
            }),
            vm.cal().getList().map((date, index) => {
              return m('div', {
                className: vm.dayClassName(date, index),
                onclick: () => {
                  vm.select(date);
                }
              }, date.getDate());
            })
          ]),
          m('div.cal-footer', [
            m('button.btn.btn-today', {
              onclick: vm.today
            }, 'TODAY'),
            m('button.btn.btn-clear', {
              onclick: vm.clear
            }, 'CLEAR'),
            m('button.btn.btn-close', {
              onclick: vm.deactivate
            }, 'CLOSE')
          ])
        ])
      ])
    ]);
  },
  getValue: () => {
    return vm.value();
  }
};
