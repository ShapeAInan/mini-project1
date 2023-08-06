<template>
  <button @click="showModal = true" class="btn">Malpractice Register</button>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h2>Add Faculty</h2>
      <form @submit.prevent="addFaculty">
        <input
          required
          class="input"
          type="text"
          id="username"
          v-model="Name"
          placeholder="Name of Student"
        />
        <br />
        <input
          required
          type="text"
          class="input"
          id="password"
          v-model="Register"
          placeholder="Batch"
        />
        <br />
        <input
          class="input"
          type="text"
          id="email"
          v-model="Class"
          placeholder="Exam Classroom"
        />
        <br />
        <input
          class="input"
          type="text"
          id="email"
          v-model="Remarks"
          placeholder="Remarks(in 15 words or so)"
        />
        <br />
        <div id="buttondiv">
          <button type="submit" class="btnsubmit">Add</button>
          <button class="btnsubmit" @click="showModal = false">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FacultyMalpractice",
  data() {
    return {
      showModal: false,
      Name: "",
      Register : "",
      Class : "",
      Remarks: "",
    };
  },
  methods:{
    addFaculty() {
      // Add logic to send the form data to the server
      this.faculties.push({
        username: this.username,
        password: this.password,
        email: this.email,
      });
      // Reset the form fields and close the modal
      this.username = "";
      this.password = "";
      this.email = "";
      this.showModal = false;
    },
  }
};
</script>

<style scoped>
.btn {
  margin: 10px;
  padding: 15px 25px;
  border-radius: 15%;
  border: 3px aquamarine solid;
  background-color: black;
  color: aquamarine;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana;
  transition: 0.4s;
}

.btn:hover {
  background-color: aquamarine;
  color: black;
  border: 3px black solid;
  font-family: Georgia, "Times New Roman", Times;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  display: block;
  margin-bottom: 10px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  padding: 5em;
}

form {
  display: flex;
  margin-top: 1em;
  justify-content: space-around;
  flex-direction: column;
}

#buttondiv {
  display: flex;
  justify-content: space-between;
}

.modal-content > h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}

.input {
  padding: 0.5em;
  border-radius: 12%;
}

.btnsubmit {
  padding: 0.5em 2em 0.5em 2em;
  background-color: black;
  color: aquamarine;
  border: 3px aquamarine solid;
}

.btnsubmit:hover {
  background-color: aquamarine;
  color: black;
  border: 3px black solid;
}

.viewclose {
  display: flex;
  justify-content: flex-start;
  margin-top: 1em;
  padding: 0.2em 1em 0.2em 1em;
  background-color: black;
  color: aquamarine;
  border: 3px aquamarine solid;
}

.viewclose:hover {
  background-color: aquamarine;
  color: black;
  border: 3px black solid;
}
</style>
