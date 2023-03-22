<template>
  <div>
    <button id="hint" @click="showAlert">HINT</button>
  </div>
  <h1 style=" padding-top:15px ; color: #0d47a1; display: flex;
  flex-direction: column;
  align-items: center">Notes</h1>

  <form  id="main-form" @submit.prevent="checkForm">
  <label for="name"
    >Name: <input type="text"  id="name"  v-model="name" required placeholder="Name"
    /></label>
    <label for="pass"
    >Password:
      <input type="password"  id="pass" v-model="pass" required placeholder="Password"
      /></label>
    <label
    >Check Pass:
      <input
          type="password"
          v-model="repass" required
          id="repass"
          placeholder="Check Pass"
      /></label>
<!--    <span-->
<!--    >Sex:-->
<!--        <label for="male"-->
<!--        >Men:<input type="radio" v-model="state" required id="male" value="Men"-->
<!--        /></label>-->
<!--        <label for="woman"-->
<!--        >Woman:<input-->
<!--            type="radio"-->
<!--            v-model="state" required-->
<!--            id="woman"-->
<!--            value="Woman" /></label-->
<!--        ></span>-->
    <div v-if="error !== ''" id="error" style="color:red">{{ error }}</div>
    <input type="submit" name="submit" value="Login" id="subb"  />
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      pass: '',
      repass: '',
      state: '',
      error: ''
    }
  },
  methods: {
    checkForm() {
      let fail = '';
      if (this.name === '' || this.pass === '' ) {
        fail = 'Check all fields';
      } else if (this.name.length <= 1 || this.name.length >= 50) {
        fail = 'Enter real name';
      } else if (this.pass !== this.repass) {
        fail = 'Passwords are not the same';
      } else if (this.pass.split('&').length > 1) {
        fail = 'NO';
      }
      if (fail !== '') {
        this.error = fail;
      } else {

        window.location = "/";
      }
    },
      showAlert() {
        alert('Enter Random name and SAME Passwords!')
      }
  }
}
</script>
<style scoped>
#main-form {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  border-radius: 5px;
  border: 2px solid #acc7ec;
  padding: 20px;
  max-width: 400px;
  margin: auto;
  margin-top: 100px;
  background-color: #fff;
  /*box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);*/
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
}

label {
  display: block;
  margin-bottom: 10px;

}

input[type="text"],
input[type="password"] {
  padding: 10px;
  border: 2px solid #acc7ec;
  border-radius: 5px;
  width: 100%;

}

input[type="submit"] {
  background-color: #1a73e8;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

input[type="submit"]:hover {
  background-color: #0d47a1;
}

#error {
  color: red;
  margin-top: 10px;
}

button {
  background-color: #fff;
  color: #1a73e8;
  padding: 10px 20px;
  border: 1px solid #1a73e8;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #1a73e8;
  color: #fff;
}

.hint{
  margin-left: 30px;
}

button:focus {
  outline: none;
}
</style>
