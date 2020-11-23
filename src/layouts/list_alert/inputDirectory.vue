<template>
  <q-popup-edit v-model="label2" :cover="false" :offset="[0, 10]">
    <q-input color="blue" :label="item.name" v-model="label2" dense autofocus>
      <template v-slot:after text="blue">
        <q-btn flat color="primary" @click="input_confirm">确定</q-btn>
        <q-btn flat color="primary" @click="input_exit">取消</q-btn>
      </template>
    </q-input>
  </q-popup-edit>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
    computed
  } from '@vue/composition-api';

  export default defineComponent({
    name: 'create_directory',
    props: ['item'],
    setup(context) {

    }
  });
</script>
