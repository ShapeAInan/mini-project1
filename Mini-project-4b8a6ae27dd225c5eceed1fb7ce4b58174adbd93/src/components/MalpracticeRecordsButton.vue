<template>
  <button @click="showViewModal = true" class="btn">Malpractice Records</button>
  <div v-if="showViewModal" class="modal">
    <div class="modal-content">
      <h2>Record of Malpractice</h2>
      <table class="table">
        <thead>
          <tr>
            <th class="head">RegisterNo</th>
            <th class="head">Batch</th>
            <th class="head">Class of exam</th>
            <th class="head">Remark</th>
            <th class="head">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(faculty, index) in faculties" :key="index">
            <td>{{ faculty.Name }}</td>
            <td class="facultypass">{{ faculty.Register }}</td>
            <td class="facultyemail">{{ faculty.Class }}</td>
            <td class="facultyemail">{{ faculty.Remarks }}</td>
            <td>
              <button @click="editFaculty(index)" class="edit">Edit</button>
              <button @click="deleteFaculty(index)" class="delete">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="showViewModal = false" class="viewclose">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MalpracticeRecordsButton",
  data() {
    return {
      showViewModal: false,
      faculties: [
        { Name: "john", Register: "password1", Class: "john@example.com",Remarks:"Copied" },
        { Name: "jane", Register: "password2", Class: "jane@example.com",Remarks:"Copied" },
        { Name: "bob", Register: "password3", Class: "bob@example.com" ,Remarks:"Used Electronics"},
        { Name: "jane", Register: "password2", Class: "jane@example.com",Remarks:"Copied" },
      ],
    };
  },
  methods: {
    editFaculty(index) {
      alert("Editing faculty:", this.faculties[index]);
    },
    deleteFaculty(index) {
      this.faculties.splice(index, 1);
    },
  },
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

.viewclose {
  display: flex;
  justify-content: flex-start;
  margin-top: 1em;
  padding: 0.2em 1em 0.2em 1em;
  background-color: black;
  color: aquamarine;
  border: 3px aquamarine solid;
}

.btn:hover {
  background-color: aquamarine;
  color: black;
  border: 3px black solid;
  font-family: Georgia, "Times New Roman", Times;
}

.viewclose:hover {
  background-color: aquamarine;
  color: black;
  border: 3px black solid;
}

.edit{
    background-color: green;
    color:white;
    margin-left: 1em;
}

.delete{
    background-color: red;
    color:white;
    margin-left: 1em;
}

.edit:hover,.delete:hover{
    cursor:pointer;
}

.table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

.email-cell {
  padding-left: 20px;
}

h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5em;
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
  padding: 3em;
}
</style>
