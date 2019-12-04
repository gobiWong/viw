<template>
  <div>
    <div class="top">
      <div
        class="left"
        :class=" item.status == 1 ? 'selsct' :''"
        v-for="(item,index) in tabs"
        :key="index"
        @click="liaotian(item.id,item.name)"
      >
        {{
        item.name}}
      </div>
    </div>

    <div class="liaotian">
      <div
        style="margin:0 10px"
        :class=" item.status == 1 ? 'selsct1' :''"
        v-for="(item,index) in tabs1"
        :key="index"
        @click="liaotian1(item.id,item.name)"
      >
        {{
        item.name}}
      </div>
    </div>

    <div class="wrap">
      <!-- <router-view :data1="msg" :data2="msg1"></router-view> -->
      {{msg}}---{{msg1}}
    </div>
  </div>
</template>
<script>

export default {

  data() {
    return {
      tabs: [
        { name: "聊天", status: 1, id: 11 },
        { name: "互动", status: 2, id: 22 }
      ],
      tabs1: [
        { name: "全部", status: 1, id: 1 },
        { name: "招呼", status: 2, id: 2 },
        { name: "沟通中", status: 2, id: 3 }
      ],
      msg: "聊天",
      msg1: "全部"
    };
  },
  methods: {
    liaotian(id, name) {
      this.tabs = this.tabs.map(res => {
        if (res.id === id) {
          return {
            ...res,
            status: 1
          };
        }
        return {
          ...res,
          status: 2
        };
      });
      this.msg =name;

      if (id === 11) {
        this.tabs1 = [
          { name: "全部", status: 1, id: 1 },
          { name: "招呼", status: 2, id: 2 },
          { name: "沟通中", status: 2, id: 3 }
        ];
        this.msg1 = "全部";
        // this.$router.push("/item1");
      } else {
        this.tabs1 = [
          { name: "感兴趣", status: 1, id: 1 },
          { name: "看过我", status: 2, id: 2 },
          { name: "新职位", status: 2, id: 3 }
        ];
        this.msg1 = "感兴趣";
        // this.$router.push("/item2");
      }
    },
    liaotian1(id, name) {
      this.tabs1 = this.tabs1.map(res => {
        if (res.id === id) {
          return {
            ...res,
            status: 1
          };
        }
        return {
          ...res,
          status: 2
        };
      });
      this.msg1 = name;
    }
  }
};
</script>
 <style lang="less">
.top {
  display: flex;
  .left,
  .right {
    margin: 0 20px;
  }
  .left {
    display: flex;
  }
  .selsct {
    border-bottom: 3px solid blue;
    font-weight: 900;
  }
}
.liaotian {
  display: flex;
  margin-top: 10px;
}
.selsct1 {
  border-bottom: 3px solid seagreen;
  font-weight: 900;
}
.wrap {
  padding-top: 50px;
  text-align: center;
}
</style>

