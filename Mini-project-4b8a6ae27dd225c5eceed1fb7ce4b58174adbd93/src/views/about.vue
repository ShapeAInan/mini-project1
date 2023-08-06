<template>
    <div id="full-container">
        <Headerabout />
        <title>About Exam Cell Automation</title>
        <div class="container">
		<div class="section">
			<h2>What is Exam Cell Automation?</h2>
			<p>Exam Cell Automation is a web-based application designed to simplify and automate the management of exams and results in educational institutions. The application helps exam cell officials to manage student registrations, hall ticket generation, exam scheduling, result publication, and more.</p>
		</div>
		<div class="section">
			<h2>Why use Exam Cell Automation?</h2>
			<p>Exam Cell Automation helps to streamline the exam management process, reduce manual errors, and save time and resources. With the application, exam cell officials can easily manage all aspects of the exam process, from student registrations to result publication. The application also provides real-time updates and reports to help officials make informed decisions.</p>
		</div>
		<div class="section">
			<h2>Who can use Exam Cell Automation?</h2>
			<p>Exam Cell Automation is designed for use by exam cell officials in educational institutions such as colleges and universities. The application is user-friendly and can be used by officials with little to no technical knowledge. </p>
		</div>
		<div class="section">
			<h2>Want to learn more?</h2>
			<p>Visit our <a href="#">FAQ</a> page or <a href="#">contact us</a> for more information about Exam Cell Automation.</p>
		</div>
	</div>
    </div>
</template>

<script>
import Headerabout from '../components/Headerabout.vue';

export default{
    name:'about_',
    components:{
        Headerabout,
    }
}
</script>

<style scoped>

h1 {
			margin: 0;
		}

		.container {
			max-width: 1200px;
			margin: 0 auto;
			padding: 20px;
		}

		.section {
			margin-bottom: 40px;
		}

		h2 {
			font-size: 24px;
			margin-bottom: 10px;
		}

		p {
			font-size: 16px;
			line-height: 1.5;
		}

		a {
			color: #007ACC;
		}

		.btn {
			display: inline-block;
			padding: 10px 20px;
			background-color: #007ACC;
			color: white;
			text-decoration: none;
			border-radius: 5px;
			margin-top: 20px;
			transition: background-color 0.3s ease;
		}

		.btn:hover {
			background-color: #005073;
		}
</style>
