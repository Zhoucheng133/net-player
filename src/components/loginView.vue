<template>
  <div :class="setLoginHandler? 'bg_off':'bg'">
    <div class="container">
      <div class="title">
        <a-icon type="right" style="margin-right: 5px;" /> 连接到你的音乐库
      </div>
      <div class="form">
        <div class="formItem">
          <div class="f_label">URL地址</div>
          <!-- <a-input placeholder="输入URL地址" v-model="inputArea.url" /> -->
          <a-input-group compact>
            <a-select default-value="http://" @change="selectorChange">
              <a-select-option value="http://">
                http://
              </a-select-option>
              <a-select-option value="https://">
                https://
              </a-select-option>
            </a-select>
            <a-input v-model="inputArea.url"  placeholder="输入URL地址" style="width: calc(100% - 85px); text-align: left;"/>
          </a-input-group>
        </div>
        <div class="formItem">
          <div class="f_label">用户名</div>
          <a-input placeholder="输入用户名" v-model="inputArea.username" />
        </div>
        <div class="formItem">
          <div class="f_label">密码</div>
          <a-input-password placeholder="输入密码" v-model="inputArea.password" @keyup.enter="loginController" />
        </div>
      </div>
      <div class="loginButton_loading" v-if="loading"><a-icon type="loading" /></div>
      <div class="loginButton" @click="loginController" v-else><a-icon type="arrow-right" /></div>
      <div class="help">
        <div>需要帮助？</div>
        <div class="useTip" @click="toHelp">点击这里跳转到使用说明</div>
      </div>
    </div>
  </div>
</template>

<script>
const { shell } = require('electron')
const CryptoJS = require('crypto-js');

var axios = require("axios");

export default {
  data() {
    return {
      inputArea: {
        url: "",
        username: "",
        password: "",
      },
      loading: false,

      selectHeader: 'http://',

      setLoginHandler: false,
    }
  },
  methods: {
    selectorChange(value){
      this.selectHeader=value;
    },
    // 生成随机数
    generateRandomString(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }

      return result;
    },
    loginController() {
      if (this.inputArea.url == "") {
        this.$message.error('URL地址不能为空');
        return;
      } else if (this.inputArea.username == "") {
        this.$message.error('用户名不能为空');
        return;
      } else if (this.inputArea.password == "") {
        this.$message.error('密码不能为空');
        return;
      }
      this.loading = true;
      // 如果最后带/，去掉
      if (this.inputArea.url.slice(-1) == '/') {
        this.inputArea.url = this.inputArea.url.slice(0, -1);
      }

      // 校验码，随机
      const salt = this.generateRandomString(6);
      const token = CryptoJS.MD5(this.inputArea.password + salt).toString();

      // ipcRenderer.send('loginRequest', this.inputArea.url, this.inputArea.username, salt, token);
      axios.post(this.selectHeader+this.inputArea.url + "/rest/ping.view?v=1.13.0&c=netPlayer&f=json&u=" + this.inputArea.username + "&s=" + salt + "&t=" + token)
        .then((response) => {
          this.loading = false;
          response = response.data;
          if (response == null || response['subsonic-response'] == undefined) {
            this.$message.error('请求失败，请检查URL地址是否正确');
            return;
          }
          var status = response['subsonic-response'].status;
          if (status == 'ok') {
            this.$message.success("登录成功!")
            this.setLoginHandler=true;
            setTimeout(() => {
              this.$emit("getLogin", true);
            }, 300);

            localStorage.setItem("username", this.inputArea.username);
            localStorage.setItem("salt", salt);
            localStorage.setItem("token", token);
            localStorage.setItem("url", this.selectHeader+this.inputArea.url);
          } else {
            this.$message.error('用户名或者密码错误!');
            return;
          }
        })
        .catch(() => {
          this.loading = false;
          this.$message.error('请求失败，请检查URL地址是否正确');
        })
    },
    toHelp() {
      shell.openExternal("https://gitee.com/Ryan-zhou/net-player/blob/master/HELP.md");
    },
  },
  created() {

  },
}
</script>

<style>
.ant-select{
  width: 85px !important;
}
</style>

<style scoped>
.loginButton_loading:hover {
  cursor: not-allowed;
}

.loginButton_loading {
  background-color: #71baff;
  color: white;
  font-size: 28px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out .2s;
  border-top-left-radius: 10px;
}

.useTip:hover {
  color: #0061bc;
  cursor: pointer;
}

.useTip {
  transition: all ease-in-out .2s;
}

.help {
  display: flex;
  position: absolute;
  bottom: 30px;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
}

.loginButton:hover {
  background-color: #0061bc;
  cursor: pointer;
}

.loginButton {
  background-color: #1890ff;
  color: white;
  font-size: 28px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out .2s;
  border-top-left-radius: 10px;
}

.f_label {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
}

.formItem {
  grid-gap: 10px;
  display: grid;
  grid-template-columns: 80px 240px;
  margin-bottom: 20px;
}

.form {
  user-select: none;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  /* color: #4C83FF; */
  font-size: 24px;
  align-self: flex-start;
}

.container {
  user-select: none;
  width: 500px;
  height: 400px;
  background-color: white;
  backdrop-filter: blur(15px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px 20px 20px 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
@keyframes show {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

@keyframes hide {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}

.bg_off{
  animation: hide .3s forwards linear;
}

.bg{
  animation: show .3s forwards linear;
}

.bg, .bg_off {
  padding-top: 30px;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: rgb(242, 242, 242);
  transition: all ease-in-out .3s;
}
</style>