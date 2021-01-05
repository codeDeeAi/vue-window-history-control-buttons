/*!
 * vue-cli-plugin-windowhistorybuttons v1.0.3
 * (c) Bada Adeola O
 * Released under the MIT License.
 */
'use strict';

var vue = require('vue');

var script = {
  name: 'controls',
  props: {
    type: String,
    design: Array,
    icon: Array,
    css: Object
  },
  components: {},
  data: function data() {
    return {};
  },
  methods: {
    goBack: function goBack() {
      window.history.back();
    },
    goForward: function goForward() {
      window.history.forward();
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [$props.type == 'previous' ? (vue.openBlock(), vue.createBlock("button", {
    key: 0,
    id: "myBtn",
    type: "button",
    "class": $props.design,
    style: $props.css,
    onClick: _cache[1] || (_cache[1] = vue.withModifiers(function () {
      return $options.goBack && $options.goBack.apply($options, arguments);
    }, ["prevent"]))
  }, [vue.createVNode("i", {
    "class": $props.icon
  }, null, 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  )) : vue.createCommentVNode("v-if", true), $props.type == 'next' ? (vue.openBlock(), vue.createBlock("button", {
    key: 1,
    id: "myBtn",
    type: "button",
    "class": $props.design,
    style: $props.css,
    onClick: _cache[2] || (_cache[2] = vue.withModifiers(function () {
      return $options.goForward && $options.goForward.apply($options, arguments);
    }, ["prevent"]))
  }, [vue.createVNode("i", {
    "class": $props.icon
  }, null, 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  )) : vue.createCommentVNode("v-if", true)]);
}

script.render = render;

var index = {
  install: function install(Vue, options) {
    Vue.component('window-control-buttons', script);
  }
};

module.exports = index;
