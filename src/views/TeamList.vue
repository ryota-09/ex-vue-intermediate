<template>
  <div class="team-list">
    <h1>野球チーム一覧</h1>
    <div class="team-name" v-for="team of teamList" v-bind:key="team.id">
      <router-link v-bind:to="'/teamDetail/' + team.id" >{{ team.teamName }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 野球チーム一覧ページを表すクラス.
 */
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/team"
@Component
export default class XXXComponent extends Vue {
  /**
   * 野球チーム全データを格納した配列を返すgetter.
   * @ returns 野球チームの全データを格納した配列
   */
  get teamList (): Array<Team>{
    return this.$store.getters.getTeamList;
  }
}
</script>

<style scoped>
.team-list {
  text-align: left;
}
.team-name {
  margin: 20px 0;
}
</style>
