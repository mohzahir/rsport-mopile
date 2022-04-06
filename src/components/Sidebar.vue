<template>
      <ion-menu content-id="main-content">
          <ion-list id="list">
            <ion-list-header>Inbox</ion-list-header>
            <ion-note>hi@ionicframework.com</ion-note>
  
            <div auto-hide="false" v-for="(route, i) in routes" :key="i">
              <ion-item @click="()=> route.props.isFeeds = !route.props.isFeeds" class="hydrated" lines="none" :class="{ selected: selectedIndex === i }" v-if="route.name == 'feeds'">
                <ion-icon slot="start" :ios="route.props.iosIcon" :md="route.props.mdIcon"></ion-icon>
                <ion-label>{{ $t(route.props.name) }}</ion-label>
                <ion-icon slot="end" :ios="!route.props.isFeeds? route.props.chevronForward: route.props.chevronDown" :md="!route.props.isFeeds? route.props.chevronForward: route.props.chevronDown"></ion-icon>
              </ion-item>
              <ion-item @click="()=> route.props.isMatches = !route.props.isMatches" class="hydrated" lines="none" :class="{ selected: selectedIndex === i }" v-else-if="route.name == 'matches'">
                <ion-icon slot="start" :ios="route.props.iosIcon" :md="route.props.mdIcon"></ion-icon>
                <ion-label>{{ $t(route.props.name) }}</ion-label>
                <ion-icon slot="end" :ios="!route.props.isMatches? route.props.chevronForward: route.props.chevronDown" :md="!route.props.isMatches? route.props.chevronForward: route.props.chevronDown"></ion-icon>
              </ion-item>

            <ion-menu-toggle auto-hide="true" v-else>
              <ion-item @click="changeView(i,null,route.name)" router-direction="root" :router-link="route.path" lines="none" detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon slot="start" :ios="route.props.iosIcon" :md="route.props.mdIcon"></ion-icon>
                <ion-label>{{ $t(route.props.name) }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
           <menu-list-view v-if="route.props.isFeeds" :index="feedIndex" :mainIndex="i" :array="feeds" :route="route" />
           <menu-list-view v-if="route.props.isMatches" :index="matchIndex" :mainIndex="i" :array="matches" :route="route" />
            </div>
          </ion-list>


          <ion-footer id="ion-footer">
  <ion-grid>
    <ion-row>
      <ion-col>
               <ion-item>
                <ion-select interface="popover" v-model="$i18n.locale" :selected-text="$t('langText')">
                  <ion-select-option value="ar">العربيه</ion-select-option>
                  <ion-select-option value="en">English</ion-select-option>
                </ion-select>
                </ion-item>
      </ion-col>
      <ion-col>
            <ion-label>Inbox</ion-label>
      </ion-col>
    </ion-row>
  </ion-grid>
          </ion-footer>
      </ion-menu>
</template>

<script>
import { IonMenu, IonList, IonItem, IonLabel, IonMenuToggle, IonListHeader, IonNote, IonIcon, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol} from "@ionic/vue"
import MenuListView from "./ui/Menulist.vue"


function toggleLang(lang){
  if(lang == 'ar') {
    document.querySelector('html').setAttribute('lang', 'ar')
    document.querySelector('html').setAttribute('dir', 'rtl')
    // document.querySelector('div.menu-inner').classList.add('leftAuto')
  } else {
    document.querySelector('html').setAttribute('lang', 'en')
    document.querySelector('html').setAttribute('dir', 'ltr')
    // document.querySelector('div.menu-inner').classList.remove('leftAuto')
  }
}

export default {
    components: {
        IonMenu, IonList, IonItem, IonLabel, IonMenuToggle, IonListHeader, IonNote, IonIcon, MenuListView, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol
    },
    provide(){
      return{
        changeView: this.changeView
      }
    },
    data(){
      return {  
        routes: this.$router.options.routes.filter(x=>x.name == "feeds" ||x.name == "champs" ||x.name == "my_champs" ||x.name == "matches" ||x.name == "teams" ||x.name == "my_teams" ||x.name == "settings"),
        feeds: this.$router.options.routes.filter(x=>x.name == "feeds" ||x.name == "feeds_videos" ||x.name == "feeds_posts" ||x.name == "feeds_images" ||x.name == "feeds_expectations"),
        matches: this.$router.options.routes.filter(x=>x.name == "ongoing" || x.name == "upcoming"),
        main: "feeds",
        selectedIndex: 0,
        feedIndex: 0,
        matchIndex: null,
      }
    },
    methods: {
      changeView(i,x,main){
        if(main != this.main){
          this.feedIndex = null
          this.matchIndex = null
          this.main = main
          if(main == "feeds"){
            this.selectedIndex = i
            this.feedIndex = x
          }
          if(main == "matches"){
            this.selectedIndex = i
            this.matchIndex = x
          }else{
            this.selectedIndex = i
          }
        }else{
          if(main == "feeds"){
            this.feedIndex = x
          }
          if(main == "matches"){
            this.matchIndex = x
          }
        }
      }

    },
    watch: {
      "$i18n.locale"(newLang,oldLang){
        if(newLang != oldLang){
          localStorage.setItem('lang',newLang)
          toggleLang(newLang);
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
#ion-footer{
  position: absolute !important;
  bottom: 0;
}
.leftAuto{
  left: auto !important;
}
</style>