<template>
  <div class="serch-hotels">
    <h1>ホテル検索</h1>
    <div class="serch-number">
      <input type="text" v-model.number="serchPrice" />
      <span>&nbsp;円以下</span>
    </div>
    <div class="serch-button">
      <button type="button" v-on:click="serchStart">検索</button>
    </div>
    <div class="hotelList">
      <table
        class="hotel-table"
        v-for="hotel of serchResultArray"
        v-bind:key="hotel.hotelName"
      >
        <tr class="table-column-even">
          <th>ホテル名</th>
          <td>{{ hotel.hotelName }}</td>
        </tr>
        <tr class="table-column-odd">
          <th>最寄駅</th>
          <td>{{ hotel.nearestStation }}</td>
        </tr>
        <tr class="table-column-even">
          <th>価格</th>
          <td>{{ hotel.price }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Hotel } from "@/types/hotel";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private serchPrice = 0;
  private serchResultArray = new Array<Hotel>();

  serchStart(): void {
    this.serchResultArray = new Array<Hotel>();
    let isNumber = typeof(this.serchPrice) === "number";

    if (!isNumber || this.serchPrice <= 0) {
      this.serchResultArray = this.$store.getters.getHotelList;
      return;
    }
    this.serchResultArray = this.$store.getters.getHotelListByPrice(
      this.serchPrice
    );
  }
}
</script>

<style scoped>
.serch-hotels {
  text-align: left;
}
.serch-button {
  margin: 10px 0;
}
.hotel-table {
  margin: 20px;
  border-collapse: collapse;
}

td,
th {
  font-weight: 600;
  text-align: center;
  border: 2px solid grey;
}
td {
  width: 300px;
}
th {
  width: 150px;
}
.table-column-even{
  background-color: beige;
}
.table-column-odd{
  background-color: antiquewhite;
}
</style>
