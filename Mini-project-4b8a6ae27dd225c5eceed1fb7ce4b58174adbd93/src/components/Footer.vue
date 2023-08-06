<template>
  <footer>
    <div class="footer-container">
      <div class="footer-left">
        <h3>AUTOMIZE</h3>
        <p>TKM COLLEGE OF ENGINEERING - Karicode,Kollam,kerala</p>
        <p>Contact Us:9037230909</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer_",
};
</script>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.footer-left {
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 1rem;
}

.footer-right ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-right ul li {
  margin: 0.5rem;
}

.footer-right ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-right ul li a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .footer-left {
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }
}
</style>
