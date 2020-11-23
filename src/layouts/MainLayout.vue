<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="alertaa"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <q-btn @click="alertaa">aaa</q-btn>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
          <q-input ref="filter" filled v-model="filter" label="Filter">
            <template v-slot:append>
              <q-icon v-if="filter !== ''" name="clear" class="cursor-pointer" @click="resetFilter"></q-icon>
            </template>
          </q-input>
      <q-tree
        :nodes="directories"
        node-key="label"
        :filter="filter"
        default-expand-all
      >
        <template v-slot:default-header="prop">
          <div class="row items-center">
          <q-btn flat rounded color="primary" :label="prop.node.label"/>
            </div>
            <!-- <p>{{directories_menus}}</p> -->
        <q-btn dense flat color="primary" icon="menu">
          <!-- 按钮打开内容呢 -->
          <q-menu>
            <!-- 列表 -->
            <q-list>
              <!-- 内容 -->
              <q-item
                v-for="(item, index) in directories_menu"
                :key="index" :active="active"
                :active-class="item.activeClass"
                :clickable=true
              >
                <!-- 选择内容 -->
                <q-item-section>
                  <!-- 内容名 -->
                  <q-item-label>{{item.name}}</q-item-label>
                    <!-- 弹出页面 -->
                  <create_directory :item="item"}></create_directory>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
              <q-dialog v-model="prompt" persistent>
                <q-card style="min-width: 350px">
                  <q-card-section>
                    <div class="text-h6">Your address</div>
                  </q-card-section>
                  <q-card-section class="q-pt-none">
                    <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
                  </q-card-section>
                  <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="Cancel" v-close-popup />
                    <q-btn flat label="Add address" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
        </template>
      </q-tree>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import create_directory from './list_alert/inputDirectory.vue'
import { defineComponent, ref, computed } from '@vue/composition-api';
import { mapState } from 'vuex'


export default defineComponent({
  name: 'MainLayout',
  components: { create_directory },
  computed:{
    ...mapState({
      directories:(state:any):object[]=>state.try_data.directories,
      directories_menu:(state:any):{name:string,method:string,disable:boolean,color:string}[]=>state.try_data.directories_menu
      })
  },
  setup(context) {
    const leftDrawerOpen:object = ref(false);
    const filter:string= '';
    const tree_menu:object = ref(true);
    const alertaa = ()=>{
      alert("aa")
    };

    const myFilterMethod:(node:any, filter:string)=>any = function(node:any, filter:string):string|boolean {
          const filt:string = filter.toLowerCase()
          return node.label && node.label.toLowerCase().indexOf(filt) > -1 && node.label.toLowerCase().indexOf('(*)') > -1
        };
    const resetFilter = function():void {
      const filter:string = ''
      context.$refs.filter.focus()
    };
    return {leftDrawerOpen, filter, myFilterMethod, resetFilter, alertaa};
  }
});
</script>
