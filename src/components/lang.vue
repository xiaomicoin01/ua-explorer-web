<template>
  <div class="xbsjselect">
    <div class="xbsjselect-selectdiv">
      <img :src="icon" @click="selectClick"/>
    </div>
    <ul class="xbsjselect-selectOption" v-show="selectshow">
      <li v-for="(ct, index) in listdata" :key="index" @click="selectName(ct)">
        <img :src="ct.icon"/><span>{{ ct.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      selectshow: false,
      currentValue: this.value,
      code: '',
      name: '',
      icon: ''
    };
  },
  computed: {
    listdata() {
      return this.list;
    }
  },
  mounted() {
    var _this = this;
    this.list.forEach(element => {
      if (element.default) {
        _this.code = element.code
        _this.name = element.name
        _this.icon = element.icon
      }
    });
  },
  methods: {
    selectClick() {
      this.selectshow = !this.selectshow;
    },
    selectName(target) {
      this.icon = target.icon
      this.currentValue = target.value;
      this.selectshow = false;
      this.$i18n.locale = target.code;
    }
  },
  watch: {
    currentValue(val, old) {
      this.$emit('input', val);
    }
  }
};
</script>

<style scoped>
.xbsjselect {
  position: relative;
  background-color: #1b1f40;
  width: 90px;
}
.xbsjselect-selectdiv {
  display: inline-block;
  width: 100%;
  height: 28px;
  position: relative;
  text-align: left;
  line-height: 28px;
  cursor: pointer;
  padding-left: 13px;
  left: -2px;
  top: 2px;
  border-radius: 3px;
}
.xbsjselect-selectdiv img {
  margin-left: 66px;
}
.xbsjselect-selectText {
  font-size: 12px;
}
.xbsjselect-selectButton {
  width: 12px;
  height: 10px;
  border: none;
  background-size: contain;
  cursor: pointer;
  float: right;
  margin-right: 20px;
  margin-top: 10px;
  outline: none;
}
.xbsjselect-selectOption {
  width: 100%;
  height: 80px;
  background: rgba(138, 138, 138, 1);
  border-radius: 0px 0px 4px 4px;
  list-style: none;
  overflow: auto;
  z-index: 1;
  position: absolute;
  padding: 0px;
}

.xbsjselect-selectOption li {
  width: 100%;
  height: 24px;
  font-size: 14px;
  color: rgba(221, 221, 221, 1);
  line-height: 24px;
  cursor: pointer;
  margin-left: 0px;
  padding: 0;
  margin: 3px 0px;
}
.xbsjselect-selectOption li img {
  display: inline-block;
  height: 24px;
  position: relative;
  left: -4px;
}
.xbsjselect-selectOption li span {
  display: inline-block;
  height: 24px;
  position: relative;
  left: 5px;
}
.xbsjselect-selectOption li:hover {
  background: rgba(107, 107, 107, 1);
}
</style>
