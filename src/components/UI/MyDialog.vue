<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop  class="dialog_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/components/mixins/toggleMixin";

export default {
  name: 'my-dialog',
  mixins: [toggleMixin],
}
</script>

<style scoped>
.dialog{

  top:0;
  bottom: 0;
  right : 0;
  left : 0;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
}
.dialog_content{
  color: #262626;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  margin: auto;
  background: #b6c3dd;
  border-radius: 12px;
  min-height: 50px;
  min-width: 290px;
  padding: 20px 35px 20px 20px;
}
</style>