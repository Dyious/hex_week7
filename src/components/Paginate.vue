<template>
  <div class="d-flex align-item-center justify-content-start my-3">
    <div class="">
      <button
        type="button"
        class="btn btn-light"
        @click="changePage(pageData.current_page - 1)"
      >&lt;
      </button>
    </div>
    <div
      class=""
      v-for="(item,index) in pageData.total_pages"
      :key="index"
    >
      <button
        type="button"
        class="btn btn-light"
        :class="{'active': item === pageData.current_page}"
        @click="changePage(item )"
      >{{item }}
      </button>
    </div>
    <div class="">
      <button
        type="button"
        class="btn btn-light"
        @click="changePage(pageData.current_page + 1)"
      >&gt;
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Paginate',
  props: {
    pageData: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  methods: {
    changePage (item) {
      this.$emit('changePage', item)
    }
  }
}
</script>
