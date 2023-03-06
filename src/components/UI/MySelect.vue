<template>
<select id="sel" @input="$emit('update:modelValue', $event.target.value)" @change="changeOption">
<option disabled value="">Select</option>
<option
    v-for="option in options"
    :key="option.value"
    :value="option.value"
>
  {{ option.name }}
</option>
</select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
#sel{
  background-color: #fff;
  color: #1a73e8;
padding-left: 20px;
  border: 1px solid #1a73e8;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.2s;
}


#sel:hover {
  background-color: #1a73e8;
  color: #fff;
}

#sel:focus {
  outline: none;
}
</style>