<template>
  <div>
    <h1>衣類検索</h1>
    <input type="radio" name="gender" value="0" v-model.number="searchGenderNum">Man<br>
    <input type="radio" name="gender" value="1" v-model.number="searchGenderNum">Woman
    <select  id="" v-model="searchColor">
      <option value="赤">赤</option>
      <option value="白">白</option>
      <option value="黄">黄</option>
      <option value="青">青</option>
    </select><br>
    <button type="button" v-on:click="searchStart">検索</button>
    <div>
      <table v-for="clothe of searchClothesArray" v-bind:key="clothe.id">
        <tr>
          <th>ジャンル</th>
          <td>{{ clothe.genre }}</td>
        </tr>
        <tr>
          <th>サイズ</th>
          <td>{{ clothe.size }}</td>
        </tr>
        <tr>
          <th>価格</th>
          <td>{{ clothe.price }}</td>
        </tr>
        <tr>
          <th>性別</th>
          <td>{{ clothe.formatGender }}</td>
        </tr>
        <tr>
          <th>色</th>
          <td>{{ clothe.color }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Clothe } from "@/types/clothe";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private searchClothesArray = new Array<Clothe>();
  private searchGenderNum = 0;
  private searchColor = "";

  searchStart(): void{
    this.searchClothesArray = new Array<Clothe>();
    this.searchClothesArray = this.$store.getters.getSerchClothList(this.searchGenderNum, this.searchColor);
  }
}
</script>

<style scoped>

</style>
