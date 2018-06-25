<script>
import SectionTitle from './SectionTitle.vue'

export default {
  components: {
    SectionTitle
  },
  props: {
    listprops: {
      type: Array,
      default: () => []
    },
    userStyle: {
      type: Object,
      default: () => ({})
    }
    // items: [
    //   {
    //     color: {
    //       type: String,
    //       default : "#66aa33"
    //     }
    //   },
    //   {
    //     icon: {
    //       type: String,
    //       default : ""
    //     },
    //   },
    //   {
    //     word: {
    //       type: String,
    //       default : ""
    //     }
    //   }
    // ]
  }
}
</script>

<template>
  <div>
    <section-title :style="userStyle.h1">Lists</section-title>
    <!-- <dl>
      <template v-for="icon in iconList">
        <dt>
          <svg class="icon-svg" :style="{'fill': `${icon.color}` }">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="/assets/svg/icon/sprite/sprite.svg`${icon.path}`"></use>
          </svg>
        </dt>
        <dd class="icon-word">{{icon.name}}</dd>
      </template>
    </dl> -->
    <dl class="icon-list">
      <dt>
        <svg class="icon-svg" :style="{'fill': `${color}` }">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svg/icon/sprite/sprite.svg#brush"></use>
        </svg>
      </dt>
      <dd class="icon-word">brush</dd>
    </dl>
    <dl class="icon-list">
      <dt>
        <svg class="icon-svg" :style="{'fill': `${color}` }">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svg/icon/sprite/sprite.svg#cat"></use>
        </svg>
      </dt>
      <dd class="icon-word">cat</dd>
    </dl>
    <dl class="icon-list">
      <dt>
        <svg class="icon-svg" :style="{'fill': `${color}` }">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svg/icon/sprite/sprite.svg#crown"></use>
        </svg>
      </dt>
      <dd class="icon-word">crown</dd>
    </dl>
    <dl class="icon-list">
      <dt>
        <svg class="icon-svg" :style="{'fill': `${color}` }">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svg/icon/sprite/sprite.svg#dog"></use>
        </svg>
      </dt>
      <dd class="icon-word">dog</dd>
    </dl>
    <dl class="icon-list">
      <dt>
        <svg class="icon-svg" :style="{'fill': `${color}` }">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svg/icon/sprite/sprite.svg#eye"></use>
        </svg>
      </dt>
      <dd class="icon-word">eye</dd>
    </dl>
    <dl class="icon-list">
      <dt>
        <svg class="icon-svg" :style="{'fill': `${color}` }">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svg/icon/sprite/sprite.svg#heart"></use>
        </svg>
      </dt>
      <dd class="icon-word">heart</dd>
    </dl>
    <dl class="icon-list">
      <dt>
        <svg class="icon-svg" :style="{'fill': `${color}` }">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svg/icon/sprite/sprite.svg#sparkle"></use>
        </svg>
      </dt>
      <dd class="icon-word">sparkle</dd>
    </dl>
    <dl class="icon-list">
      <dt>
        <svg class="icon-svg" :style="{'fill': `${color}` }">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svg/icon/sprite/sprite.svg#star"></use>
        </svg>
      </dt>
      <dd class="icon-word">star</dd>
    </dl>
    <dl class="icon-list">
      <dt>
        <svg class="icon-svg" :style="{'fill': `${color}` }">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svg/icon/sprite/sprite.svg#sun"></use>
        </svg>
      </dt>
      <dd class="icon-word">sun</dd>
    </dl>
  </div>
</template>

<style scoped>
.icon-svg{
  width: 50px;
  height: 50px;
}

dl.icon-list dt {
  float: left;
  clear: both;
  width: 100px;
  height: 50px;
  line-height: 50px;
}

dl.icon-list dd {
  margin-left: 80px;
  width: 100px;
  height: 50px;
  line-height: 50px;
}
</style>
