<template>
  <div class="team-detail">
    <div class="team-introduce">
      <div class="bold">
        <span>球団名</span>
      </div>
      <div>
        {{ currentTeam.teamName }}
      </div>
      <div class="bold">
        <span>本拠地</span>
      </div>
      <div>
        {{ currentTeam.headquarters }}
      </div>
      <div class="bold">
        <span>発足日</span>
      </div>
      <div>
        {{ date }}
      </div>
      <div class="bold">
        <span>歴史</span>
      </div>
      <pre class="pre">{{ currentTeam.history }}</pre>
      <br />
      <button type="button" v-on:click="returnOnListPage">戻る</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/team";
import { format } from "date-fns";
@Component
export default class TeamDetail extends Vue {
  //
  private currentTeam = new Team(0, "", "", new Date(), "");

  /**
   * チームの詳細ページを表示するために呼ばれるメソッド.
   */
  created(): void {
    let currentId = Number(this.$route.params.id);
    this.currentTeam = this.getTeamListById(currentId);
  }

  /**
   * Date型の日付を◯年◯月◯日の形に整えるメソッド.
   * @returns format(date, "yyyy年MM月dd日") - 整形後の文字列
   */
  get date(): string {
    return format(this.currentTeam.inauguration, "yyyy年MM月dd日");
  }

  /**
   * 野球チーム一覧ページに遷移するためのメソッド.
   */
  returnOnListPage(): void {
    this.$router.push("/teamList");
  }

  /**
   * idによって絞り込まれたチームを取得するgetter.
   * @param id - 対象id
   * @returns this.$store.getters.getTeamListById(id) - 対象チーム
   */
  getTeamListById(id: number): Team {
    return this.$store.getters.getTeamListById(id);
  }
}
</script>

<style scoped>
.team-detail {
  text-align: left;
}
.bold {
  font-weight: bold;
}
.pre {
  font-weight: 100;
  font-size: 16px;
  margin: 0;
}
</style>
