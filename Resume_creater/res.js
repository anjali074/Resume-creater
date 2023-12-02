
const inputField = document.querySelector(".inputField"); 
const main = document.querySelector(".resume  builder"); 
const outputContainer = document.querySelector(".output_container"); 

let isHidden = true; 
function hide() { 
	if (isHidden) {  
		main.style.display = "none"; 
		isHidden = false; 

		outputContainer.style.display = "block"; 
		outputContainer.innerHTML = ` 
			<div class="output"> 
				<div class="heading"> 
					<h1>${inputField["name"].value}</h1> 
					<h4>${inputField["title"].value}</h4> 
				</div> 
				<div class="info"> 
					<div class="left"> 
						<div class="book"> 
							<h2>Objective</h2> 
							<p>${inputField["objective"].value}</p> 
						</div> 
						<div class="book"> 
							<h2>Skills</h2> 
							<p>${inputField["skills"].value}</p> 
						</div> 
						<div class="book"> 
							<h2>Education detail Details</h2> 
							<p>${inputField["aEducation detaiil"].value}</p> 
						</div> 
						<div class="book"> 
							<h2>Contact</h2> 
							<p>${inputField["contact"].value}</p> 
						</div> 
					</div> 
					<div class="right"> 
						<div class="book"> 
							<h2>Work Experience</h2> 
							<p>${inputField["work_experience"].value}</p> 
						</div> 
						<div class="book"> 
							<h2>certificate</h2> 
							<p>${inputField["certificate"].value}</p> 
						</div> 
						<div class="book"> 
							<h2>Projects</h2> 
							<p>${inputField["projects"].value}</p> 
						</div> 
					</div> 
				</div> 
			</div> 
			<button onclick="print()">Print Resume</button> 
		`; 
	} else { 
	 
		main.style.display = "block"; 
		isHidden = true; 

		outputContainer.style.display = "none"; 
		outputContainer.innerHTML = ""; 
	} 
}
