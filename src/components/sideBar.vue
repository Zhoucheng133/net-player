<template>
  <div class="main">
    <div class="userinfo">
      <svg t="1691218520569" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="4599" width="30" height="30">
        <path
          d="M512 62.08A449.92 449.92 0 1 0 961.92 512 449.92 449.92 0 0 0 512 62.08z m0 135.04a135.04 135.04 0 1 1-135.04 135.04A134.72 134.72 0 0 1 512 197.12z m0 640a323.84 323.84 0 0 1-269.76-144.96c0-89.6 179.84-138.56 269.76-138.56s268.48 48.96 269.76 138.56A323.84 323.84 0 0 1 512 835.84z"
          p-id="4600" fill="#707070"></path>
      </svg>
      <div class="name">{{ username }}</div>
    </div>
    <div class="userOp">
      <div class="settings" @click="toPage('settings')">设置</div>
      <div class="logoutButton" @click="logoutController">注销</div>
    </div>

    <div class="aboutButton" @click="toPage('about')">关于netPlayer</div>

    <div class="menu">
      <div @click="toPage('albums')" :class="nowPage == 'albums' ? 'itemSelected' : 'item'" style="margin-top: 16px;">
        <svg class="icon" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="18" stroke="#333" stroke-width="4" />
          <path d="M13 24C13 17.9249 17.9249 13 24 13" stroke="#333" stroke-width="4" stroke-linecap="round" />
          <circle cx="24" cy="24" r="5" fill="none" stroke="#333" stroke-width="4" />
        </svg>
        专辑
      </div>
      <div @click="toPage('artists')" :class="nowPage == 'artists' ? 'itemSelected' : 'item'">
        <svg class="icon" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="17" y="4" width="14" height="27" rx="7" fill="none" stroke="#333" stroke-width="4"
            stroke-linejoin="round" />
          <path d="M9 23C9 31.2843 15.7157 38 24 38C32.2843 38 39 31.2843 39 23" stroke="#333" stroke-width="4"
            stroke-linecap="round" stroke-linejoin="round" />
          <path d="M24 38V44" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        艺人
      </div>
      <div @click="toPage('allSongs')" :class="nowPage == 'allSongs' ? 'itemSelected' : 'item'">
        <svg class="icon" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 19H40" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M24 10H40" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 38H40" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 28H40" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 10L16 15L8 20V10Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" />
        </svg>
        所有歌曲
      </div>
      <div @click="toPage('lovedSongs')" :class="nowPage == 'lovedSongs' ? 'itemSelected' : 'item'">
        <svg class="icon" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
            fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        喜欢的歌曲
      </div>
      <div @click="toPage('search')" :class="nowPage == 'search' ? 'itemSelected' : 'item'">
        <svg width="16" class="icon" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
            fill="none" stroke="#000000" stroke-width="4" stroke-linejoin="round" />
          <path d="M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431"
            stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M33.2216 33.2217L41.7069 41.707" stroke="#000000" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        搜索
      </div>
      <!-- <div class="divLine"></div> -->
      <!-- <div @click="fullRandomPlay" class="item" :style="{'color': fRandom ? 'rgb(24, 144, 255)' : 'black', 'transition': 'none'}">
        <svg class="icon" v-if="!fRandom" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 42H42V30" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 18V6H30" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 6L6 42" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.5 31.5L34 34L39 39L41.5 41.5L42 42M24 24L6 6L24 24Z" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <svg class="icon" v-else width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 42H42V30" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 18V6H30" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 6L6 42" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.5 31.5L34 34L39 39L41.5 41.5L42 42M24 24L6 6L24 24Z" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        随机播放
      </div>
      <div @click="addList" class='item'>
        <svg width="16" class="icon" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 28H24" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 37H24" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 19H40" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 10H40" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M30 33H40" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M35 28L35 38" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        新建歌单
      </div> -->
      <div class="functions">
        <div class="gridContent" @click="addList">
          <svg width="18" class="icon" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 28H24" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 37H24" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 19H40" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 10H40" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M30 33H40" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M35 28L35 38" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="gridContent" @click="fullRandomPlay">
          <svg class="icon" v-if="!fRandom" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 42H42V30" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 18V6H30" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 6L6 42" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.5 31.5L34 34L39 39L41.5 41.5L42 42M24 24L6 6L24 24Z" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <svg class="icon" v-else width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 42H42V30" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 18V6H30" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 6L6 42" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.5 31.5L34 34L39 39L41.5 41.5L42 42M24 24L6 6L24 24Z" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
      <a-modal v-model="createListPanel" title="新建歌单" centered cancelText='取消' okText='确定' @ok="createNewList">
        <a-input v-model="newListName" placeholder="输入新建歌单的名称" />
      </a-modal>
      <!-- <div class="divLine"></div> -->
      <div class="listText">创建的歌单</div>
      <div v-for="(item, index) in playlist" :key="index" @click="toPage('playList', item)">
        <a-dropdown :trigger="['contextmenu']">
          <div :class="nowPage == 'playList' && playList.id == item.id ? 'itemSelected' : 'item'">
            <svg class="icon" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="4" width="32" height="40" rx="2" fill="none" stroke="#333" stroke-width="4"
                stroke-linejoin="round" />
              <path d="M21 14H33" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 24H33" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 34H33" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M15 16C16.1046 16 17 15.1046 17 14C17 12.8954 16.1046 12 15 12C13.8954 12 13 12.8954 13 14C13 15.1046 13.8954 16 15 16Z"
                fill="#333" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M15 26C16.1046 26 17 25.1046 17 24C17 22.8954 16.1046 22 15 22C13.8954 22 13 22.8954 13 24C13 25.1046 13.8954 26 15 26Z"
                fill="#333" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M15 36C16.1046 36 17 35.1046 17 34C17 32.8954 16.1046 32 15 32C13.8954 32 13 32.8954 13 34C13 35.1046 13.8954 36 15 36Z"
                fill="#333" />
            </svg>
            <div class="itemContainer">
              {{ item.name }}
            </div>
          </div>
          <a-menu slot="overlay">
            <a-menu-item key="1" @click="renameList(item)">
              <a-icon type="edit" />重命名歌单
            </a-menu-item>
            <a-modal v-model="renamePanel" title="重命名歌单" centered cancelText='取消' okText='确定' @ok="changeListName">
              <a-input v-model="newListName" placeholder="输入新的歌单名称" />
            </a-modal>
            <a-menu-divider />
            <a-menu-item key="2" @click="delList(item)">
              <a-icon type="delete" />删除歌单
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = require('electron')
export default {
  beforeDestroy() {
    ipcRenderer.removeAllListeners('playlistResult');
    ipcRenderer.removeAllListeners('renameListResult');
    ipcRenderer.removeAllListeners('delListResult');
    ipcRenderer.removeAllListeners('newListResult');
  },
  data() {
    return {
      username: "",
      playlist: [],

      renamePanel: false,

      newListName: "",

      selectedList: "",

      createListPanel: false,
    }
  },
  props: {
    nowPage: String,
    playList: Object,
    fRandom: Boolean
  },
  methods: {
    fullRandomPlay(){
      this.$emit("fullRandomPlay");
    },
    createNewList() {
      ipcRenderer.send('newListRequest', localStorage.getItem("url"), localStorage.getItem("username"), localStorage.getItem("salt"), localStorage.getItem("token"), this.newListName);
    },
    addList() {
      this.createListPanel = true;
    },
    changeListName() {
      ipcRenderer.send('renameListRequest', localStorage.getItem("url"), localStorage.getItem("username"), localStorage.getItem("salt"), localStorage.getItem("token"), this.selectedList, this.newListName);
    },
    delList(item) {
      console.log("=111");
      this.$confirm({
        centered: true,
        title: '你确定要删除这个歌单吗?',
        cancelText: '取消',
        okText: '确定',
        onOk() {
          ipcRenderer.send('delListRequest', localStorage.getItem("url"), localStorage.getItem("username"), localStorage.getItem("salt"), localStorage.getItem("token"), item.id);
        },
        onCancel() {
        },
        class: 'test',
      });
    },
    renameList(item) {
      this.renamePanel = true;
      this.selectedList = item.id;
    },
    toPage(pageName, item) {
      if (pageName != 'playList') {
        this.$emit("toPage", pageName);
        return;
      }
      this.$emit('toPlayList', item);
    },
    logoutController() {
      var that = this;
      this.$confirm({
        title: '你确定要注销吗?',
        centered: true,
        cancelText: '取消',
        okText: '确定',
        onOk() {
          that.$emit("logoutMain");
        },
        onCancel() {
        },
        class: 'test',
      });
    },
    playlistResult(event, response) {
      console.log("侧边栏的请求: 获取歌单列表");
      if (response == null) {
        this.$message.error('请求播放列表失败!');
        return;
      }
      this.playlist = response.playlists.playlist;
      this.$emit('getSongList', this.playlist);
    },
    requestList() {
      ipcRenderer.send('playlistRequest', localStorage.getItem("url"), localStorage.getItem("username"), localStorage.getItem("salt"), localStorage.getItem("token"));
    },
    // openBrower() {
    //   shell.openExternal(localStorage.getItem("url"));
    // },
    renameListResult(event, resp) {
      if (resp.status != 'ok') {
        this.$message.error('重命名失败!');
        return;
      }
      this.$message.success('重命名成功!');
      this.renamePanel = false;
      this.selectedList = "";
      this.newListName = "";
      this.requestList();
    },
    delListResult(event, resp) {
      if (resp.status != 'ok') {
        this.$message.error('删除失败!');
        return;
      }
      this.$message.success("删除成功!");
      this.toPage("allSongs");
      this.requestList();
    },
    newListResult(event, resp) {
      if (resp.status != 'ok') {
        this.$message.error('创建失败!');
        return;
      }
      this.$message.success("创建成功!");
      this.requestList();
      this.createListPanel = false;
      this.selectedList = "";
      this.newListName = "";
    },
  },
  mounted() {
    ipcRenderer.removeAllListeners('playlistResult');
    ipcRenderer.removeAllListeners('renameListResult');
    ipcRenderer.removeAllListeners('delListResult');
    ipcRenderer.removeAllListeners('newListResult');

    ipcRenderer.on('playlistResult', this.playlistResult);
    ipcRenderer.on('renameListResult', this.renameListResult);
    ipcRenderer.on('delListResult', this.delListResult);
    ipcRenderer.on('newListResult', this.newListResult);
  },
  created() {
    this.username = localStorage.getItem("username");

    this.requestList();
  },
  watch: {
  },
}
</script>

<style scoped>
.gridContent:hover{
  background-color: rgb(220, 220, 220);
}
.gridContent{
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;
}
.functions{
  display: grid;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
  margin-top: 5px;
}

.aboutButton:hover {
  color: #1890ff;
  cursor: pointer;
}

.aboutButton {
  position: absolute;
  bottom: 18px;
  left: 50%;
  color: grey;
  user-select: none;
  transform: translateX(-50%);
  transition: all ease-in-out .3s;
}

.itemContainer {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.listText {
  user-select: none;
  width: 180px;
  padding: 0px 10px 10px 20px;
  display: flex;
  justify-content: flex-start;
  color: grey;
}

.divLine {
  margin-top: 5px;
  margin-bottom: 5px;
  border: .5px solid lightgrey;
  background-color: lightgrey;
  opacity: .5;
  width: 80%;
}

.menu {
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 160px);
  overflow-y: overlay;
  ;
  overflow-x: hidden;
}

.icon {
  margin-right: 8px;
}

.item:hover {
  background-color: rgb(220, 220, 220);
  cursor: pointer;
}

.itemSelected:hover {
  cursor: pointer;
}

.itemSelected {
  background-color: rgb(230, 230, 230);
  display: flex;
  align-items: center;
  font-size: 16px;
  width: 180px;
  padding: 10px 10px 10px 20px;
  border-radius: 10px;
  user-select: none;
  transition: all ease-in-out .3s;
  text-align: left;
  white-space: nowrap;
  justify-content: flex-start;
  text-overflow: ellipsis;
}

.item {
  display: flex;
  align-items: center;
  font-size: 16px;
  width: 180px;
  padding: 10px 10px 10px 20px;
  border-radius: 10px;
  user-select: none;
  transition: all ease-in-out .3s;
  text-align: left;
  white-space: nowrap;
  justify-content: flex-start;
  text-overflow: ellipsis;
}

.settings:hover {
  color: #1890ff;
}

.logoutButton:hover,
.settings:hover {
  cursor: pointer;
}

.logoutButton,
.settings {
  user-select: none;
  transition: all ease-in-out .3s;
}

.logoutButton:hover {
  color: red;
}

.logoutButton {
  margin-left: 10px;
}

.userOp {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  width: 200px;
}

.name {
  margin-left: 5px;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.userinfo {
  max-width: 180px;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  font-size: 20px;
  user-select: none;
  display: flex;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}

.main {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 200px;
  height: 100vh;
  background-color: rgb(242, 242, 242);
  align-items: center;
  /* overflow: scroll; */
}
</style>