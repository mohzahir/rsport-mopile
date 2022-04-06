<template>
          <ion-list class="sub">
            <ion-menu-toggle auto-hide="true" v-for="(item, i) in array" :key="i">
              <ion-item @click="changeView(mainIndex,i,route.name)" router-direction="root" :router-link="item.path" detail="false" class="hydrated" :class="{ selected: index === i }">
                <ion-icon slot="start" :ios="item.props.iosIcon" :md="item.props.mdIcon"></ion-icon>
                <ion-label>{{ $t(rename(item.props.name)) }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
</template>

<script>
import { IonList, IonItem, IonLabel, IonMenuToggle, IonIcon } from "@ionic/vue"

export default {
    name: "menu-list-view",
    props: ['array','index','route', 'mainIndex'],
components: {
    IonList, IonItem, IonLabel, IonMenuToggle, IonIcon
},
inject: ['changeView'],
methods: {
    rename(name){
        if(name == "menu.feeds"){
            return "menu.feeds_all";
        } else {
            return name;
        }
    }
}
}
</script>

<style scoped>
.sub ion-item{
  width: 90% !important;
  margin-left: 10%;
}
#list ion-list {
        padding: 5px 0 !important;
}
</style>